import { company, founder, TBD } from "@/content/company";
import { Header, Footer } from "@/components/Chrome";

const values = [
  { t: "Privacy-first, on-device AI", d: "We process on the user's device whenever possible. Your data stays yours." },
  { t: "Open source", d: "Our code is public so anyone can inspect and improve it." },
  { t: "Fast shipping", d: "Build small, ship fast, and improve through real use." },
];

const products = [
  {
    name: "voin", href: "" /* hidden; was "/voin" */, tag: "macOS · Open source · Free",
    d: "Free, open-source on-device dictation and meeting notes app for Mac.",
    features: ["Local transcription", "Zoom/Teams system audio capture", "Speaker diarization", "Markdown meeting notes with summaries", "Voice commands to coding agents", "Windows support planned"],
  },
  {
    name: "vibe", href: "https://github.com/su-record/vibe", tag: "Developer tool · Open source",
    d: "A harness for Claude Code, Codex and ChatGPT desktop: you approve the scenarios, and the harness proves the work.", features: [],
  },
  { name: "Tory", href: "https://tory.me", tag: "AI companion", d: "An AI companion that remembers.", features: [] },
];

function H2({ children }: { children: string }) {
  return <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <Header home />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 sm:py-32">
          <p className="text-sm font-medium text-[var(--accent)]">On-device · Private · Practical AI</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Tory Labs</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed">Practical AI that runs on your own device and keeps your data private.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#products" className="rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">View products</a>
            <a href={`mailto:${company.email}`} className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-medium">Contact us</a>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>About</H2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">What we do</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">Tory Labs builds AI software that runs directly on users&apos; devices instead of depending on the cloud. We focus on tools that help with everyday work: meeting notes, dictation, and AI developer tooling.</p>
            </div>
            <div>
              <h3 className="font-semibold">Mission</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">Make useful AI available to everyone without asking them to give up their data.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>Products</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              {p.href ? (
<a key={p.name} href={p.href} {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between"><span className="text-xl font-bold">{p.name}</span>{p.href && <span className="text-[var(--muted)]">↗</span>}</div>
                <p className="mt-1 text-xs text-[var(--accent)]">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed">{p.d}</p>
                {p.features.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[var(--accent)]">•</span>{f}</li>)}
                  </ul>
                )}
              </a>
) : (
<div key={p.name} className="flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <div className="flex items-center justify-between"><span className="text-xl font-bold">{p.name}</span>{p.href && <span className="text-[var(--muted)]">↗</span>}</div>
                <p className="mt-1 text-xs text-[var(--accent)]">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed">{p.d}</p>
                {p.features.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[var(--accent)]">•</span>{f}</li>)}
                  </ul>
                )}
              </div>
)}
            ))}
          </div>
        </section>

        <section id="team" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>Founder</H2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {founder.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={founder.photo} alt={founder.title} className="h-28 w-28 rounded-full object-cover" />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[var(--line)] text-xs text-[var(--muted)]">Photo {TBD}</div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{founder.title}{founder.name && ` · ${founder.name}`}</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">{founder.bio || `Bio ${TBD}`}</p>
              <a href={company.github} className="mt-3 inline-block text-sm underline underline-offset-4" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>Contact</H2>
          <p className="leading-relaxed text-[var(--muted)]">For partnerships, collaboration, or product questions, please email us.</p>
          <a href={`mailto:${company.email}`} className="mt-6 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{company.email}</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
