export interface IntakeBatch {
  courseSlug: string;
  label: string;
  spotsLeft: number;
  intakeMonth: string;
}

const intakeMonth = new Date().toLocaleString('default', { month: 'long' });

export const intakeTemplates: Omit<IntakeBatch, 'spotsLeft' | 'intakeMonth'>[] = [
  { courseSlug: 'kx', label: 'Tuesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'kx', label: 'Wednesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'kx', label: 'Saturday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'kx', label: 'Sunday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'an', label: 'Wednesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'an', label: 'Saturday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'an', label: 'Sunday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'pd', label: 'Wednesday, 3:30 PM - 6:30 PM' },
  { courseSlug: 'pd', label: 'Saturday, 9:00 AM - 12:00 PM' },
  { courseSlug: 'pd', label: 'Sunday, 1:00 PM - 4:00 PM' },
  { courseSlug: 'cx', label: 'Saturday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'cx', label: 'Tuesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'se', label: 'Wednesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'se', label: 'Saturday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'se', label: 'Sunday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'ds', label: 'Wednesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'ds', label: 'Saturday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'ds', label: 'Sunday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'eee', label: 'Friday, 3:30 PM - 6:30 PM' },
  { courseSlug: 'eee', label: 'Sunday, 9:00 AM - 12:00 PM' },
  { courseSlug: 'es', label: 'Wednesday, 3:30 PM - 6:30 PM' },
  { courseSlug: 'es', label: 'Saturday, 9:00 AM - 12:00 PM' },
  { courseSlug: 'es', label: 'Sunday, 1:00 PM - 4:00 PM' }
];

export const intakes: IntakeBatch[] = intakeTemplates.map((batch) => ({
  ...batch,
  spotsLeft: 1,
  intakeMonth
}));
