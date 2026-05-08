"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
    }, 4000);
  };

  return (
    <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[140px]">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-cyan">
            The List
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] uppercase leading-[0.85] tracking-[-0.02em]">
            The list
            <br />
            hears first<span className="text-cyan">.</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[#C5C5C0]">
            SEAson updates. New Episodes. The Saturdays worth clearing. Low
            volume. Unsubscribe whenever.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 border-[3px] border-paper p-6 md:p-8"
        >
          <label
            htmlFor="newsletter-email"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan"
          >
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-paper bg-transparent px-4 py-3 font-mono text-[14px] text-paper outline-none placeholder:text-muted focus:border-cyan focus:bg-fog"
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            className={`border-[3px] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] transition-all ${
              status === "sent"
                ? "border-cyan bg-cyan text-ink"
                : "border-paper bg-paper text-ink hover:bg-cyan hover:border-cyan"
            }`}
          >
            {status === "idle"
              ? "Join the list →"
              : status === "sending"
              ? "Sending..."
              : "On the list. We'll be in touch."}
          </button>
        </form>
      </div>
    </section>
  );
}
