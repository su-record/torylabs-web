import { notFound } from "next/navigation";
import Ondo, { ondoMetadata } from "@/views/Ondo";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/ondo">) {
  const { lang } = await params;
  return isLang(lang) ? ondoMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/ondo">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Ondo lang={lang} />;
}
