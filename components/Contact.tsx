"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Wire up to Formspree, Resend, or your own /api/contact route.
    // For now we simulate a successful submission so the UX reads correctly.
    await new Promise((r) => setTimeout(r, 600));

    setStatus("sent");
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", role: "", message: "" });
      setStatus("idle");
    }, 3200);
  };

  const submitLabel =
    status === "idle"
      ? "Send →"
      : status === "sending"
      ? "Sending..."
      : "Received / 48hr Reply";

  return (
    <section id="contact" className="bg-paper px-5 py-[140px] md:px-10">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="font-display text-[clamp(60px,9vw,140px)] uppercase leading-[0.85] tracking-[-0.02em]">
            Get on
            <br />
            board<span className="text-outline-cyan">.</span>
          </h2>
          <p className="mt-6 font-sub text-[32px] leading-tight">
            Investor deck, partnership memo, and sponsor briefs available on
            request. We'll respond within 48 hours.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid border-hard">
          <FormRow label="Name">
            <input
              type="text"
              required
              placeholder="First and last"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-input w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <FormRow label="Email">
            <input
              type="email"
              required
              placeholder="you@domain.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <FormRow label="Company">
            <input
              type="text"
              placeholder="Optional"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <FormRow label="Interest">
            <select
              required
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            >
              <option value="">Select one</option>
              <option value="investor">Investor</option>
              <option value="partner">Partner / Venue</option>
              <option value="sponsor">Sponsor / Brand</option>
              <option value="talent">Talent / Host / DJ</option>
              <option value="press">Press / Media</option>
              <option value="other">Other</option>
            </select>
          </FormRow>

          <FormRow label="Message">
            <textarea
              required
              placeholder="Tell us what you're working on..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="min-h-[120px] w-full resize-y border-none bg-paper px-5 py-5 font-sans text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <button
            type="submit"
            disabled={status !== "idle"}
            className={`w-full border-t-[1.5px] border-ink p-7 font-display text-[32px] uppercase tracking-[-0.01em] transition-colors ${
              status === "sent"
                ? "bg-cyan text-ink"
                : "bg-ink text-paper hover:bg-cyan hover:text-ink"
            }`}
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 border-b-[1.5px] border-ink last:border-b-0 md:grid-cols-[160px_1fr]">
      <label className="flex items-center bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper md:py-5">
        {label}
      </label>
      {children}
    </div>
  );
}
