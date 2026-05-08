"use client";

import { useState, FormEvent } from "react";
import { networkVerticals } from "@/lib/network";

type Status = "idle" | "sending" | "sent";

type FormState = {
  name: string;
  email: string;
  phone: string;
  miamiConnection: string;
  bottleEpisode: string;
  source: string;
  message: string;
  priorities: string[];
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  miamiConnection: "",
  bottleEpisode: "",
  source: "",
  message: "",
  priorities: [],
};

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const togglePriority = (id: string) => {
    setForm((f) => ({
      ...f,
      priorities: f.priorities.includes(id)
        ? f.priorities.filter((p) => p !== id)
        : [...f.priorities, id],
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[140px]">
        <div className="mx-auto max-w-[720px] border-hard p-8 md:p-12">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
            Standby Confirmed
          </div>
          <h2 className="font-display text-[clamp(48px,7vw,96px)] uppercase leading-[0.9] tracking-[-0.02em]">
            On the standby list<span className="text-cyan">.</span>
          </h2>
          <p className="mt-6 font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
            We'll be in touch before you need to start packing.
          </p>
          <p className="mt-6 text-[16px] leading-relaxed">
            Captain casting opens at Art Basel Miami in December 2026. Standby
            positions are queued in order received. Lower numbers indicate
            earlier applications. The first fifty Captain seats are SEAson 1
            founding members and lock the founding rate for the duration of
            their membership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              Back to the Marina
            </a>
            <a
              href="/episodes"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              See SEAson 1 Episodes
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="apply-form"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
            Captain Application
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
            Tell us
            <br />
            who you are<span className="text-cyan">.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed">
            Captain is the annual membership tier. The application is a
            standby — Captain casting opens at Art Basel Miami in December
            2026, and applications are reviewed in the order received.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed">
            Commodore is invitation-only and cannot be applied for directly.
            Captain members earn invitation eligibility through participation
            across the SEAson.
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
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
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

          <FormRow label="Phone">
            <input
              type="tel"
              placeholder="Optional"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <FormRow label="Miami">
            <select
              required
              value={form.miamiConnection}
              onChange={(e) =>
                setForm({ ...form, miamiConnection: e.target.value })
              }
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            >
              <option value="">Select one</option>
              <option value="resident">Miami resident</option>
              <option value="part-time">Part-time / second home</option>
              <option value="visitor">Frequent visitor</option>
              <option value="new-arrival">New arrival</option>
              <option value="other">Other</option>
            </select>
          </FormRow>

          <FormRow label="Network">
            <div className="flex flex-wrap gap-2 border-none bg-paper p-5">
              {networkVerticals.map((v) => {
                const active = form.priorities.includes(v.id);
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => togglePriority(v.id)}
                    className={`border-2 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                      active
                        ? "border-cyan bg-cyan text-ink"
                        : "border-ink bg-paper text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </FormRow>

          <FormRow label="Bottle Episode">
            <select
              value={form.bottleEpisode}
              onChange={(e) =>
                setForm({ ...form, bottleEpisode: e.target.value })
              }
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            >
              <option value="">Interested? Optional.</option>
              <option value="yes">
                Yes — interested in private charters
              </option>
              <option value="maybe">Maybe down the road</option>
              <option value="no">Not for me</option>
            </select>
          </FormRow>

          <FormRow label="Source">
            <input
              type="text"
              placeholder="How did you hear about HVRBOR?"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
              className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <FormRow label="Tell us">
            <textarea
              required
              placeholder="A few sentences about yourself. What you do, what you're working on, what you'd want this membership to be."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="min-h-[160px] w-full resize-y border-none bg-paper px-5 py-5 font-sans text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
            />
          </FormRow>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full border-t-[1.5px] border-ink bg-ink p-7 font-display text-[32px] uppercase tracking-[-0.01em] text-paper transition-colors hover:bg-cyan hover:text-ink"
          >
            {status === "sending" ? "Sending..." : "Join Standby →"}
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
