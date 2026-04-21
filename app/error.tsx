"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-paper px-5 py-20 text-ink md:px-10">
      <div className="max-w-[720px]">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          500 / Something Broke
        </div>
        <h1 className="font-display text-[clamp(56px,10vw,160px)] uppercase leading-[0.85] tracking-[-0.02em]">
          Not the Flotilla<span className="text-cyan">.</span>
          <br />
          Just the website.
        </h1>
        <p className="mt-8 font-sub text-[clamp(24px,3vw,36px)] leading-tight tracking-wide">
          Try again in a minute.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline transition-all hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline transition-all hover:bg-ink hover:text-paper"
          >
            Back to the Marina
          </a>
        </div>
      </div>
    </main>
  );
}
