import HomePage from "@/components/home-page";
import { getBranchPathwayFamilies, getBranchStats } from "@/lib/branch-config";

export const metadata = {
  title: "Robotics, Coding & STEM for Kids | Meu Labs New Zealand",
  description: "Project-based robotics, coding, AI, and engineering programmes for students in New Zealand."
};

export default function Page() {
  return (
    <HomePage
      basePath="/nz"
      heroChip="Robotics, Coding & STEM for New Zealand"
      heroCopy="The New Zealand branch opens with a streamlined landing page, a branch-specific programmes explorer, and dedicated about, contact, and showcase pages so families can navigate a tighter pathway set."
      journeyCopy="A structured progression from curious beginner to advanced technical pathways."
      statsData={getBranchStats("nz")}
      pathwayFamiliesData={getBranchPathwayFamilies("nz")}
    />
  );
}
