import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="glass-chip">404</span>
      <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">
        Page not found
      </h1>
      <p className="max-w-xl text-base text-slate-600">
        The requested route is not mapped from the legacy site yet.
      </p>
      <Link
        href="/"
        className="glass-panel px-6 py-3 font-semibold text-[color:var(--color-meu-navy)] transition-transform hover:-translate-y-0.5"
      >
        Back to homepage
      </Link>
    </main>
  );
}
