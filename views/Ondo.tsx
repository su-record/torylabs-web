import { pageMetadata } from "@/content/seo";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import type { Lang } from "@/content/i18n";
import { ondoCommands, ondoText } from "@/content/ondo";
import release from "@/content/ondo-release.json";
import { PageSchema, softwareEntity } from "@/components/StructuredData";
import Questions from "@/components/Questions";
import { faqTitles, ondoAnswers } from "@/content/questions";

export function ondoMetadata(lang: Lang): Metadata {
  const { title, description } = ondoText[lang];
  return pageMetadata(lang, "/ondo", title, description);
}

function Downloads({ lang }: { lang: Lang }) {
  const t = ondoText[lang];
  const primary = "inline-flex items-center justify-center rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#34303e]";
  const secondary = "inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-medium";
  return <div className="flex flex-wrap gap-3">
    {release.download ? <a href={release.download} className={primary}>{t.download} <span className="ml-2 opacity-60">↓</span></a>
      : <span className={`${primary} opacity-50`} aria-disabled="true">{t.preparing}</span>}
    {release.github ? <a href={release.github} className={secondary} target="_blank" rel="noopener noreferrer">{t.github} ↗</a>
      : <span className={`${secondary} text-[var(--muted)]`} aria-disabled="true">{t.githubPending}</span>}
  </div>;
}

function Meta({ lang }: { lang: Lang }) {
  const t = ondoText[lang];
  return <>{release.version && `v${release.version} · `}{t.price} · {t.requirements}</>;
}

function Sun({ className }: { className: string }) {
  return <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="8" cy="8" r="3" fill="currentColor" />
    <path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.05 3.05l1.13 1.13M11.82 11.82l1.13 1.13M3.05 12.95l1.13-1.13M11.82 4.18l1.13-1.13" />
  </svg>;
}

// A drawing of the planned menu, not a screenshot: the app is not released yet.
function MenuPreview({ lang }: { lang: Lang }) {
  const m = ondoText[lang].menu;
  return <div aria-hidden="true" className="mx-auto w-full max-w-[380px] select-none text-[13px]">
    <div className="mb-2 flex items-center justify-end gap-3 px-1 text-xs text-[#3a3a44]">
      <span className="flex h-6 w-8 items-center justify-center rounded-md bg-white/80 text-[var(--accent)] shadow-[0_1px_2px_rgba(16,16,24,.08)]"><Sun className="h-4 w-4" /></span>
      <span className="font-mono">02:00</span>
    </div>
    <div className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-white shadow-[0_10px_40px_-16px_rgba(55,40,70,.25)]">
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium">{m.toggle}</span>
          <span className="relative h-[22px] w-[38px] shrink-0 rounded-full bg-[var(--accent)]"><i className="absolute top-[2px] right-[2px] h-[18px] w-[18px] rounded-full bg-white shadow" /></span>
        </div>
        <p className="text-xs text-[var(--muted)]">{m.until}</p>
      </div>
      <div className="border-t border-[var(--line)] p-4">
        <div className="flex items-baseline justify-between"><span className="text-xs text-[var(--muted)]">CPU</span><span className="font-mono text-2xl font-semibold tracking-tight">62°C</span></div>
        {/* Scale 0–105°C: 62°C fills 59%, the 85°C limit sits at 81%. */}
        <div className="relative mt-3 h-1.5 rounded-full bg-[#eeeef3]">
          <i className="absolute inset-y-0 left-0 w-[59%] rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--accent)]" />
          <i className="absolute -top-1 -bottom-1 left-[81%] w-px bg-[#d4483f]" />
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-[11px] text-[var(--muted)]"><span className="whitespace-nowrap">{m.limit}</span><span className="whitespace-nowrap">{m.power}</span></div>
      </div>
      <div className="border-t border-[var(--line)] p-1.5">
        {[[m.display, ""], [m.settings, "⌘,"], [m.quit, "⌘Q"]].map(([label, key]) => <div key={label} className="flex justify-between rounded-md px-2.5 py-1.5"><span>{label}</span><span className="text-[var(--muted)]">{key}</span></div>)}
      </div>
    </div>
  </div>;
}

