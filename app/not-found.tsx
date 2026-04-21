import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-paper px-5 py-20 text-ink md:px-10">
      <div className="max-w-[720px]">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          404 / Off Route
        </div>
        <h1 className="font-display text-[clamp(56px,10vw,160px)] uppercase leading-[0.85] tracking-[-0.02em]">
          That Episode has sailed<span className="text-cyan">.</span>
        </h1>
        <p className="mt-8 font-sub text-[clamp(24px,3vw,36px)] leading-tight tracking-wide">
          Try another chapter.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline transition-all hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft"
          >
            Back to the Marina
          </Link>
          <Link
            href="/#calendar"
            className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline transition-all hover:bg-ink hover:text-paper"
          >
            See the Calendar
          </Link>
        </div>
      </div>
    </main>
  );
}
