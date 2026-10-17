import type { Metadata } from "next";
import "./globals.css";

const title = "Tory Labs | Practical AI that runs on your own device";
const description =
  "Tory Labs builds practical, privacy-first AI that runs on your own device.";

export const metadata: Metadata = {
  metadataBase: new URL("https://torylabs.dev"),
  title,
  description,
  keywords: ["Tory Labs", "on-device AI", "privacy", "voin", "vibe"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Tory Labs", title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
