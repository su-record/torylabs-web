import type { Metadata } from "next";
import "./globals.css";

const title = "토리랩스 Tory Labs | 내 기기에서 돌아가는 실용적인 AI";
const description =
  "토리랩스는 데이터를 밖으로 보내지 않고 내 기기에서 돌아가는 실용적인 AI 도구를 만듭니다. Tory Labs builds practical, privacy-first AI that runs on your own device.";

export const metadata: Metadata = {
  metadataBase: new URL("https://torylabs.dev"),
  title,
  description,
  keywords: ["토리랩스", "Tory Labs", "온디바이스 AI", "on-device AI", "voin", "vibe", "토리야"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Tory Labs", title, description, locale: "ko_KR" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
