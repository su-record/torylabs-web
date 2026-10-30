"use client";
// The picture on the vica page: the app on a Mac, the relay, and the phone, with the same
// conversation on both (owner request 2026-10-30). When it scrolls into view it plays once:
// the request types itself, the agents' terminal lines stream, and a pulse carries the answer
// over the encrypted relay to the phone. Drawn in markup, so it follows the language.
import { useEffect, useRef, useState } from "react";
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
type T = (typeof scene)[Lang];

// What the agents print while they work; the same in every language, like a real terminal.
const TERMINAL: [string, string][] = [
  ["claude-code", "read src/auth/session.ts"],
  ["claude-code", "edit 3 files  +42 −7"],
  ["codex", "npm test -- login  ✓ 12 passed"],
];
// When each step starts, in ms after the scene comes into view.
const STEPS = [0, 300, 1700, 2300, 2900, 3600, 4300, 5200, 6000];
const DONE = STEPS.length;
const PURPLE = "#7c6cf0";

/** Visible from step `n` on; hidden before it. */
const step = (at: number, n: number) => ({ "data-step": n, "data-off": at < n || undefined });

function Mac({ t, at, typed }: { t: T; at: number; typed: number }) {
  return (
    <div className="surface w-full max-w-[540px] overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.02)]">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 flex items-center gap-1.5 rounded-md bg-white/[.05] px-2.5 py-1 text-xs font-medium">
          <img src="/vica-icon.png" alt="" className="h-3.5 w-3.5 rounded-[4px]" />Vica
        </span>
      </div>
      <div className="space-y-4 px-4 py-5 text-[13px] leading-relaxed sm:px-6">
        <div {...step(at, 1)} className="ml-auto w-fit max-w-[85%] rounded-2xl bg-[var(--fg)] px-4 py-2 text-[var(--bg)]">
          {t.ask.slice(0, typed)}<span className="text-transparent">{t.ask.slice(typed)}</span>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[#050507] px-4 py-3 font-mono text-[11.5px] leading-6" aria-hidden="true">
          {TERMINAL.map(([who, what], i) => (
            <div key={what} {...step(at, 2 + i)} className="flex flex-wrap gap-x-3 sm:flex-nowrap sm:truncate">
              <span className={who === "codex" ? "text-[#7dd3fc]" : "text-[var(--accent)]"}>{who}</span>
              <span className={i === 2 ? "text-[#86efac]" : "text-[var(--muted)]"}>{what}</span>
            </div>
          ))}
        </div>
        <div {...step(at, 5)} className="space-y-3">
          <div className="flex items-center gap-1 border-b border-[var(--line)] pb-2 text-xs text-[var(--muted)]">{t.worked} <span aria-hidden="true">›</span></div>
          {t.answer.map((a) => <p key={a}>{a}</p>)}
          <div className="flex items-center justify-between rounded-xl border border-[var(--line)] px-4 py-3 text-xs">
            <span>{t.files}</span><span><b className="font-medium text-[#4ade80]">+42</b> <b className="font-medium text-[#f87171]">−7</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Relay({ t, on }: { t: T; on: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="relay-node flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b10]" data-on={on || undefined}>
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#c4b9ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.75 4.75 0 0 1-.5 9.5z" />
          <rect x="10" y="12" width="4" height="3.5" rx=".6" /><path d="M10.8 12v-1a1.2 1.2 0 0 1 2.4 0v1" />
        </svg>
      </span>
      <span className="mt-1 text-xs font-semibold">{t.relay}</span>
      <span className="whitespace-nowrap font-mono text-[10.5px] text-[var(--muted)]">{t.sealed}</span>
    </div>
  );
}

function Phone({ t, at }: { t: T; at: number }) {
  return (
    <div className="w-[228px] shrink-0 rounded-[38px] border border-white/15 bg-[#0b0b10] p-[5px] shadow-[0_40px_80px_-40px_rgba(0,0,0,.9),inset_0_0_0_1px_rgba(255,255,255,.04)]">
      <div className="rounded-[33px] bg-[#000] p-3 text-[var(--fg)]">
        <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-[#16161c]" />
        <div className="mb-3 flex items-center gap-1.5 text-[11px]">
          <img src="/vica-icon.png" alt="" className="h-5 w-5 rounded-md" />
          <span className="text-[var(--muted)]">›</span><span className="text-[var(--muted)]">Mac</span><span className="text-[var(--muted)]">›</span><b className="font-semibold">vica</b>
        </div>
        <div className="min-h-[150px] space-y-2.5 text-[10.5px] leading-snug">
          <div {...step(at, 1)} className="ml-auto w-fit max-w-[85%] rounded-2xl px-3 py-1.5 text-white" style={{ background: PURPLE }}>{t.ask}</div>
          <div {...step(at, 2)} className="flex gap-1 py-1" aria-hidden="true">
            {at < 8 && [0, 1, 2].map((i) => <i key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]" style={{ animationDelay: `${i * 0.2}s` }} />)}
          </div>
          <div {...step(at, 8)} className="space-y-2.5">{t.answer.map((a) => <p key={a}>{a}</p>)}</div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] py-1.5 pl-3 pr-1.5 text-[10px] text-[var(--muted)]">
          <span className="flex-1 truncate">{t.placeholder}</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--fg)] text-[11px] text-[var(--bg)]">↑</span>
        </div>
      </div>
    </div>
  );
}

/** The glowing line between two devices; a pulse runs along it while `on`. */
function Wire({ on, idle }: { on: boolean; idle: boolean }) {
  const attrs = { "data-on": on || undefined, "data-idle": idle || undefined };
  return (
    <>
      <div className="hidden w-full min-w-16 flex-1 lg:block" aria-hidden="true"><div className="wire wire-x" {...attrs} /></div>
      <div className="lg:hidden" aria-hidden="true"><div className="wire wire-y" {...attrs} /></div>
    </>
  );
}

export default function VicaScene({ lang }: { lang: Lang }) {
  const t = scene[lang];
  const root = useRef<HTMLDivElement>(null);
  // Rendered finished, so the page reads complete without the script; it rewinds once live.
  const [at, setAt] = useState(DONE);
  const [typed, setTyped] = useState(t.ask.length);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = root.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      STEPS.forEach((ms, i) => timers.push(window.setTimeout(() => setAt(i + 1), ms)));
      const per = (STEPS[2] - STEPS[1] - 200) / t.ask.length;
      for (let i = 1; i <= t.ask.length; i++) timers.push(window.setTimeout(() => setTyped(i), STEPS[1] + i * per));
    }, { threshold: 0.35 });
    // Rewind on the first frame (CSS holds the steps hidden till then), then play once in view.
    const raf = requestAnimationFrame(() => {
      setLive(true);
      if (reduce || !el) return;
      setAt(0); setTyped(0);
      io.observe(el);
    });
    return () => { cancelAnimationFrame(raf); io.disconnect(); timers.forEach(clearTimeout); };
  }, [t.ask]);

  const done = at >= DONE;
  return (
    <div ref={root} data-scene data-live={live || undefined} className="surface relative isolate overflow-hidden rounded-3xl px-3 py-10 sm:px-10 sm:py-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(124,108,240,.18),transparent_70%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-4">
        <Mac t={t} at={at} typed={typed} />
        <Wire on={at >= 6} idle={done} />
        <Relay t={t} on={(at >= 6 && at < 8) || done} />
        <Wire on={at >= 7} idle={done} />
        <Phone t={t} at={at} />
      </div>
    </div>
  );
}
