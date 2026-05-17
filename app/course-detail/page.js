import { CourseDetailPage, getCourseDetail } from "@/components/course-detail-page";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const course = getCourseDetail(params.course);

  if (!course) {
    return {
      title: "Course Detail | Meu Labs Sri Lanka"
    };
  }

  return {
    title: `${course.title} | Meu Labs Sri Lanka`,
    description: course.summary
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  return <CourseDetailPage courseId={params.course} />;
}
