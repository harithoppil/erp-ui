import { NextRequest, NextResponse } from "next/server";

/**
 * Frappe Method Proxy
 * Forwards calls to the Frappe backend's whitelisted methods.
 * Requires the user to be logged in (session cookie forwarded).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { method, args = {} } = body;

    if (!method || typeof method !== "string") {
      return NextResponse.json({ error: "Missing method" }, { status: 400 });
    }

    // Forward to Frappe's method API
    const frappeUrl = process.env.FRAPPE_URL || "http://localhost:8000";
    const cookie = req.headers.get("cookie") || "";

    const res = await fetch(`${frappeUrl}/api/method/${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(cookie ? { Cookie: cookie } : {}),
      },
      body: JSON.stringify(args),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "Unknown error");
      console.error(`Frappe proxy error (${method}): ${res.status}`, text.slice(0, 500));
      return NextResponse.json(
        { error: `Frappe error: ${res.status}`, detail: text.slice(0, 500) },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (err: any) {
    console.error("Frappe proxy exception:", err);
    return NextResponse.json(
      { error: "Proxy failed", detail: err.message },
      { status: 500 }
    );
  }
}
