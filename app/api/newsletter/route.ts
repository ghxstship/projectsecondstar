import { NextResponse } from "next/server";
import { notify } from "@/lib/notify";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email } = body as { email?: string };

  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json(
      { error: "Valid email required" },
      { status: 400 },
    );
  }

  const result = await notify({
    channel: "newsletter",
    subject: `Newsletter / ${email}`,
    payload: { email, source: "the-list", ts: new Date().toISOString() },
  });

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
