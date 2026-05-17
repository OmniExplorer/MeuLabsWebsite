import { notFound } from "next/navigation";
import { AboutPage, ContactPage } from "@/components/about-contact-pages";
import { ProgrammePage } from "@/components/programme-page";
import { getBranchStaticProgrammePages, getBranchStaticProgrammeSlugs } from "@/lib/branch-config";

const branchPages = getBranchStaticProgrammePages("nz");

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "contact" },
    ...getBranchStaticProgrammeSlugs("nz").map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }) {
  const route = (await params).slug;

  if (route === "about") {
    return {
      title: "About Meu Labs | New Zealand",
      description: "Learn how Meu Labs structures robotics, coding, AI, and engineering learning for students in New Zealand."
    };
  }

  if (route === "contact") {
    return {
      title: "Contact Meu Labs | New Zealand",
      description: "Talk to Meu Labs New Zealand about programmes, pathway fit, and next steps."
    };
  }

  const page = branchPages[route];
  if (page) {
    return {
      title: page.title.replace("Sri Lanka", "New Zealand"),
      description: page.description.replace("Sri Lanka", "New Zealand")
    };
  }

  return {};
}

export default async function BranchPage({ params }) {
  const route = (await params).slug;

  if (route === "about") {
    return (
      <AboutPage
        basePath="/nz"
        aboutCopy="Meu Labs New Zealand focuses the ecosystem around robotics, coding, AI, and engineering pathways that help students build, test, present, and grow through real project work."
      />
    );
  }

  if (route === "contact") {
    return <ContactPage basePath="/nz" />;
  }

  const page = branchPages[route];
  if (page) {
    return <ProgrammePage page={page} basePath="/nz" />;
  }

  notFound();
}
