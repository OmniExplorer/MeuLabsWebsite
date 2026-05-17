import { notFound } from "next/navigation";
import { AboutPage, ContactPage } from "@/components/about-contact-pages";
import { ProgrammePage } from "@/components/programme-page";
import { staticProgrammePages, staticProgrammeSlugs } from "@/lib/programme-pages-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "contact" },
    ...staticProgrammeSlugs.map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }) {
  const route = (await params).slug;

  if (route === "about") {
    return {
      title: "About Meu Labs | Sri Lanka",
      description: "Learn how Meu Labs structures robotics, coding, AI, design, and STEM learning for students in Sri Lanka."
    };
  }

  if (route === "contact") {
    return {
      title: "Contact Meu Labs | Sri Lanka",
      description: "Talk to Meu Labs about programmes, pathway fit, and next steps."
    };
  }

  const page = staticProgrammePages[route];
  if (page) {
    return {
      title: page.title,
      description: page.description
    };
  }

  return {};
}

export default async function LegacyPage({ params }) {
  const route = (await params).slug;

  if (route === "about") {
    return <AboutPage />;
  }

  if (route === "contact") {
    return <ContactPage />;
  }

  const page = staticProgrammePages[route];
  if (page) {
    return <ProgrammePage page={page} />;
  }

  notFound();
}
