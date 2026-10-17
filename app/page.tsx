import { company, founder, history, TBD } from "@/content/company";

const values = [
  { ko: "프라이버시 우선 온디바이스 AI", en: "Privacy-first, on-device AI", dKo: "가능한 한 모든 처리를 사용자의 기기 안에서 합니다. 데이터는 사용자의 것입니다.", dEn: "We process on the user's device whenever possible. Your data stays yours." },
  { ko: "오픈소스", en: "Open source", dKo: "코드를 공개해 누구나 검증하고 개선할 수 있게 합니다.", dEn: "Our code is public so anyone can inspect and improve it." },
  { ko: "빠른 실행", en: "Fast shipping", dKo: "작게 만들고 빠르게 내놓고, 실제 사용으로 개선합니다.", dEn: "Build small, ship fast, improve through real use." },
];

const products = [
  {
    name: "voin", href: "https://github.com/su-record/voin", tag: "macOS · Open source · Free",
    ko: "맥에서 로컬로 동작하는 무료 오픈소스 받아쓰기·회의록 앱", en: "Free, open-source on-device dictation & meeting notes for Mac.",
    features: ["로컬 음성 인식 (Local transcription)", "Zoom/Teams 시스템 오디오 캡처 (System audio capture)", "화자 분리 (Speaker diarization)", "요약 포함 마크다운 회의록 (Markdown notes with summaries)", "코딩 에이전트 음성 명령 (Voice commands to coding agents)", "Windows 지원 예정 (Windows planned)"],
  },
  {
    name: "vibe", href: "https://github.com/su-record/vibe", tag: "Developer tool · Open source",
    ko: "Claude Code·Codex·ChatGPT 데스크톱용 하네스. 사용자가 시나리오를 승인하면 하네스가 작업 결과를 증명합니다.", en: "A harness for Claude Code, Codex and ChatGPT desktop: you approve the scenarios, the harness proves the work.",
    features: [],
  },
  {
    name: "토리야", href: "https://tory.me", tag: "AI companion",
    ko: "나를 기억하는 AI 동반자", en: "An AI companion that remembers.", features: [],
  },
];

function H2({ ko, en }: { ko: string; en: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{ko}</h2>
      <p className="mt-1 text-sm uppercase tracking-widest text-[var(--muted)]">{en}</p>
    </div>
  );
}

const nav = [["about", "회사 소개"], ["products", "제품"], ["team", "대표"], ["history", "연혁"], ["contact", "문의"]];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold">토리랩스 <span className="font-normal text-[var(--muted)]">Tory Labs</span></a>
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="text-[var(--muted)] hover:text-[var(--fg)]">{l}</a>)}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 sm:py-32">
          <p className="text-sm font-medium text-[var(--accent)]">On-device · Private · Practical AI</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">토리랩스<br /><span className="text-[var(--muted)]">Tory Labs</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed">내 기기에서 돌아가고, 데이터는 지켜주는 실용적인 AI를 만듭니다.</p>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">Practical AI that runs on your own device and keeps your data private.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#products" className="rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">제품 보기</a>
            <a href={`mailto:${company.email}`} className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-medium">문의하기</a>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2 ko="회사 소개" en="About" />
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">무엇을 하나요</h3>
              <p className="mt-2 leading-relaxed">토리랩스는 클라우드에 의존하지 않고 사용자의 기기에서 직접 동작하는 AI 소프트웨어를 만듭니다. 회의 기록, 음성 입력, AI 개발 도구처럼 매일 쓰는 일에 바로 도움이 되는 제품에 집중합니다.</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Tory Labs builds AI software that runs directly on users&apos; devices, focused on everyday work like meeting notes, dictation and AI developer tools.</p>
            </div>
            <div>
              <h3 className="font-semibold">미션 · 비전</h3>
              <p className="mt-2 leading-relaxed">누구나 자신의 데이터를 내주지 않고도 AI의 도움을 받을 수 있게 하는 것.</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Make useful AI available to everyone without giving up their data.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.en} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-semibold">{v.ko}</h3>
                <p className="text-xs text-[var(--muted)]">{v.en}</p>
                <p className="mt-3 text-sm leading-relaxed">{v.dKo}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{v.dEn}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2 ko="제품 · 서비스" en="Products" />
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between"><span className="text-xl font-bold">{p.name}</span><span className="text-[var(--muted)]">↗</span></div>
                <p className="mt-1 text-xs text-[var(--accent)]">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed">{p.ko}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{p.en}</p>
                {p.features.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs">
                    {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[var(--accent)]">•</span>{f}</li>)}
                  </ul>
                )}
              </a>
            ))}
          </div>
        </section>

        <section id="team" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2 ko="대표 소개" en="Founder" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {founder.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={founder.photo} alt={founder.title} className="h-28 w-28 rounded-full object-cover" />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[var(--line)] text-xs text-[var(--muted)]">사진 {TBD}</div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{founder.title}{founder.name && ` · ${founder.name}`}</h3>
              <p className="mt-2 leading-relaxed">{founder.bioKo || `대표 소개 ${TBD}`}</p>
              {founder.bioEn && <p className="mt-1 text-sm text-[var(--muted)]">{founder.bioEn}</p>}
              <a href={company.github} className="mt-3 inline-block text-sm underline underline-offset-4" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section id="history" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2 ko="연혁 · 로드맵" en="History & Roadmap" />
          <ol className="space-y-4 border-l border-[var(--line)] pl-6">
            {history.map((h) => (
              <li key={h.ko}>
                <span className="text-sm font-semibold text-[var(--accent)]">{h.year}</span>
                <p className="mt-1">{h.ko}</p>
                <p className="text-sm text-[var(--muted)]">{h.en}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2 ko="문의" en="Contact" />
          <p className="leading-relaxed">제휴, 협업, 제품 관련 문의는 이메일로 연락 주세요.</p>
          <p className="text-sm text-[var(--muted)]">For partnerships or inquiries, please email us.</p>
          <a href={`mailto:${company.email}`} className="mt-6 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{company.email}</a>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[var(--card)]">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-[var(--muted)]">
          <p className="font-semibold text-[var(--fg)]">{company.nameKo} {company.nameEn}</p>
          <dl className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            <div>상호: {company.nameKo}</div>
            <div>대표: {company.ceo}</div>
            <div>사업자등록번호: {company.bizNumber}</div>
            <div>주소: {company.address}</div>
            <div>이메일: <a href={`mailto:${company.email}`} className="underline">{company.email}</a></div>
          </dl>
          <p className="mt-6">© 2026 {company.nameEn}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
