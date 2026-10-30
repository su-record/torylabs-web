import type { Metadata } from "next";
import "./globals.css";
import { languageScript } from "@/content/i18n";

const title = "Tory Labs | Practical AI that runs on your own device";
const description =
  "Tory Labs builds practical, privacy-first AI that runs on your own device.";

export const metadata: Metadata = {
  metadataBase: new URL("https://torylabs.dev"),
  title,
  description,
  keywords: ["Tory Labs", "on-device AI", "privacy", "voin", "vibe", "vica"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Tory Labs", title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
