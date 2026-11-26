import { pageMetadata } from "@/content/seo";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import type { Lang } from "@/content/i18n";
import { brewCommand, controlExamples, mcpTools, ondoText } from "@/content/ondo";
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

/** The app's thermometer colors (ondo Design.swift, Heat): blue up to 40°C, then toward red at the limit. */
const HEAT_COOL_BELOW = 40;
const HEAT_STOPS: [number, [number, number, number]][] = [
  [0, [10, 124, 240]], [0.35, [46, 158, 69]], [0.65, [224, 176, 0]], [0.85, [240, 122, 16]], [1, [217, 41, 46]],
];
const DEFAULT_LIMIT = 85;

function heatLevel(celsius: number, limit = DEFAULT_LIMIT) {
  return Math.min(Math.max((celsius - HEAT_COOL_BELOW) / (limit - HEAT_COOL_BELOW), 0), 1);
}

function heatColor(celsius: number, limit = DEFAULT_LIMIT) {
  const level = heatLevel(celsius, limit);
  const upper = HEAT_STOPS.findIndex(([stop]) => stop >= level);
  const [b, cb] = HEAT_STOPS[upper], [a, ca] = HEAT_STOPS[Math.max(upper - 1, 0)];
  const t = b > a ? (level - a) / (b - a) : 1;
  return `rgb(${ca.map((v, i) => Math.round(v + (cb[i] - v) * t)).join(",")})`;
}

const HEAT_62 = heatColor(62);

/** The menu bar glyph: a closed laptop with a thermometer, as in the app. */
function MenuGlyph() {
  return <svg viewBox="0 0 22 20" className="h-4 w-[18px]" aria-hidden="true">
    <rect x="2" y="16" width="18" height="2.6" rx="1.3" fill="#16161a" />
    <rect x="3.5" y="13.6" width="15" height="1.6" rx=".8" fill="#16161a" opacity=".6" />
    <rect x="9.4" y="1.2" width="3.2" height="8.6" rx="1.6" fill="none" stroke="#16161a" strokeWidth="1.3" />
    <circle cx="11" cy="10.4" r="2.6" fill="#fff" stroke="#16161a" strokeWidth="1.3" />
    <rect x="10.4" y="5" width="1.2" height="5" rx=".6" fill={HEAT_62} />
    <circle cx="11" cy="10.4" r="1.5" fill={HEAT_62} />
  </svg>;
}

/** Thermometers from 30°C to 90°C in the app's colors; the mercury rises with the temperature. */
function HeatScale({ lang }: { lang: Lang }) {
  const temps = [30, 40, 50, 60, 70, 80, 90];
  return <svg viewBox="0 0 560 150" className="h-auto w-full" role="img" aria-label={ondoText[lang].colorAlt}>
    {temps.map((celsius, i) => {
      const x = 40 + i * 80, color = heatColor(celsius);
      const top = 26 + 52 * (1 - Math.max(heatLevel(celsius), 0.12));
      return <g key={celsius}>
        <rect x={x - 9} y="14" width="18" height="78" rx="9" fill="#fff" stroke="#16161a" strokeWidth="5" />
        <circle cx={x} cy="96" r="17" fill="#fff" stroke="#16161a" strokeWidth="5" />
        <rect x={x - 4} y={top} width="8" height={96 - top} rx="4" fill={color} />
        <circle cx={x} cy="96" r="10" fill={color} />
        <text x={x} y="140" fontSize="15" fill="#6b6b76" textAnchor="middle">{celsius}°C</text>
      </g>;
    })}
  </svg>;
}

// A drawing of the app's menu, not a screenshot: the app is not released yet.
function MenuPreview({ lang }: { lang: Lang }) {
  const m = ondoText[lang].menu;
  return <div aria-hidden="true" className="mx-auto w-full max-w-[360px] select-none">
    <div className="mb-2 flex items-center justify-end gap-3 px-1 text-xs text-[#3a3a44]">
      <span className="flex h-6 w-9 items-center justify-center rounded-md bg-white/80 shadow-[0_1px_2px_rgba(16,16,24,.08)]"><MenuGlyph /></span>
      <span className="font-mono">02:00</span>
    </div>
    <div className="grid gap-4 rounded-xl bg-white p-4 shadow-[0_4px_6px_rgba(0,0,0,.10),0_12px_24px_rgba(0,0,0,.15)] ring-1 ring-black/10">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[17px] font-semibold tracking-[-.01em]">{m.title}</p>
          <p className="mt-0.5 truncate text-xs text-[var(--accent)]">{m.status}</p>
        </div>
        <span className="relative h-[22px] w-[38px] shrink-0 rounded-full bg-[var(--accent)]"><i className="absolute top-[2px] right-[2px] h-[18px] w-[18px] rounded-full bg-white shadow" /></span>
      </div>
      <div className="grid gap-2.5 rounded-[10px] bg-[#f1f1f1] p-3">
        <div className="flex items-end justify-between">
          <div><p className="text-xs font-medium text-[var(--muted)]">CPU</p><p className="text-[29px] leading-tight font-semibold tracking-[-.02em] tabular-nums">62°C</p></div>
          <div className="text-right"><p className="text-xs font-medium text-[var(--muted)]">{m.battery}</p><p className="text-[17px] font-medium text-[var(--muted)] tabular-nums">33°C</p></div>
        </div>
        {/* Scale 0–105°C: 62°C fills 59%, the 85°C limit sits at 81%. */}
        <div className="relative h-1.5 rounded-full bg-[#dcdce1]">
          <i className="absolute inset-y-0 left-0 w-[59%] rounded-full" style={{ background: HEAT_62 }} />
          <i className="absolute -top-1 -bottom-1 left-[81%] w-0.5 rounded bg-[var(--fg)]" />
        </div>
        <div className="flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-xs text-[var(--muted)]">
          <span className="whitespace-nowrap">{m.limits}</span><span className="whitespace-nowrap">{m.power}</span>
        </div>
      </div>
    </div>
  </div>;
}

