import { notFound } from "next/navigation";
import Refund, { refundMetadata } from "@/views/Refund";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/refund">) {
  const { lang } = await params;
  return isLang(lang) ? refundMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/refund">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Refund lang={lang} />;
}
