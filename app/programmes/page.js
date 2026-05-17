import { Suspense } from "react";
import ProgrammesPage from "@/components/programmes-page";

export const metadata = {
  title: "Our Programmes | Meu Labs Sri Lanka",
  description: "Explore Meu Labs programmes by pathway or by interest."
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProgrammesPage />
    </Suspense>
  );
}
