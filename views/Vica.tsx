import { pageMetadata } from "@/content/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { localized, type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";
import VicaScene from "@/views/VicaScene";
import { PageSchema, softwareEntity } from "@/components/StructuredData";
import Questions from "@/components/Questions";

import { vicaText as text, DOWNLOAD, ISSUES, SUBSCRIBE } from "@/content/vica";

export function vicaMetadata(lang: Lang): Metadata {
  const { title, description } = text[lang];
  return pageMetadata(lang, "/vica", title, description);
}

const AGENTS = ["Claude Code", "Codex", "Antigravity", "Grok", "Muse Code"];

const H2 = ({ children }: { children: string }) => <h2 data-reveal className="mb-10 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{children}</h2>;

// One small line icon per feature, in the order of `features`.
const ICONS = [
  "M5 12l4 4L19 6",
  "M8 7a3 3 0 1 0 0 .01M16 7a3 3 0 1 0 0 .01M3 20c0-3 2.5-5 5-5s5 2 5 5M13 20c0-2.2 1.5-4.2 3-4.8 2.4-.6 5 1.3 5 4.8",
  "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18",
  "M12 3l8 4v5c0 4.5-3.3 8-8 9-4.7-1-8-4.5-8-9V7z",
  "M4 5h16v14H4zM8 10l3 2-3 2M13 15h3",
  "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21c0-4 3.6-6 8-6s8 2 8 6",
  "M5 3l14 7-6 2-2 6z",
  "M12 7v5l2.5 2M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
  "M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4M12 8v4l3 2",
  "M3 9a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM7 7V6a2 2 0 0 1 2-2h3l2 2h5a2 2 0 0 1 2 2v6",
  "M4 5h16v14H4zM14 11h5v6h-5z",
  "M4 4h16v16H4zM9 4v16M13 9h4M13 13h4",
  "M5 4h14v12H5zM9 20h6M12 16v4M9 9l2 2 4-4",
];
const Soon = ({ label }: { label: string }) => <span className="ml-2 inline-flex rounded-full border border-[rgba(124,108,240,.25)] bg-[rgba(124,108,240,.08)] px-2 py-0.5 align-middle text-[11px] font-medium text-[#6d5ce8]">{label}</span>;

