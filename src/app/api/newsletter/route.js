import { Resend } from "resend";

const TO_EMAIL = "maxera.ai@gmail.com";
const FROM_EMAIL = "Maxera Forms <onboarding@resend.dev>";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email = "", website = "" } = body;

    if (website.trim() !== "") {
      return Response.json({ ok: true });
    }

    const emailTrim = String(email).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json({ error: "Mail service not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: emailTrim,
      subject: `Newsletter signup: ${emailTrim}`,
      text: `New Field notes signup:\n\n${emailTrim}\n\nReach out when you publish next.`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not subscribe right now. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
