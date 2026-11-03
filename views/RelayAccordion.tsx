"use client";
// The steps to one's own relay as a sideways accordion: one step open at a time, its picture
// beside its words; on a phone the steps stack (owner request 2026-10-30). The pictures are
// drawn in markup, so they follow the language and the theme.
import { useState } from "react";

const PURPLE = "#7c6cf0";

export type RelayLabels = {
  file: string; token: string; save: string; files: string; copy: string; copied: string; copyFailed: string;
  prev: string; next: string; server: string; yourMac: string; yourPhone: string; scan: string;
};
type Step = readonly [string, string];

const Window = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`overflow-hidden rounded-xl border border-[var(--line)] shadow-[0_16px_40px_-24px_rgba(0,0,0,.35)] ${dark ? "bg-[#1f1f24] text-[#e8e8ec]" : "bg-[var(--card)]"}`}>
    <div className="flex gap-1.5 px-3 py-2.5" aria-hidden="true">
      <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="px-4 pb-4">{children}</div>
  </div>
);
const Field = ({ children, dim = false }: { children: string; dim?: boolean }) => (
  <div className={`truncate rounded-lg border border-[var(--line)] px-3 py-2 text-xs ${dim ? "text-[var(--muted)]" : ""}`}>{children}</div>
);
const Button = ({ children }: { children: string }) => (
  <span className="inline-block rounded-lg px-3 py-2 text-xs font-medium text-white" style={{ background: PURPLE }}>{children}</span>
);
const Link = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center gap-1 px-1 text-[11px] text-[var(--muted)]" aria-hidden="true">
    <span className="flex gap-1">{[0, 1, 2].map((i) => <i key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: PURPLE, opacity: 0.4 + i * 0.3 }} />)}</span>
    {label}
  </div>
);
const Cloud = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1 text-[11px] text-[var(--muted)]">
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke={PURPLE} strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 0 1-.6-8A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z" /></svg>
    {label}
  </div>
);
// A picture of a QR code, not one that scans.
const QR = () => {
  const on = (x: number, y: number) => (x * 7 + y * 13 + x * y) % 3 === 0;
  const eye = (x: number, y: number) => (x < 4 && y < 4) || (x > 8 && y < 4) || (x < 4 && y > 8);
  return (
    <svg viewBox="0 0 13 13" className="h-20 w-20" shapeRendering="crispEdges" aria-hidden="true">
      {Array.from({ length: 169 }, (_, i) => {
        const x = i % 13, y = (i - x) / 13;
        const ring = eye(x, y) && (x % 9 === 0 || x % 9 === 3 || y % 9 === 0 || y % 9 === 3 || (x % 9 === 1.5));
        return (eye(x, y) ? ring : on(x, y)) ? <rect key={i} x={x} y={y} width="1" height="1" fill="currentColor" /> : null;
      })}
    </svg>
  );
};

