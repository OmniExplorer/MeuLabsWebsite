import { MetadataRoute } from 'next';
import { courses } from '@/data/courses';

const BASE_URL = 'https://meulabs.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/courses`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/projects`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: 'yearly' }
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly'
  }));

  return [...staticRoutes, ...courseRoutes];
}