export default function Vica({ lang }: { lang: Lang }) {
  const t = text[lang];
  const link = "underline underline-offset-4";
  const software = softwareEntity({ name: "vica", lang, description: t.description,
    features: t.features.filter((f) => !f.soon).map((f) => f.t), download: DOWNLOAD, requirements: t.req.join(" ") });
  return (
    <>
      <PageSchema lang={lang} path="/vica" title={t.title} description={t.description} questions={t.faq}
        mainEntity={software["@id"]} entities={[software]} />
      <Header lang={lang} path="/vica" />
      <main lang={lang} className="mx-auto max-w-6xl overflow-x-clip px-6">
        <section className="relative isolate pt-20 pb-16 text-center sm:pt-28">
          <div className="signal" aria-hidden="true">
            <i style={{ top: "14%", ["--t" as string]: "10s" }} /><i style={{ bottom: "0", ["--t" as string]: "13s", ["--d" as string]: "-6s" }} />
          </div>
          <img src="/vica-icon.png" alt="" className="rise mx-auto h-20 w-20 rounded-[22px] shadow-[0_0_0_1px_rgba(16,16,24,.06),0_18px_40px_-14px_rgba(91,75,214,.45)]" style={{ ["--i" as string]: 0 }} />
          <p className="rise mt-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-white/80 px-3.5 py-1.5 font-mono text-xs shadow-[0_1px_2px_rgba(16,16,24,.04)] text-[var(--muted)]" style={{ ["--i" as string]: 1 }}><span className="pulse-dot" aria-hidden="true" />{t.eyebrow}<span className="hidden">{t.eyebrowRelay}</span></p>
          <h1 className="ink rise mt-5 pb-2 text-[clamp(64px,12vw,148px)] font-semibold leading-[.92] tracking-[-0.05em]" style={{ ["--i" as string]: 2 }}>vica</h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl" style={{ ["--i" as string]: 3 }}>{t.lead}</p>
          <p className="rise mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--muted)]" style={{ ["--i" as string]: 4 }}>{t.description} {t.sub}</p>
          <div className="rise mt-10 flex flex-wrap justify-center gap-3" style={{ ["--i" as string]: 5 }}>
            <a href={DOWNLOAD} className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] shadow-[0_10px_24px_-12px_rgba(91,75,214,.55)] transition hover:bg-[#2a2a33]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.6-1-2.6-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>
              {t.mac}
            </a>
            <span aria-disabled="true" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--muted)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M3 5.5l7.5-1v7H3zM11.5 4.4L21 3v8.5h-9.5zM3 12.5h7.5v7L3 18.5zM11.5 12.5H21V21l-9.5-1.4z"/></svg>
              {t.windows}
            </span>
            {/* The relay subscription stays out of sight for now (owner request 2026-10-30). */}
            <a href={SUBSCRIBE} className="hidden rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)]">{t.subscribe}</a>
          </div>
          <p className="rise mt-5 text-sm text-[var(--muted)]" style={{ ["--i" as string]: 6 }}>{t.noLogin}</p>
        </section>

        <section data-reveal className="pb-24"><VicaScene lang={lang} /></section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.howTitle}</H2>
          <ol className="relative grid gap-8 md:grid-cols-3">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-[var(--glow)] via-[var(--line)] to-transparent md:block" />
            {t.how.map((h, i) => (
              <li key={h.t} data-reveal className="relative">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(124,108,240,.35)] bg-white font-mono text-sm font-semibold text-[var(--accent)] shadow-[0_0_0_4px_rgba(124,108,240,.07),0_6px_16px_-6px_rgba(91,75,214,.4)]">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{h.t}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{h.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.agentsTitle}</H2>
          <p data-reveal className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.agentsLead}</p>
          <ul data-reveal className="mt-8 flex flex-wrap gap-3">
            {AGENTS.map((agent) => <li key={agent} className="surface surface-hover flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-sm"><span className="font-semibold text-[var(--accent)]" aria-hidden="true">›</span>{agent}</li>)}
          </ul>
        </section>

        <section id="chat" className="scroll-mt-20 border-t border-[var(--line)] py-24">
          <H2>{t.chatTitle}</H2>
          <p data-reveal className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.chatLead}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div data-reveal className="surface relative overflow-hidden rounded-2xl p-7">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--glow)] to-transparent opacity-50" />
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[#f7f7fa] px-3 py-1 font-mono text-xs text-[var(--muted)]"><span className="pulse-dot" aria-hidden="true" />laya · local</p>
              <h3 className="mt-4 text-lg font-semibold">{t.layaTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t.layaLead}</p>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed">
                {t.laya.map((l, i) => <li key={l} className="flex gap-3"><span className="font-mono text-xs leading-6 text-[var(--accent)]">{i + 1}</span><span>{l}</span></li>)}
              </ol>
              <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs leading-relaxed text-[var(--muted)]">{t.layaNote}</p>
            </div>
            <div data-reveal className="surface rounded-2xl p-7">
              <h3 className="text-lg font-semibold">{t.rolesTitle}</h3>
              <dl className="mt-4 divide-y divide-[var(--line)] text-sm">
                {t.roles.map(([role, who]) => (
                  <div key={role} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt>{role}</dt><dd className="text-right font-mono text-xs text-[var(--accent)]">{who}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">{t.rolesNote}</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {t.chat.map((c, i) => (
              <div key={c.t} data-reveal className="surface surface-hover rounded-2xl p-7">
                <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{c.t}{c.soon && <Soon label={t.soon} />}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="phone" className="scroll-mt-20 border-t border-[var(--line)] py-24">
          <H2>{t.phoneTitle}</H2>
          <p data-reveal className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.phoneLead}</p>
          <ul data-reveal className="mt-8 max-w-2xl list-disc space-y-3 pl-5 marker:text-[var(--accent)]">
            {t.phoneSteps.map((step) => <li key={step}>{step}</li>)}
            {t.phoneSoon.map((step) => <li key={step}>{step}<Soon label={t.soon} /></li>)}
          </ul>
        </section>

        {/* Keeps /vica#relay working: released vica apps link to it. */}
        <section id="relay" className="scroll-mt-20 border-t border-[var(--line)] py-24">
          <H2>{t.relayGuide[0]}</H2>
          <p data-reveal className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.relayGuide[1]}</p>
          <p data-reveal className="mt-6"><Link href={`${localized(lang, "/relay")}`} className={link}>{t.relayGuide[2]}</Link></p>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.featuresTitle}</H2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <div key={f.t} data-reveal className="surface surface-hover rounded-2xl p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(124,108,240,.18)] bg-[rgba(124,108,240,.08)]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#6d5ce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[i]} /></svg>
                </span>
                <h3 className="mt-5 font-semibold">{f.t}{f.soon && <Soon label={t.soon} />}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="hidden scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.pricingTitle}</H2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
              <h3 className="font-semibold">{t.appName}</h3>
              <p className="mt-2 text-3xl font-bold">{t.appPrice}</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
              <h3 className="font-semibold">{t.relayName}</h3>
              <p className="mt-2 text-3xl font-bold">{t.relayPrice}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {t.relay.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <p className="mt-4 text-sm"><Link href={localized(lang, "/refund")} className={link}>{t.refund}</Link></p>
              <a href={SUBSCRIBE} className="mt-6 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{t.subscribe}</a>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.privacyTitle}</H2>
          <p data-reveal className="max-w-3xl leading-relaxed text-[var(--muted)]">{t.privacy} <Link href={localized(lang, "/privacy")} className={link}>{t.policy}</Link></p>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.reqTitle}</H2>
          <ul data-reveal className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
            {t.req.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="mt-6"><a href={ISSUES} className={link}>{t.bugs}</a></p>
        </section>

        <Questions title={t.faqTitle} items={t.faq} />

        <section className="relative isolate border-t border-[var(--line)] py-28 text-center">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(124,108,240,.10),transparent_70%)]" />
          <H2>{t.ctaTitle}</H2>
          <a data-reveal href={DOWNLOAD} className="inline-block rounded-full bg-[var(--fg)] px-7 py-3.5 text-sm font-medium text-[var(--bg)] shadow-[0_12px_30px_-12px_rgba(91,75,214,.6)] transition hover:bg-[#2a2a33]">{t.mac}</a>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