function Picture({ step, labels, prompt, tokenShown, folder, address }: { step: number; labels: RelayLabels; prompt: string; tokenShown: string; folder: string; address: string }) {
  if (step === 0) return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="w-full min-w-0 flex-1"><Window>
        <p className="text-xs font-semibold">{labels.server}</p>
        <p className="mt-3"><Button>{labels.files}</Button></p>
      </Window></div>
      <div className="hidden sm:block"><Link /></div>
      <div className="flex flex-col items-center gap-1 text-[11px] text-[var(--muted)]">
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke={PURPLE} strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><path d="M3 7h6l2 2h10v10H3z" /></svg>
        {folder}
      </div>
    </div>
  );
  if (step === 1) return (
    <div className="flex items-center gap-4">
      <div className="min-w-0 flex-1"><Window dark>
        <p className="text-sm leading-relaxed opacity-90">{prompt}</p>
        <p className="mt-3 truncate font-mono text-xs" style={{ color: "#a79cff" }}>{address}</p>
      </Window></div>
      <div className="hidden sm:contents"><Link /><Cloud label="Cloudflare" /></div>
    </div>
  );
  if (step === 2) return (
    <Window>
      <p className="text-xs font-semibold">{labels.server}</p>
      <div className="mt-3 space-y-2">
        <Field>{address}</Field>
        <Field dim>{`${labels.token}  ${tokenShown}`}</Field>
      </div>
      <p className="mt-3 text-right"><Button>{labels.save}</Button></p>
    </Window>
  );
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2 text-[11px] text-[var(--muted)]">
        <div className="rounded-xl border border-[var(--line)] bg-white p-2 text-[#1f1f24]"><QR /></div>
        {labels.yourMac}
      </div>
      <div className="sm:hidden"><Link label={labels.scan} /></div>
      <div className="hidden sm:contents"><Link label={labels.scan} /><Cloud label={labels.server} /><Link /></div>
      <div className="flex flex-col items-center gap-2 text-[11px] text-[var(--muted)]">
        <div className="flex h-24 w-12 items-center justify-center rounded-xl border-2 border-[var(--fg)]"><i className="h-1.5 w-1.5 rounded-full" style={{ background: PURPLE }} /></div>
        {labels.yourPhone}
      </div>
    </div>
  );
}

export default function RelayAccordion({ steps, prompt, selfLabel, labels, folder, address }: { steps: readonly Step[]; prompt: string; selfLabel: string; labels: RelayLabels; folder: string; address: string }) {
  const [open, setOpen] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-3 lg:min-h-[390px] lg:flex-row">
        {steps.map(([title, body], i) => {
          const here = i === open;
          return (
            <div key={title} className={`overflow-hidden rounded-2xl border bg-[var(--card)] transition-[flex-grow] duration-300 lg:basis-[76px] ${here ? "border-[#7c6cf0] lg:grow" : "border-[var(--line)] lg:grow-0"}`}>
              <button type="button" aria-expanded={here} aria-controls={`relay-step-${i}`} onClick={() => setOpen(i)} className={`flex w-full items-center gap-3 p-4 text-left ${here ? "" : "lg:h-full lg:flex-col"}`}>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: here ? PURPLE : "#a8a3c9" }}>{i + 1}</span>
                <span className={`font-semibold ${here ? "" : "lg:[writing-mode:vertical-rl]"}`}>{title}</span>
              </button>
                <div id={`relay-step-${i}`} hidden={!here} className="px-5 pb-5 lg:w-[calc(1104px-3*88px-40px)] lg:max-w-full">
                  <p className="leading-relaxed text-[var(--muted)]">{body}</p>
                  <div className="mt-5"><Picture step={i} labels={labels} prompt={prompt} tokenShown="••••••••••••" folder={folder} address={address} /></div>
                  {i === 1 && (
                    <div className="mt-4 text-sm">
                      <button type="button" onClick={copy} className="rounded-lg border border-[var(--line)] px-4 py-2">{copyState === "copied" ? labels.copied : labels.copy}</button>
                      <span role="status" aria-live="polite" className="sr-only">{copyState === "copied" ? labels.copied : ""}</span>
                      {copyState === "failed" && <p role="alert" className="mt-2 leading-relaxed">{labels.copyFailed}</p>}
                      <p className="mt-5 leading-relaxed text-[var(--muted)]">{selfLabel}</p>
                      <pre className="mt-2 overflow-x-auto rounded-lg border border-[var(--line)] px-4 py-3 text-xs leading-relaxed"><code>{"npx wrangler login\nnpx wrangler deploy"}</code></pre>
                    </div>
                  )}
                </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end gap-2 text-sm">
        <button type="button" disabled={open === 0} onClick={() => setOpen(open - 1)} className="rounded-lg border border-[var(--line)] px-4 py-2 disabled:opacity-40">{labels.prev}</button>
        <button type="button" disabled={open === steps.length - 1} onClick={() => setOpen(open + 1)} className="rounded-lg border border-[var(--line)] px-4 py-2 disabled:opacity-40">{labels.next}</button>
      </div>
    </div>
  );
}
