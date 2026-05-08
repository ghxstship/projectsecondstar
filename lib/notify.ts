// ====================================================================
// NOTIFY — server-side outbound email
// ====================================================================
// Single dispatcher for all form submissions. Uses Resend if
// RESEND_API_KEY is set; otherwise logs to the server console and
// returns success so the user-facing flow never breaks.
//
// ENV VARS
//   RESEND_API_KEY    — Resend API key (optional)
//   RESEND_FROM       — From address (default: notifications@hvrbor.club)
//   APPLY_INBOX       — Captain apply destination (default: hello@hvrbor.club)
//   BOTTLE_INBOX      — Bottle Episode destination (default: hello@hvrbor.club)
//   NEWSLETTER_INBOX  — Newsletter destination (default: hello@hvrbor.club)
// ====================================================================

type NotifyArgs = {
  channel: "apply" | "bottle-episode" | "newsletter";
  subject: string;
  payload: Record<string, unknown>;
};

const inboxByChannel: Record<NotifyArgs["channel"], string> = {
  apply: process.env.APPLY_INBOX || "hello@hvrbor.club",
  "bottle-episode": process.env.BOTTLE_INBOX || "hello@hvrbor.club",
  newsletter: process.env.NEWSLETTER_INBOX || "hello@hvrbor.club",
};

export async function notify({ channel, subject, payload }: NotifyArgs) {
  const ts = new Date().toISOString();
  const inbox = inboxByChannel[channel];

  // Always log — gives us a console trail in any environment
  console.log(
    `[notify] channel=${channel} ts=${ts} inbox=${inbox} subject=${JSON.stringify(subject)}`,
    payload,
  );

  if (!process.env.RESEND_API_KEY) {
    return { delivered: false, reason: "no-resend-key" as const };
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "notifications@hvrbor.club",
        to: inbox,
        subject,
        text: formatPlainText(channel, payload, ts),
      }),
    });

    if (!r.ok) {
      const body = await r.text().catch(() => "");
      console.error(`[notify] resend failure ${r.status}`, body);
      return { delivered: false, reason: "resend-error" as const };
    }

    return { delivered: true, reason: "resend" as const };
  } catch (err) {
    console.error("[notify] resend exception", err);
    return { delivered: false, reason: "resend-exception" as const };
  }
}

function formatPlainText(
  channel: string,
  payload: Record<string, unknown>,
  ts: string,
) {
  const lines = [
    `HVRBOR.CLUB — ${channel} — ${ts}`,
    "",
    ...Object.entries(payload).map(
      ([k, v]) => `${k.padEnd(16)}  ${JSON.stringify(v)}`,
    ),
  ];
  return lines.join("\n");
}
