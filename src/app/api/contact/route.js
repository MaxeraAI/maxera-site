import { Resend } from "resend";

const TO_EMAIL = "maxera.ai@gmail.com";
const FROM_EMAIL = "Maxera Forms <onboarding@resend.dev>";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name = "",
      email = "",
      company = "",
      industry = "",
      role = "",
      timeline = "",
      message = "",
      website = "",
    } = body;

    if (website.trim() !== "") {
      return Response.json({ ok: true });
    }

    const nameTrim = String(name).trim();
    const emailTrim = String(email).trim();
    const companyTrim = String(company).trim();
    const messageTrim = String(message).trim();

    if (!nameTrim || !emailTrim || !companyTrim || !messageTrim) {
      return Response.json({ error: "Please fill in the required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json({ error: "Mail service not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const textBody = [
      `Name: ${nameTrim}`,
      `Email: ${emailTrim}`,
      `Business: ${companyTrim}`,
      `Industry: ${String(industry).trim() || "(not specified)"}`,
      `Role: ${String(role).trim() || "(not specified)"}`,
      `Timeline: ${String(timeline).trim() || "(not specified)"}`,
      "",
      "What's the most expensive piece of work in your business right now?",
      "",
      messageTrim,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: emailTrim,
      subject: `New contact: ${nameTrim} from ${companyTrim}`,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send right now. Please email us directly." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
