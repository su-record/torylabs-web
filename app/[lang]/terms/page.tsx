import { notFound } from "next/navigation";
import Terms, { termsMetadata } from "@/views/Terms";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  return isLang(lang) ? termsMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Terms lang={lang} />;
}