export default function Ondo({ lang }: { lang: Lang }) {
  const t = ondoText[lang];
  const questions = ondoAnswers(lang);
  const software = softwareEntity({ name: "ondo", lang, description: t.description,
    features: t.features.map((f) => f.t), download: release.download, version: release.version || undefined, requirements: t.requirements });
  return <>
    <PageSchema lang={lang} path="/ondo" title={t.title} description={t.description} questions={questions} entities={[software]} mainEntity={software["@id"]} />
    <Header lang={lang} path="/ondo" />
    <main lang={lang} className="mx-auto max-w-6xl overflow-x-clip px-6">
      <section className="grid items-center gap-14 pt-24 pb-20 lg:grid-cols-[1fr_1fr] lg:pt-32 lg:pb-28">
        <div>
          <p className="font-mono text-xs tracking-[.16em] text-[var(--accent)]">ondo / {t.eyebrow}</p>
          {/* Each line wraps on its own and evenly, so a narrow phone never leaves one character alone.
              Japanese lines break only at the zero-width spaces between phrases in the copy;
              `!` is needed to beat the unlayered `:lang(ja)` rule in globals.css. */}
          <h1 className="mt-6 text-[clamp(34px,4.4vw,52px)] font-semibold leading-[1.2] tracking-[-.045em]">{t.lead.split("\n").map((line) => <span key={line} className={`block text-balance ${lang === "ja" ? "[word-break:keep-all]!" : ""}`}>{line}</span>)}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">{t.intro}</p>
          <div className="mt-9"><Downloads lang={lang} /></div>
          <p className="mt-4 text-xs text-[var(--muted)]"><Meta lang={lang} /></p>
        </div>
        <figure className="min-w-0">
          <div className="rounded-[32px] border border-[#e9e0ed] bg-[#f0e9f2] p-4 shadow-[0_28px_70px_-36px_rgba(90,54,113,.35)] sm:p-7">
            <MenuPreview lang={lang} />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[var(--muted)]">{t.visual}</figcaption>
        </figure>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">{t.featuresTitle}</h2>
        <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((feature, i) => <article key={feature.t}>
            <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
            <h3 className="mt-3 font-semibold">{feature.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.d}</p>
          </article>)}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">{t.stepsTitle}</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {t.steps.map((step, i) => <li key={step.t} className="surface rounded-2xl p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ecfc] text-sm text-[var(--accent)]">{i + 1}</span>
            <h3 className="mt-5 font-semibold">{step.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.d}</p>
          </li>)}
        </ol>
      </section>

      <section className="border-t border-[var(--line)] py-20 md:grid md:grid-cols-[1fr_1.4fr] md:gap-14">
        <div>
          <h2 className="text-3xl font-semibold leading-snug tracking-tight">{t.aiTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{t.aiText}</p>
        </div>
        <pre className="surface mt-6 overflow-x-auto rounded-2xl p-6 font-mono text-[13px] leading-7 md:mt-0">
          {ondoCommands.map((command) => <code key={command} className="block"><span className="text-[var(--accent)] select-none">$ </span>{command}</code>)}
        </pre>
      </section>

      <section className="border-t border-[var(--line)] py-20 md:grid md:grid-cols-[1fr_1.4fr] md:gap-14">
        <h2 className="text-3xl font-semibold leading-snug tracking-tight">{t.permissionsTitle}</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:mt-0">
          {t.permissions.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <Questions title={faqTitles[lang]} items={questions} />

      <section id="download" className="border-t border-[var(--line)] py-20">
        <h2 className="text-3xl font-semibold tracking-tight">{t.installTitle}</h2>
        <p className="mt-3 text-sm text-[var(--muted)]"><Meta lang={lang} /></p>
        <ol className="mt-7 max-w-2xl list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--muted)]">
          {t.install.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <div className="mt-8"><Downloads lang={lang} /></div>
        <ul className="mt-8 max-w-2xl space-y-2 text-xs leading-relaxed text-[var(--muted)]">
          {t.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </section>
    </main>
    <Footer lang={lang} />
  </>;
}
