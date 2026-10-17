import Link from "next/link";
import { company } from "@/content/company";

export function Header({ home = false }: { home?: boolean }) {
  const nav = [["about", "About"], ["products", "Products"], ["team", "Founder"], ["contact", "Contact"]];
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold">Tory Labs</Link>
        {home && (
          <nav className="hidden gap-6 text-sm sm:flex">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="text-[var(--muted)] hover:text-[var(--fg)]">{l}</a>)}
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-[var(--muted)]">
        <p className="font-semibold text-[var(--fg)]">{company.name}</p>
        <dl className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <div>Company: {company.name}</div>
          <div>CEO: {company.ceo}</div>
          <div>Business registration no.: {company.bizNumber}</div>
          <div>Address: {company.address}</div>
        </dl>
        <p className="mt-6 flex flex-wrap gap-x-2">
          <span>© 2026 {company.name}</span>·
          <Link href="/privacy" className="hover:underline">Privacy</Link>·
          <Link href="/terms" className="hover:underline">Terms</Link>·
          <a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a>
        </p>
      </div>
    </footer>
  );
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: October 18, 2026</p>
        <div className="legal mt-10">{children}</div>
        <p className="mt-12"><Link href="/" className="text-sm underline">← Tory Labs</Link></p>
      </main>
      <Footer />
    </>
  );
}
