import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl || scriptUrl.includes("YOUR_SCRIPT_ID_HERE")) {
    console.error("GOOGLE_SCRIPT_URL is not configured.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, message, company, budget } = body;

  if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, service, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const payload = JSON.stringify({
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() ?? "",
    service: service.trim(),
    budget: budget?.trim() ?? "",
    message: message.trim(),
  });

  try {
    // Apps Script web apps respond with a 302 redirect before serving the
    // result. We use redirect:"follow" so fetch resolves the final response,
    // but we also want to see the raw body for proper error detection.
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: payload,
      redirect: "follow",
    });

    const text = await response.text();
    console.log("Apps Script response:", response.status, text);

    let parsed: { success?: boolean; error?: string } = {};
    try {
      parsed = JSON.parse(text);
    } catch {
      // non-JSON response — treat as failure
    }

    if (!parsed.success) {
      throw new Error(parsed.error ?? `Unexpected response from Apps Script: ${text.slice(0, 200)}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission error:", err);
    return NextResponse.json(
      { error: "Failed to submit. Please try again or reach out via WhatsApp." },
      { status: 502 }
    );
  }
}
