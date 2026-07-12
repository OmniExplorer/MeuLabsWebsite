export interface IntakeBatch {
  courseSlug: string;
  label: string;
  spotsLeft: number;
  intakeMonth: string;
}

const intakeMonth = new Date().toLocaleString('default', { month: 'long' });

export const intakeTemplates: Omit<IntakeBatch, 'spotsLeft' | 'intakeMonth'>[] = [
  { courseSlug: 'kx-j', label: 'Saturday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'kx-j', label: 'Saturday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'kx', label: 'Tuesday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'kx', label: 'Wednesday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'kx', label: 'Saturday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'kx', label: 'Saturday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'kx', label: 'Saturday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'kx', label: 'Sunday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'kx', label: 'Sunday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'kx', label: 'Sunday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'coding-software', label: 'Saturday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'coding-software', label: 'Sunday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'coding-software', label: 'Sunday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'coding-software', label: 'Wednesday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'coding-software', label: 'Friday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'robotics-iot', label: 'Wednesday, 3:00 PM - 6:00 PM' },
  { courseSlug: 'robotics-iot', label: 'Saturday, 12:00 PM - 3:00 PM' },
  { courseSlug: 'robotics-iot', label: 'Sunday, 9:00 AM - 12:00 PM' },
  { courseSlug: 'robotics-iot', label: 'Sunday, 3:30 PM - 6:30 PM' },
  { courseSlug: 'digital-media', label: 'Saturday, 10:00 AM - 12:00 PM' },
  { courseSlug: 'digital-media', label: 'Tuesday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'se', label: 'Wednesday, 3:30 PM - 5:30 PM' },
  { courseSlug: 'se', label: 'Wednesday, 6:30 PM - 8:30 PM' },
  { courseSlug: 'se', label: 'Friday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'se', label: 'Sunday, 4:00 PM - 6:00 PM' },
  { courseSlug: 'ds', label: 'Saturday, 1:00 PM - 3:00 PM' },
  { courseSlug: 'ig', label: 'Friday, 6:30 PM - 8:30 PM' },
  { courseSlug: 'eee', label: 'Friday, 3:00 PM - 6:00 PM' },
  { courseSlug: 'eee', label: 'Sunday, 12:30 PM - 3:30 PM' },
  { courseSlug: 'es', label: 'Saturday, 3:00 PM - 6:00 PM' }
];

export const intakes: IntakeBatch[] = intakeTemplates.map((batch) => ({
  ...batch,
  spotsLeft: 1,
  intakeMonth
}));
