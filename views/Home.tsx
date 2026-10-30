import type { Metadata } from "next";
import { company, founder, TBD } from "@/content/company";
import { alternates, localized, type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";

type Product = { name: string; href: string; tag: string; d: string; features: string[] };

const text = {
  en: {
    title: "Tory Labs | Practical AI that runs on your own device",
    description: "Tory Labs builds practical, privacy-first AI that runs on your own device.",
    eyebrow: "On-device · Private · Practical AI",
    lead: "Practical AI that runs on your own device and keeps your data private.",
    view: "View products", contact: "Contact us",
    about: "About", whatTitle: "What we do",
    what: "Tory Labs builds AI software that runs directly on users' devices instead of depending on the cloud. We focus on tools that help with everyday work: meeting notes, dictation, and AI developer tooling.",
    missionTitle: "Mission", mission: "Make useful AI available to everyone without asking them to give up their data.",
    values: [
      { t: "Privacy-first, on-device AI", d: "We process on the user's device whenever possible. Your data stays yours." },
      { t: "Open source", d: "Our code is public so anyone can inspect and improve it." },
      { t: "Fast shipping", d: "Build small, ship fast, and improve through real use." },
    ],
    products: "Products",
    list: [
      { name: "vica", href: "/vica", tag: "macOS · Free app", d: "A desktop app that hands your coding requests to the AI coding agents on your computer and sees them through.", features: ["Claude Code, Codex, Antigravity, Grok and Muse Code in one window", "Each role goes to the agent suited to it", "Sessions keep running after you close the window"] },
      { name: "voin", href: "", tag: "macOS · Open source · Free", d: "Free, open-source on-device dictation and meeting notes app for Mac.", features: ["Local transcription", "Zoom/Teams system audio capture", "Speaker diarization", "Markdown meeting notes with summaries", "Voice commands to coding agents", "Windows support planned"] },
      { name: "vibe", href: "https://github.com/su-record/vibe", tag: "Developer tool · Open source", d: "A harness for Claude Code, Codex and ChatGPT desktop: you approve the scenarios, and the harness proves the work.", features: [] },
      { name: "Tory", href: "https://tory.me", tag: "AI companion", d: "An AI companion that remembers.", features: [] },
    ] as Product[],
    founder: "Founder", photo: "Photo", bio: "Bio",
    contactTitle: "Contact", contactText: "For partnerships, collaboration, or product questions, please email us.",
  },
  ja: {
    title: "Tory Labs | 自分のデバイスで動く実用的なAI",
    description: "Tory Labsは、自分のデバイスで動き、データを手元に残す実用的なAIを作っています。",
    eyebrow: "オンデバイス · プライベート · 実用AI",
    lead: "自分のデバイスで動き、データを外に出さない実用的なAI。",
    view: "製品を見る", contact: "お問い合わせ",
    about: "概要", whatTitle: "事業内容",
    what: "Tory Labsは、クラウドに頼らずユーザーのデバイス上で直接動くAIソフトウェアを作っています。会議メモ、音声入力、AI開発ツールなど、日々の仕事に役立つツールに注力しています。",
    missionTitle: "ミッション", mission: "データを手放さなくても、誰もが役立つAIを使えるようにすること。",
    values: [
      { t: "プライバシー優先のオンデバイスAI", d: "できる限りユーザーのデバイス上で処理します。データはあなたのものです。" },
      { t: "オープンソース", d: "コードを公開し、誰でも確認・改善できるようにしています。" },
      { t: "素早いリリース", d: "小さく作って早く出し、実際の利用から改善します。" },
    ],
    products: "製品",
    list: [
      { name: "vica", href: "/vica", tag: "macOS · アプリ無料", d: "コーディングの依頼を、パソコンにあるAIコーディングエージェントに任せて最後までやり遂げるデスクトップアプリ。", features: ["Claude Code、Codex、Antigravity、Grok、Muse Codeをひとつのウィンドウで", "役割ごとに向いたエージェントへ", "ウィンドウを閉じてもセッションは動き続ける"] },
      { name: "voin", href: "", tag: "macOS · オープンソース · 無料", d: "Mac向けの無料・オープンソースのオンデバイス音声入力・会議メモアプリ。", features: ["ローカル文字起こし", "Zoom/Teamsのシステム音声を録音", "話者分離", "要約付きのMarkdown会議メモ", "コーディングエージェントへの音声コマンド", "Windows対応予定"] },
      { name: "vibe", href: "https://github.com/su-record/vibe", tag: "開発ツール · オープンソース", d: "Claude Code、Codex、ChatGPTデスクトップ用のハーネス。シナリオを承認すれば、ハーネスが作業を検証します。", features: [] },
      { name: "Tory", href: "https://tory.me", tag: "AIコンパニオン", d: "覚えていてくれるAIコンパニオン。", features: [] },
    ] as Product[],
    founder: "創業者", photo: "写真", bio: "紹介",
    contactTitle: "お問い合わせ", contactText: "提携、協業、製品に関するご質問はメールでどうぞ。",
  },
  ko: {
    title: "Tory Labs | 내 기기에서 돌아가는 실용 AI",
    description: "Tory Labs는 내 기기에서 돌아가고 데이터를 지키는 실용 AI를 만듭니다.",
    eyebrow: "온디바이스 · 프라이버시 · 실용 AI",
    lead: "내 기기에서 돌아가고, 데이터를 밖으로 내보내지 않는 실용 AI.",
    view: "제품 보기", contact: "문의하기",
    about: "소개", whatTitle: "하는 일",
    what: "Tory Labs는 클라우드에 기대지 않고 사용자의 기기에서 바로 돌아가는 AI 소프트웨어를 만듭니다. 회의록, 받아쓰기, AI 개발 도구처럼 매일의 일을 돕는 도구에 집중합니다.",
    missionTitle: "미션", mission: "데이터를 내주지 않고도 누구나 쓸모 있는 AI를 쓰게 하는 것.",
    values: [
      { t: "프라이버시 우선 온디바이스 AI", d: "가능한 한 사용자 기기에서 처리합니다. 데이터는 사용자의 것입니다." },
      { t: "오픈소스", d: "코드를 공개해 누구나 살펴보고 고칠 수 있습니다." },
      { t: "빠른 출시", d: "작게 만들고 빨리 내놓고, 실제 사용으로 다듬습니다." },
    ],
    products: "제품",
    list: [
      { name: "vica", href: "/vica", tag: "macOS · 앱 무료", d: "코딩 요청을 내 컴퓨터의 AI 코딩 에이전트들에게 맡겨 끝까지 해내는 데스크톱 앱.", features: ["Claude Code, Codex, Antigravity, Grok, Muse Code를 한 창에서", "역할마다 맞는 에이전트에게", "창을 닫아도 세션은 계속 실행"] },
      { name: "voin", href: "", tag: "macOS · 오픈소스 · 무료", d: "Mac용 무료 오픈소스 온디바이스 받아쓰기·회의록 앱.", features: ["로컬 음성 인식", "Zoom/Teams 시스템 소리 녹음", "화자 구분", "요약이 붙은 Markdown 회의록", "코딩 에이전트에 음성 명령", "Windows 지원 예정"] },
      { name: "vibe", href: "https://github.com/su-record/vibe", tag: "개발 도구 · 오픈소스", d: "Claude Code, Codex, ChatGPT 데스크톱용 하네스. 시나리오를 승인하면 하네스가 작업을 증명합니다.", features: [] },
      { name: "Tory", href: "https://tory.me", tag: "AI 동반자", d: "기억하는 AI 동반자.", features: [] },
    ] as Product[],
    founder: "창업자", photo: "사진", bio: "소개",
    contactTitle: "문의", contactText: "제휴, 협업, 제품 문의는 메일로 보내 주세요.",
  },
} satisfies Record<Lang, unknown>;

export function homeMetadata(lang: Lang): Metadata {
  const { title, description } = text[lang];
  return {
    title, description,
    alternates: alternates(lang, "/"),
    openGraph: { type: "website", url: localized(lang, "/"), siteName: "Tory Labs", title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

function H2({ children }: { children: string }) {
  return <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;
}

function ProductCard({ p, lang }: { p: Product; lang: Lang }) {
  const external = p.href.startsWith("http");
  const body = (
    <>
      <div className="flex items-center justify-between"><span className="text-xl font-bold">{p.name}</span>{p.href && <span className="text-[var(--muted)]">↗</span>}</div>
      <p className="mt-1 text-xs text-[var(--accent)]">{p.tag}</p>
      <p className="mt-4 text-sm leading-relaxed">{p.d}</p>
      {p.features.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
          {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[var(--accent)]">•</span>{f}</li>)}
        </ul>
      )}
    </>
  );
  const box = "flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-6";
  if (!p.href) return <div className={box}>{body}</div>;
  return (
    <a href={external ? p.href : localized(lang, p.href)} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${box} transition hover:-translate-y-0.5 hover:shadow-md`}>
      {body}
    </a>
  );
}

export default function Home({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <>
      <Header lang={lang} path="/" home />
      <main lang={lang} className="mx-auto max-w-5xl px-6">
        <section className="py-24 sm:py-32">
          <p className="text-sm font-medium text-[var(--accent)]">{t.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Tory Labs</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed">{t.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#products" className="rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{t.view}</a>
            <a href={`mailto:${company.email}`} className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-medium">{t.contact}</a>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.about}</H2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">{t.whatTitle}</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">{t.what}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t.missionTitle}</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">{t.mission}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {t.values.map((v) => (
              <div key={v.t} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.products}</H2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.list.map((p) => <ProductCard key={p.name} p={p} lang={lang} />)}
          </div>
        </section>

        <section id="team" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.founder}</H2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {founder.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={founder.photo} alt={founder.title} className="h-28 w-28 rounded-full object-cover" />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[var(--line)] text-xs text-[var(--muted)]">{t.photo} {TBD}</div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{founder.title}{founder.name && ` · ${founder.name}`}</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">{founder.bio || `${t.bio} ${TBD}`}</p>
              <a href={company.github} className="mt-3 inline-block text-sm underline underline-offset-4" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.contactTitle}</H2>
          <p className="leading-relaxed text-[var(--muted)]">{t.contactText}</p>
          <a href={`mailto:${company.email}`} className="mt-6 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{company.email}</a>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
