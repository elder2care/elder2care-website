import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const reason = String(formData.get("reason") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the required fields.",
        },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "The contact form is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Elder2Care",
            email: "info@elder2care.ca",
          },
          to: [
            {
              email: "info@elder2care.ca",
              name: "Elder2Care",
            },
          ],
          replyTo: {
            email,
            name,
          },
          subject: `Elder2Care website enquiry — ${
            reason || "General enquiry"
          }`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>New Elder2Care Website Enquiry</h2>

              <p><strong>Full name:</strong> ${escapeHtml(name)}</p>

              <p><strong>Email:</strong> ${escapeHtml(email)}</p>

              <p><strong>Phone:</strong> ${
                escapeHtml(phone) || "Not provided"
              }</p>

              <p><strong>Reason for enquiry:</strong> ${
                escapeHtml(reason) || "Not selected"
              }</p>

              <p><strong>Message:</strong></p>

              <div style="
                padding: 16px;
                background: #f5f7f6;
                border-radius: 8px;
                white-space: pre-wrap;
              ">
                ${escapeHtml(message)}
              </div>

              <hr />

              <p>
                This message was submitted through the
                Elder2Care website contact form.
              </p>
            </div>
          `,
          textContent: `
New Elder2Care Website Enquiry

Full name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Reason for enquiry: ${reason || "Not selected"}

Message:
${message}

This message was submitted through the Elder2Care website contact form.
          `.trim(),
          tags: ["elder2care-contact-form"],
        }),
      }
    );

    const result = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error("Brevo API error:", result);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your submission has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your message. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
