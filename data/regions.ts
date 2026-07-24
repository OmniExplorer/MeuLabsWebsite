import { allCourses, type Course } from './courses';

export const nzCourseSlugs = ['kx-j', 'kx', 'coding-software', 'se', 'ds', 'gd', 'cs', 'ua', 'fs'];

export const nzConfig = {
  basePath: '/nz',
  countryName: 'New Zealand',
  countryCode: 'NZ',
  city: 'Auckland',
  address: 'New Zealand',
  phoneDisplay: 'Email hello.nz@meulabs.org',
  phoneHref: 'mailto:hello.nz@meulabs.org',
  whatsappNumber: '',
  email: 'hello.nz@meulabs.org',
  openingHours: 'Mon - Sun | 10:00 AM - 7:00 PM NZT',
  courseSlugs: nzCourseSlugs
};

export function getNzCourses(): Course[] {
  return nzCourseSlugs
    .map((slug) => allCourses.find((course) => course.slug === slug))
    .filter((course): course is Course => Boolean(course))
    .map((course) => ({
      ...course,
      location: course.slug === 'ua' || course.slug === 'fs' ? 'Online / New Zealand' : 'Online / New Zealand cohorts'
    }));
}

export function getNzCourse(slug: string) {
  return getNzCourses().find((course) => course.slug === slug);
}
