import { CourseDetailPage, getCourseDetail } from "@/components/course-detail-page";
import { isCourseAvailableForBranch } from "@/lib/branch-config";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const course = getCourseDetail(params.course);

  if (!course || !isCourseAvailableForBranch("nz", params.course)) {
    return {
      title: "Course Detail | Meu Labs New Zealand"
    };
  }

  return {
    title: `${course.title} | Meu Labs New Zealand`,
    description: course.summary
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  return <CourseDetailPage courseId={params.course} basePath="/nz" branch="nz" />;
}
