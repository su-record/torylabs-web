const products = [
  {
    name: "voin",
    href: "https://github.com/su-record/voin",
    en: "Free, open-source on-device dictation & meeting notes app for Mac.",
    ko: "맥에서 로컬로 돌아가는 무료 오픈소스 받아쓰기 · 회의록 앱",
  },
  {
    name: "vibe",
    href: "https://github.com/su-record/vibe",
    en: "A harness for Claude Code, Codex and ChatGPT desktop that proves agent work.",
    ko: "AI 코딩 에이전트의 작업을 검증하는 하네스",
  },
  {
    name: "토리야",
    href: "https://tory.me",
    en: "An AI companion that remembers.",
    ko: "기억하는 AI 동반자",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Tory Labs</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">토리랩스</p>
        <p className="mt-8 text-lg leading-relaxed">
          We build practical AI tools that run on your own device.
        </p>
        <p className="mt-2 leading-relaxed text-[var(--muted)]">
          내 기기에서 돌아가는, 실제로 쓸모 있는 AI 도구를 만듭니다.
        </p>
      </header>

      <section className="mt-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">Products</h2>
        <ul className="mt-6 space-y-4">
          {products.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{p.name}</span>
                  <span aria-hidden className="text-[var(--muted)]">↗</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">{p.en}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{p.ko}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">Contact</h2>
        <a href="mailto:su@torylabs.dev" className="mt-4 inline-block text-lg underline underline-offset-4">
          su@torylabs.dev
        </a>
      </section>

      <footer className="mt-24 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
        © 2026 Tory Labs
      </footer>
    </main>
  );
}
