/**
 * Course Completions -> Supabase staging sync
 *
 * Source spreadsheet:
 *   Course Completions (tabs: "4m - grad" and "6m - grad")
 * Destination:
 *   public.course_completions_staging
 *
 * One-time setup:
 * 1. In this spreadsheet, open Extensions > Apps Script and paste this file.
 * 2. Open Project Settings > Script properties and add:
 *      SUPABASE_URL        https://cflzvunjchtksmbmovcl.supabase.co
 *      SUPABASE_SECRET_KEY an sb_secret_... key (never an anon/publishable key)
 * 3. Run testCourseCompletionsSupabaseConnection() and authorize the script.
 * 4. Run syncCourseCompletionsToSupabase() once.
 * 5. Run createCourseCompletionsSyncTrigger() for automatic hourly syncs.
 *
 * Security: the MeuNets password columns are deliberately never read into a
 * record, hashed, logged, or sent to Supabase.
 */

const COURSE_COMPLETIONS_SPREADSHEET_ID = '1YV7SVV9wp5xAHM6_EarkxcDXca-GbNkVRpjnm49m0uo';
const COURSE_COMPLETIONS_TABLE = 'course_completions_staging';
const COURSE_COMPLETIONS_SHEETS = ['4m - grad', '6m - grad'];
const SYNC_BATCH_SIZE = 100;

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Supabase Sync')
    .addItem('Sync course completions now', 'syncCourseCompletionsToSupabase')
    .addItem('Test connection', 'testCourseCompletionsSupabaseConnection')
    .addSeparator()
    .addItem('Create hourly trigger', 'createCourseCompletionsSyncTrigger')
    .addItem('Remove sync triggers', 'removeCourseCompletionsSyncTriggers')
    .addToUi();
}

function syncCourseCompletionsToSupabase() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) {
    throw new Error('Another course-completions sync is already running.');
  }

  try {
    const spreadsheet = SpreadsheetApp.openById(COURSE_COMPLETIONS_SPREADSHEET_ID);
    const results = COURSE_COMPLETIONS_SHEETS.map(function (sheetName) {
      const sheet = spreadsheet.getSheetByName(sheetName);
      if (!sheet) throw new Error('Missing required tab: ' + sheetName);
      return syncCourseCompletionSheet_(sheet);
    });

    const summary = results.map(function (result) {
      return result.sheet + ': ' + result.changed + ' changed, ' +
        result.unchanged + ' unchanged, ' + result.deleted + ' removed';
    }).join('\n');
    console.log(summary);
    return summary;
  } finally {
    lock.releaseLock();
  }
}

function syncCourseCompletionSheet_(sheet) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const values = lastRow >= 2
    ? sheet.getRange(2, 1, lastRow - 1, lastColumn).getDisplayValues()
    : [];
  const existing = getExistingRows_(sheet.getName());
  const liveRows = {};
  const changed = [];
  let unchangedCount = 0;

  values.forEach(function (row, index) {
    const rowNumber = index + 2;
    const record = sheet.getName() === '4m - grad'
      ? build4MonthRecord_(row, rowNumber, sheet.getName())
      : build6MonthRecord_(row, rowNumber, sheet.getName());

    if (!record) return;
    liveRows[rowNumber] = true;

    const old = existing[rowNumber];
    if (!old || old.source_hash !== record.source_hash || old.source_deleted) {
      changed.push(record);
    } else {
      unchangedCount += 1;
    }
  });

  chunk_(changed, SYNC_BATCH_SIZE).forEach(upsertRecords_);

  const deletedRowNumbers = Object.keys(existing)
    .map(Number)
    .filter(function (rowNumber) {
      return !liveRows[rowNumber] && !existing[rowNumber].source_deleted;
    });
  chunk_(deletedRowNumbers, SYNC_BATCH_SIZE).forEach(function (rows) {
    markDeletedRows_(sheet.getName(), rows);
  });

  return {
    sheet: sheet.getName(),
    changed: changed.length,
    unchanged: unchangedCount,
    deleted: deletedRowNumbers.length
  };
}