/** Temperature over time: past the limit ondo warns at 60 s and stops at 120 s, and the Mac cools. */
function ProtectionChart({ lang }: { lang: Lang }) {
  const c = ondoText[lang].chart;
  return <svg viewBox="0 0 760 240" className="h-auto w-full" role="img" aria-label={c.alt}>
    <rect x="40" y="20" width="700" height="190" rx="6" fill="#fafafa" />
    <line x1="40" y1="78" x2="740" y2="78" stroke="#c0262c" strokeDasharray="5 5" />
    <text x="44" y="70" fontSize="13" fill="#c0262c">{c.limit}</text>
    <rect x="330" y="20" width="200" height="190" fill="#fff1e0" opacity=".7" />
    <polyline fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinejoin="round"
      points="40,170 120,160 200,140 270,100 330,72 380,64 430,60 480,58 530,62 560,96 600,140 660,168 740,176" />
    <line x1="430" y1="20" x2="430" y2="210" stroke="#d97706" strokeWidth="1.5" />
    <text x="436" y="38" fontSize="13" fill="#8a4b00">{c.warn}</text>
    <line x1="530" y1="20" x2="530" y2="210" stroke="#16161a" strokeWidth="1.5" />
    <text x="536" y="38" fontSize="13" fill="#16161a">{c.stop}</text>
    {c.ticks.map((tick, i) => <text key={tick} x={[330, 430, 530][i]} y="230" fontSize="13" fill="#6b6b76" textAnchor="middle">{tick}</text>)}
  </svg>;
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
          <p className="mt-4 font-mono text-[13px] text-[var(--muted)]">$ {brewCommand}{!release.download && <span className="font-sans text-xs"> · {t.brewNote}</span>}</p>
          <p className="mt-2 text-xs text-[var(--muted)]"><Meta lang={lang} /></p>
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

      <section className="border-t border-[var(--line)] py-20 md:grid md:grid-cols-[1fr_1.2fr] md:items-center md:gap-14">
        <div>
          <h2 className="text-3xl font-semibold leading-snug tracking-tight">{t.colorTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{t.colorText}</p>
        </div>
        <div className="surface mt-8 rounded-2xl p-6 md:mt-0"><HeatScale lang={lang} /></div>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <div className="surface grid items-center gap-8 rounded-2xl p-6 md:grid-cols-[1fr_1.8fr] md:p-8">
          <div>
            <h2 className="text-3xl font-semibold leading-snug tracking-tight">{t.chart.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{t.chart.text}</p>
          </div>
          <ProtectionChart lang={lang} />
        </div>
        <h2 className="mt-20 mb-10 text-3xl font-semibold tracking-tight">{t.stepsTitle}</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {t.steps.map((step, i) => <li key={step.t} className="surface rounded-2xl p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ecfc] text-sm text-[var(--accent)]">{i + 1}</span>
            <h3 className="mt-5 font-semibold">{step.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.d}</p>
          </li>)}
        </ol>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <h2 className="text-3xl font-semibold tracking-tight">{t.controlTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{t.controlIntro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.controls.map((control, i) => {
            const examples = [controlExamples.cli, controlExamples.mcp, controlExamples.links][i];
            return <article key={control.t} className="surface flex flex-col rounded-2xl p-6">
              <h3 className="font-semibold">{control.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{control.d}</p>
              <pre className="mt-5 overflow-x-auto rounded-xl bg-[#f5f5f8] p-4 font-mono text-[12.5px] leading-6">
                {examples.map((line) => <code key={line} className="block">{line.startsWith("ondo://") ? line : <><span className="select-none text-[var(--accent)]">$ </span>{line}</>}</code>)}
              </pre>
              {i === 1 && <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">{t.toolsLabel}: <span className="font-mono">{mcpTools.join(", ")}</span></p>}
            </article>;
          })}
        </div>
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
