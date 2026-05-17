import { Suspense } from "react";
import ProgrammesPage from "@/components/programmes-page";
import { getBranchAgeFilters, getBranchInterestFilters, getBranchProgrammes } from "@/lib/branch-config";

export const metadata = {
  title: "Our Programmes | Meu Labs New Zealand",
  description: "Explore the New Zealand Meu Labs programmes by pathway or by interest."
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProgrammesPage
        basePath="/nz"
        programmesData={getBranchProgrammes("nz")}
        ageFiltersData={getBranchAgeFilters("nz")}
        interestFiltersData={getBranchInterestFilters("nz")}
        explorerCopy="Structured robotics, coding, AI, and engineering programmes for the New Zealand Meu Labs journey. Use the controls below to explore by age pathway or by interest."
      />
    </Suspense>
  );
}