function build4MonthRecord_(row, rowNumber, sheetName) {
  return finalizeRecord_({
    date_added: value_(row, 0),
    class_code: value_(row, 1),
    secondary_class_code: '',
    student_id_ml: value_(row, 2),
    student_name: value_(row, 3),
    age: value_(row, 4),
    school: value_(row, 5),
    medium: value_(row, 6),
    parent_name: value_(row, 7),
    parent_contact: value_(row, 8),
    parent_email: value_(row, 9),
    mode: value_(row, 10),
    month_code: value_(row, 11),
    start_date: value_(row, 12),
    completed_weeks: value_(row, 13),
    instructor: value_(row, 14),
    whatsapp_contact: value_(row, 15),
    payment_plan: value_(row, 16),
    estimate_number: value_(row, 17),
    payment_logs: value_(row, 18),
    payments_completed: value_(row, 19),
    si_form_filled: value_(row, 20),
    parent_call_months: value_(row, 21),
    monthly_parent_comments: value_(row, 22),
    parent_call_1: value_(row, 23),
    parent_call_2: value_(row, 24),
    parent_call_3: value_(row, 25),
    parent_call_4: value_(row, 26),
    parent_call_5: '',
    parent_call_6: '',
    meunets_uid: value_(row, 27),
    // Column 29 (MeuNets PWD) is intentionally skipped.
    meunets_link: value_(row, 29),
    class_end_date_approx: value_(row, 30),
    maps_date: value_(row, 31),
    maps_comments: value_(row, 32),
    maps_completed: value_(row, 33),
    next_course: value_(row, 34),
    flag_sales: value_(row, 35),
    sales_notified: value_(row, 36),
    sales_picked: value_(row, 37),
    added_to_cert_tab: value_(row, 38)
  }, rowNumber, sheetName);
}

function build6MonthRecord_(row, rowNumber, sheetName) {
  return finalizeRecord_({
    date_added: value_(row, 0),
    class_code: value_(row, 1),
    student_id_ml: value_(row, 2),
    secondary_class_code: value_(row, 3),
    student_name: value_(row, 4),
    age: value_(row, 5),
    school: value_(row, 6),
    medium: value_(row, 7),
    parent_name: value_(row, 8),
    parent_contact: value_(row, 9),
    parent_email: value_(row, 10),
    mode: value_(row, 11),
    month_code: value_(row, 12),
    start_date: value_(row, 13),
    completed_weeks: value_(row, 14),
    instructor: value_(row, 15),
    whatsapp_contact: value_(row, 16),
    payment_plan: value_(row, 17),
    estimate_number: value_(row, 18),
    payment_logs: value_(row, 19),
    payments_completed: value_(row, 20),
    si_form_filled: value_(row, 21),
    parent_call_months: value_(row, 22),
    monthly_parent_comments: value_(row, 23),
    parent_call_1: value_(row, 24),
    parent_call_2: value_(row, 25),
    parent_call_3: value_(row, 26),
    parent_call_4: value_(row, 27),
    parent_call_5: value_(row, 28),
    parent_call_6: value_(row, 29),
    meunets_uid: value_(row, 30),
    // Column 32 (MeuNets PWD) is intentionally skipped.
    meunets_link: value_(row, 32),
    class_end_date_approx: value_(row, 33),
    maps_date: value_(row, 34),
    maps_comments: value_(row, 35),
    maps_completed: value_(row, 36),
    next_course: value_(row, 37),
    flag_sales: value_(row, 38),
    sales_notified: value_(row, 39),
    sales_picked: value_(row, 40),
    added_to_cert_tab: ''
  }, rowNumber, sheetName);
}

function finalizeRecord_(payload, rowNumber, sheetName) {
  if (!payload.student_id_ml && !payload.student_name) return null;

  const sourceHash = sha256_(JSON.stringify(payload));
  return Object.assign({}, payload, {
    spreadsheet_id: COURSE_COMPLETIONS_SPREADSHEET_ID,
    sheet_name: sheetName,
    row_number: rowNumber,
    source_hash: sourceHash,
    source_deleted: false,
    raw_payload: payload,
    sync_status: 'pending',
    sync_error: null,
    processed_at: null,
    last_synced_at: new Date().toISOString()
  });
}

