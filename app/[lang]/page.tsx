import { notFound } from "next/navigation";
import Home, { homeMetadata } from "@/views/Home";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return isLang(lang) ? homeMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Home lang={lang} />;
}
