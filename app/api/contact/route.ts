import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ===============================
       SAVE TO MONGODB
    =============================== */
    await connectDB();
    await Contact.create({ name, email, phone, message });

    /* ===============================
       MAIL TRANSPORTER (HOSTINGER)
    =============================== */
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    /* ===============================
       CUSTOMER AUTO-REPLY (UNCHANGED)
    =============================== */
    const customerHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;">

          <tr>
            <td>
              <img
                src="https://zaidkhan1609-brighthawk.vercel.app/email/email-hero.png"
                alt="BrightHawk Technology Services"
                width="600"
                style="display:block;width:100%;height:auto;"
              />
            </td>
          </tr>

          <tr>
            <td style="padding:32px;color:#111;">
              <p style="font-size:16px;">Hello <strong>${name}</strong>,</p>

              <p style="font-size:15px;line-height:1.6;">
                Thank you for contacting <strong>BrightHawk Info Tech Solution</strong>.
                We’ve received your request for a <strong>free consultation</strong>.
              </p>

              <p style="font-size:15px;line-height:1.6;">
                One of our technical experts will review your requirements and
                reach out to you within <strong>24 hours</strong>.
              </p>

              <div style="margin-top:18px;padding:14px;background:#f4f4f4;border-radius:8px;">
                <p style="margin:0;font-size:14px;color:#333;">
                  <strong>Your Message:</strong><br/>
                  ${message}
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="https://zaidkhan1609-brighthawk.vercel.app/email/email-about.png"
                alt="Why Choose BrightHawk"
                width="600"
                style="display:block;width:100%;height:auto;"
              />
            </td>
          </tr>

          <tr>
            <td style="padding:28px;color:#111;">
              <p style="font-size:15px;">
                If you have any urgent questions, simply reply to this email.
              </p>

              <p style="margin-top:24px;font-size:15px;">
                Warm regards,<br/>
                <strong>BrightHawk Info Tech Solution</strong>
              </p>

              <p style="font-size:14px;color:#555;">
                🌐 https://zaidkhan1609-brighthawk.vercel.app
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#f1f1f1;text-align:center;padding:12px;font-size:12px;color:#666;">
              © 2024 BrightHawk Info Tech Solution
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    /* ===============================
       OWNER NOTIFICATION (UNCHANGED)
    =============================== */
    const ownerHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;padding:28px;">

          <h2 style="color:#ff7a1a;margin-top:0;">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <div style="margin-top:16px;padding:14px;background:#f4f4f4;border-radius:8px;">
            <p style="margin:0;"><strong>Message:</strong><br/>${message}</p>
          </div>

          <p style="margin-top:24px;font-size:14px;">
            Please respond to this lead as soon as possible.
          </p>

          <hr style="border:none;border-top:1px solid #ddd;margin:24px 0;" />

          <p style="font-size:12px;color:#777;text-align:center;">
            BrightHawk Info Tech Solution
          </p>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    /* ===============================
       SEND EMAILS
    =============================== */
    await transporter.sendMail({
      from: `"BrightHawk Info Tech Solution" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting BrightHawk – Free Consultation Confirmed",
      html: customerHtml,
    });

    await transporter.sendMail({
      from: `"BrightHawk Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER!,
      subject: "New Contact Form Submission",
      html: ownerHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