function getExistingRows_(sheetName) {
  const query = '?select=row_number,source_hash,source_deleted' +
    '&spreadsheet_id=eq.' + encodeURIComponent(COURSE_COMPLETIONS_SPREADSHEET_ID) +
    '&sheet_name=eq.' + encodeURIComponent(sheetName) +
    '&limit=10000';
  const rows = supabaseRequest_('get', query);
  const byRow = {};
  rows.forEach(function (row) { byRow[row.row_number] = row; });
  return byRow;
}

function upsertRecords_(records) {
  if (!records.length) return;
  supabaseRequest_(
    'post',
    '?on_conflict=spreadsheet_id,sheet_name,row_number',
    records,
    'resolution=merge-duplicates,return=minimal'
  );
}

function markDeletedRows_(sheetName, rowNumbers) {
  if (!rowNumbers.length) return;
  const query = '?spreadsheet_id=eq.' + encodeURIComponent(COURSE_COMPLETIONS_SPREADSHEET_ID) +
    '&sheet_name=eq.' + encodeURIComponent(sheetName) +
    '&row_number=in.(' + rowNumbers.join(',') + ')';
  supabaseRequest_('patch', query, {
    source_deleted: true,
    sync_status: 'pending',
    sync_error: null,
    processed_at: null,
    last_synced_at: new Date().toISOString()
  }, 'return=minimal');
}

function supabaseRequest_(method, query, body, prefer) {
  const properties = PropertiesService.getScriptProperties();
  const baseUrl = requiredProperty_(properties, 'SUPABASE_URL').replace(/\/$/, '');
  const secretKey = requiredProperty_(properties, 'SUPABASE_SECRET_KEY');
  if (!/^sb_secret_/.test(secretKey)) {
    throw new Error('SUPABASE_SECRET_KEY must be a server-side sb_secret_... key.');
  }

  const options = {
    method: method,
    muteHttpExceptions: true,
    headers: {
      apikey: secretKey,
      Accept: 'application/json'
    }
  };
  if (prefer) options.headers.Prefer = prefer;
  if (body !== undefined) {
    options.contentType = 'application/json';
    options.payload = JSON.stringify(body);
  }

  const url = baseUrl + '/rest/v1/' + COURSE_COMPLETIONS_TABLE + (query || '');
  let response;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    response = UrlFetchApp.fetch(url, options);
    const status = response.getResponseCode();
    if (status >= 200 && status < 300) {
      const text = response.getContentText();
      return text ? JSON.parse(text) : null;
    }
    if (status !== 429 && status < 500) break;
    Utilities.sleep(Math.pow(2, attempt) * 1000);
  }

  const status = response.getResponseCode();
  const responseText = response.getContentText().slice(0, 1000);
  throw new Error('Supabase request failed (' + status + '): ' + responseText);
}

function testCourseCompletionsSupabaseConnection() {
  supabaseRequest_('get', '?select=id&limit=1');
  console.log('Supabase connection succeeded.');
  return 'Supabase connection succeeded.';
}

function createCourseCompletionsSyncTrigger() {
  removeCourseCompletionsSyncTriggers();
  ScriptApp.newTrigger('syncCourseCompletionsToSupabase')
    .timeBased()
    .everyHours(1)
    .create();
  return 'Hourly course-completions sync trigger created.';
}

function removeCourseCompletionsSyncTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    if (trigger.getHandlerFunction() === 'syncCourseCompletionsToSupabase') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function requiredProperty_(properties, name) {
  const value = properties.getProperty(name);
  if (!value) throw new Error('Missing Apps Script property: ' + name);
  return value.trim();
}

function value_(row, index) {
  return index < row.length ? String(row[index]).trim() : '';
}

function sha256_(text) {
  return Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    text,
    Utilities.Charset.UTF_8
  ).map(function (byte) {
    return ('0' + ((byte + 256) % 256).toString(16)).slice(-2);
  }).join('');
}

function chunk_(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}
