import StudentCreationsPage from "@/components/student-creations-page";

export const metadata = {
  title: "Student Creations | Meu Labs New Zealand",
  description: "Explore a gallery of projects and creative outputs from the Meu Labs New Zealand branch."
};

export default function Page() {
  return <StudentCreationsPage basePath="/nz" />;
}
