import { company } from "@/content/company";
import { absoluteUrl } from "@/content/seo";
import { langs, localized, type Lang } from "@/content/i18n";

type Entity = Record<string, unknown>;
export type Question = readonly [string, string];

export function StructuredData({ data }: { data: Entity }) {
  // A literal closing script tag in text must never terminate this element.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function PageSchema({ lang, path, title, description, questions = [], entities = [], mainEntity }: {
  lang: Lang; path: string; title: string; description: string;
  questions?: readonly Question[]; entities?: Entity[]; mainEntity?: string;
}) {
  const url = absoluteUrl(localized(lang, path));
  const organization = `${company.domain}/#organization`;
  const website = `${company.domain}/#website`;
  const page = `${url}#webpage`;
  return <StructuredData data={{ "@context": "https://schema.org", "@graph": [
    {
      "@type": "Organization", "@id": organization, name: company.name,
      alternateName: "토리랩스", url: company.domain, email: company.email,
      sameAs: [company.github],
    },
    {
      "@type": "WebSite", "@id": website, url: company.domain, name: company.name,
      alternateName: "토리랩스", publisher: { "@id": organization }, inLanguage: langs,
    },
    {
      "@type": path === "/relay" ? "TechArticle" : "WebPage", "@id": page,
      url, name: title, headline: title, description, inLanguage: lang,
      isPartOf: { "@id": website }, publisher: { "@id": organization },
      ...(mainEntity ? { mainEntity: { "@id": mainEntity } } : {}),
      ...(questions.length ? { hasPart: { "@id": `${url}#faq` } } : {}),
    },
    ...(questions.length ? [{
      "@type": "FAQPage", "@id": `${url}#faq`, url: `${url}#faq`, inLanguage: lang,
      isPartOf: { "@id": page }, mainEntity: questions.map(([name, answer]) => ({
        "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    }] : []),
    ...entities,
  ] }} />;
}

export function softwareEntity({ name, lang, description, features, download, version, requirements }: {
  name: "vica" | "voin"; lang: Lang; description: string; features: string[];
  download: string; version?: string; requirements: string;
}) {
  return {
    "@type": "SoftwareApplication", "@id": `${company.domain}/${name}#software`,
    name, url: absoluteUrl(localized(lang, `/${name}`)), description,
    applicationCategory: name === "vica" ? "DeveloperApplication" : "ProductivityApplication",
    operatingSystem: "macOS", softwareRequirements: requirements,
    ...(version ? { softwareVersion: version } : {}),
    downloadUrl: download, featureList: features,
    publisher: { "@id": `${company.domain}/#organization` },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: absoluteUrl(localized(lang, `/${name}`)) },
  };
}
