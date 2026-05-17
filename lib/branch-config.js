import { ageFilters, courseDetails, interestFilters, navLinks, pathwayFamilies, programmes, stats } from "@/lib/site-data";
import { staticProgrammePages } from "@/lib/programme-pages-data";

export const NZ_EXCLUDED_PROGRAMME_IDS = new Set([
  "product-design",
  "maker-lab",
  "embedded-systems",
  "animation",
  "eee",
  "digital-marketing",
  "university-pathway",
  "incubator-hub"
]);

export const NZ_EXCLUDED_PAGE_SLUGS = new Set([
  "product-design",
  "embedded-systems",
  "eee"
]);

export const NZ_EXCLUDED_COURSE_IDS = new Set([
  "ai-explorers",
  "maker-lab",
  "animation",
  "digital-marketing",
  "university-pathway",
  "incubator-hub"
]);

export function withBasePath(basePath = "", href) {
  if (!basePath) {
    return href;
  }

  if (typeof href === "string") {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http://") || href.startsWith("https://")) {
      return href;
    }

    if (href === "/") {
      return basePath;
    }

    const url = new URL(href, "https://meulabs.local");
    if (url.pathname === basePath || url.pathname.startsWith(`${basePath}/`)) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    const pathname = url.pathname === "/" ? basePath : `${basePath}${url.pathname}`;
    return `${pathname}${url.search}${url.hash}`;
  }

  if (href && typeof href === "object") {
    return {
      ...href,
      pathname: withBasePath(basePath, href.pathname || "/")
    };
  }

  return href;
}

export function buildBranchNavLinks(basePath = "") {
  return navLinks.map((link) => ({
    ...link,
    href: withBasePath(basePath, link.href)
  }));
}

export function getBranchProgrammes(branch = "sl") {
  if (branch !== "nz") {
    return programmes;
  }

  return programmes.filter((programme) => !NZ_EXCLUDED_PROGRAMME_IDS.has(programme.id));
}

export function getBranchAgeFilters(branch = "sl") {
  if (branch !== "nz") {
    return ageFilters;
  }

  const visibleFamilies = new Set(getBranchProgrammes(branch).map((programme) => programme.family));
  return ageFilters.filter((filter) => filter.value === "all" || visibleFamilies.has(filter.value));
}

export function getBranchInterestFilters() {
  return interestFilters;
}

export function getBranchStats(branch = "sl") {
  if (branch !== "nz") {
    return stats;
  }

  return stats.map((stat, index) => {
    if (index === 2) {
      return {
        value: "3",
        label: "core programme families across foundations, learning paths, and specialisation"
      };
    }

    if (index === 3) {
      return {
        value: "1",
        label: "connected pathway from first curiosity to advanced technical depth"
      };
    }

    return stat;
  });
}

export function getBranchPathwayFamilies(branch = "sl") {
  if (branch !== "nz") {
    return pathwayFamilies;
  }

  const visibleProgrammes = getBranchProgrammes(branch);
  const familyCopyOverrides = {
    "learning-paths": "Students test interests through analytics, structured thinking, and early technical decision-making.",
    specializations: "Older students move into AI, software engineering, and cyber security technical tracks."
  };

  return pathwayFamilies
    .map((family) => {
      const familyProgrammes = visibleProgrammes.filter((programme) => programme.family === family.id);
      if (!familyProgrammes.length) {
        return null;
      }

      return {
        ...family,
        blurb: familyCopyOverrides[family.id] || family.blurb,
        items: familyProgrammes.slice(0, 3).map((programme) => ({
          href: programme.href,
          title: programme.title,
          image: programme.image
        })),
        moreLabel: familyProgrammes.length > 3 ? `+${familyProgrammes.length - 3} more` : undefined
      };
    })
    .filter(Boolean);
}

export function getBranchStaticProgrammePages(branch = "sl") {
  if (branch !== "nz") {
    return staticProgrammePages;
  }

  return Object.fromEntries(
    Object.entries(staticProgrammePages).filter(([slug]) => !NZ_EXCLUDED_PAGE_SLUGS.has(slug))
  );
}

export function getBranchStaticProgrammeSlugs(branch = "sl") {
  return Object.keys(getBranchStaticProgrammePages(branch));
}

export function isCourseAvailableForBranch(branch = "sl", courseId) {
  if (!courseId || !courseDetails[courseId]) {
    return false;
  }

  if (branch !== "nz") {
    return true;
  }

  return !NZ_EXCLUDED_COURSE_IDS.has(courseId);
}
