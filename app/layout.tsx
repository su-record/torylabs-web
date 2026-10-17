import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tory Labs · 토리랩스",
  description: "Practical, on-device AI tools. 내 기기에서 돌아가는 실용적인 AI 도구를 만듭니다.",
  metadataBase: new URL("https://torylabs.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
