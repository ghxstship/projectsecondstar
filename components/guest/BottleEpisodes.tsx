"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

type FormState = {
  name: string;
  email: string;
  occasion: string;
  guests: string;
  date: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  email: "",
  occasion: "",
  guests: "",
  date: "",
  notes: "",
};

export default function BottleEpisodes() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/bottle-episode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error(await r.text());
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="bottle-episodes"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-cyan-deep">
            Private / Bottle Episode
          </div>
          <h2 className="font-display text-[clamp(56px,8vw,120px)] uppercase leading-[0.85] tracking-[-0.02em]">
            The whole boat.
            <br />
            Your call sheet<span className="text-cyan">.</span>
          </h2>
          <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[15px]">
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Capacity
              </span>
              <span>6–12 guests, captained vessel, 8 hours on the water</span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Programming
              </span>
              <span>
                Same Itinerary A or B as a public Episode, customized end to
                end — route, soundtrack, food, content
              </span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Captain Credit
              </span>
              <span>
                Captain members receive a Bottle Episode credit applied to
                their first private charter
              </span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Response
              </span>
              <span>48-hour turnaround on private inquiries</span>
            </li>
          </ul>
        </div>

        {status === "sent" ? (
          <div className="border-hard p-8 md:p-10">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              Inquiry honored
            </div>
            <h3 className="font-display text-[clamp(36px,5vw,72px)] uppercase leading-[0.9] tracking-[-0.02em]">
              We'll be in touch
              <br />
              within 48 hours<span className="text-cyan">.</span>
            </h3>
            <p className="mt-6 text-[16px] leading-relaxed">
              The Harbor opens a private contract thread for your Bottle
              Episode — date, route, soundtrack, food, content. Pack less
              than you think you need.
            </p>
          </div>
        ) : (
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
            <FormRow label="Occasion">
              <select
                required
                value={form.occasion}
                onChange={(e) =>
                  setForm({ ...form, occasion: e.target.value })
                }
                className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
              >
                <option value="">Select one</option>
                <option value="bachelorette">Bachelorette / Bachelor</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate offsite</option>
                <option value="wedding">Wedding welcome day</option>
                <option value="celebration">Celebration / Other</option>
              </select>
            </FormRow>
            <FormRow label="Guests">
              <input
                type="text"
                required
                placeholder="6–12"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
              />
            </FormRow>
            <FormRow label="Window">
              <input
                type="text"
                placeholder="Target date or range"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border-none bg-paper px-5 py-5 text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
              />
            </FormRow>
            <FormRow label="Notes">
              <textarea
                placeholder="Anything we should know — dietary, vibe, partner brand involvement, etc."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="min-h-[120px] w-full resize-y border-none bg-paper px-5 py-5 font-sans text-[15px] text-ink outline-none transition-colors focus:bg-cyan"
              />
            </FormRow>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full border-t-[1.5px] border-ink bg-ink p-7 font-display text-[28px] uppercase tracking-[-0.01em] text-paper transition-colors hover:bg-cyan hover:text-ink"
            >
              {status === "sending"
                ? "Sending..."
                : status === "error"
                ? "Try again"
                : "Send the Inquiry →"}
            </button>
          </form>
        )}
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
    <div className="grid grid-cols-1 border-b-[1.5px] border-ink last:border-b-0 md:grid-cols-[140px_1fr]">
      <label className="flex items-center bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper md:py-5">
        {label}
      </label>
      {children}
    </div>
  );
}
