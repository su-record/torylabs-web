// The picture on the vica page: the app on a Mac, the relay, and the phone, with the same
// conversation on both and dots flowing between them, as the phone page's splash draws it
// (owner request 2026-10-30). Drawn in markup, so it follows the language and the theme.
import type { Lang } from "@/content/i18n";

const scene = {
  en: {
    ask: "Fix the login bug and run the tests", worked: "Worked for 2m 13s",
    answer: ["Fixed: the session cookie was cleared before the redirect.", "Login tests: 12 passed."],
    files: "3 files changed", relay: "Relay", sealed: "End-to-end encrypted", placeholder: "Ask vica to do something",
  },
  ja: {
    ask: "ログインのバグを直してテストして", worked: "2分13秒 作業しました",
    answer: ["修正しました：リダイレクト前にセッションCookieが消えていました。", "ログインのテスト：12件成功。"],
    files: "3ファイルを変更", relay: "中継", sealed: "エンドツーエンド暗号化", placeholder: "vicaに任せること",
  },
  ko: {
    ask: "로그인 버그 고치고 테스트 돌려 줘", worked: "2분 13초 동안 작업함",
    answer: ["고쳤습니다. 리디렉션 전에 세션 쿠키가 지워지고 있었습니다.", "로그인 테스트 12개가 통과했습니다."],
    files: "파일 3개 수정", relay: "중계", sealed: "종단 간 암호화", placeholder: "vica에게 맡길 일",
  },
} satisfies Record<Lang, unknown>;

const PURPLE = "#7c6cf0";

function Dots({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className={`flex ${vertical ? "flex-col" : ""} items-center justify-center gap-2`} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <i key={i} className="vica-dot block h-2 w-2 rounded-full" style={{ background: PURPLE, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  );
}

function Mac({ t }: { t: (typeof scene)[Lang] }) {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] shadow-[0_24px_60px_-20px_rgba(0,0,0,.25)]">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 flex items-center gap-1.5 rounded-md bg-[var(--bg)] px-2.5 py-1 text-xs font-medium">
          <img src="/vica-icon.png" alt="" className="h-3.5 w-3.5 rounded-[4px]" />Vica
        </span>
      </div>
      <div className="space-y-4 px-6 py-6 text-[13px] leading-relaxed">
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl bg-[var(--fg)] px-4 py-2 text-[var(--bg)]">{t.ask}</div>
        <div className="flex items-center gap-1 border-b border-[var(--line)] pb-2 text-xs text-[var(--muted)]">{t.worked} <span aria-hidden="true">›</span></div>
        {t.answer.map((a) => <p key={a}>{a}</p>)}
        <div className="flex items-center justify-between rounded-xl border border-[var(--line)] px-4 py-3 text-xs">
          <span>{t.files}</span><span><b className="font-medium text-[#16a34a]">+42</b> <b className="font-medium text-[#dc2626]">−7</b></span>
        </div>
      </div>
    </div>
  );
}

function Relay({ t }: { t: (typeof scene)[Lang] }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="var(--muted)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.75 4.75 0 0 1-.5 9.5z" />
        <rect x="10" y="12" width="4" height="3.5" rx=".6" /><path d="M10.8 12v-1a1.2 1.2 0 0 1 2.4 0v1" />
      </svg>
      <span className="text-xs font-semibold">{t.relay}</span>
      <span className="text-[11px] text-[var(--muted)]">{t.sealed}</span>
    </div>
  );
}

function Phone({ t }: { t: (typeof scene)[Lang] }) {
  return (
    <div className="w-[220px] shrink-0 rounded-[36px] border-[6px] border-[#1c1917] bg-[#f5f5f7] p-3 text-[#1c1917] shadow-[0_24px_60px_-20px_rgba(0,0,0,.35)]">
      <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-[#1c1917]" />
      <div className="mb-3 flex items-center gap-1.5 text-[11px]">
        <img src="/vica-icon.png" alt="" className="h-5 w-5 rounded-md" />
        <span className="text-[#78716c]">›</span><span className="text-[#78716c]">Mac</span><span className="text-[#78716c]">›</span><b className="font-semibold">vica</b>
      </div>
      <div className="space-y-2.5 text-[10.5px] leading-snug">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl px-3 py-1.5 text-white" style={{ background: PURPLE }}>{t.ask}</div>
        {t.answer.map((a) => <p key={a}>{a}</p>)}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-[#e7e5e4] bg-white py-1.5 pl-3 pr-1.5 text-[10px] text-[#78716c]">
        <span className="flex-1 truncate">{t.placeholder}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1c1917] text-[11px] text-white">↑</span>
      </div>
    </div>
  );
}

export default function VicaScene({ lang }: { lang: Lang }) {
  const t = scene[lang];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[radial-gradient(ellipse_at_top,rgba(124,108,240,.12),transparent_60%)] px-6 py-12 sm:px-10">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-6">
        <Mac t={t} />
        <div className="hidden lg:block"><Dots /></div><div className="lg:hidden"><Dots vertical /></div>
        <Relay t={t} />
        <div className="hidden lg:block"><Dots /></div><div className="lg:hidden"><Dots vertical /></div>
        <Phone t={t} />
      </div>
    </div>
  );
}
