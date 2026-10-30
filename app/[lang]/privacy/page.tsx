import { notFound } from "next/navigation";
import Privacy, { privacyMetadata } from "@/views/Privacy";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  return isLang(lang) ? privacyMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Privacy lang={lang} />;
}
