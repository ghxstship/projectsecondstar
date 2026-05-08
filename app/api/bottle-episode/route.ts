import { NextResponse } from "next/server";
import { notify } from "@/lib/notify";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, occasion, guests } = body as {
    name?: string;
    email?: string;
    occasion?: string;
    guests?: string;
  };

  if (!name || !email || !occasion || !guests) {
    return NextResponse.json(
      {
        error: "Missing required fields: name, email, occasion, guests",
      },
      { status: 400 },
    );
  }

  const result = await notify({
    channel: "bottle-episode",
    subject: `Bottle Episode / ${name} / ${occasion}`,
    payload: body,
  });

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
