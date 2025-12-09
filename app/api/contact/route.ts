import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    /* ===========================================================
       AUTO-REPLY EMAIL TEMPLATE (sent to the CUSTOMER)
    ============================================================ */

    const autoReplyHtml = `
<div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0a0a0a; color: #e5e5e5;">

  <div style="text-align:center; margin-bottom: 20px;">
    <img src="https://yourwebsite.com/images/logo.png" alt="BrightHawk"
      style="width:160px; max-width:80%;" />
  </div>

  <div style="
      background: linear-gradient(to right, #ff7a1a, #ff4d4d, #c43dff);
      padding: 18px;
      border-radius: 10px;
      text-align: center;
      color: #000;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 28px;">
    Thanks for contacting BrightHawk!
  </div>

  <p style="font-size:16px; line-height:1.6;">
    Hi <strong>${name}</strong>,
    <br><br>
    Thanks for reaching out. Your message has been received successfully, and our team
    will get back to you shortly.
  </p>

  <p style="font-size:16px; line-height:1.6;">
    Whether it's DevOps, Cloud, Software Development, or Big Data —
    our engineers will respond soon with the best possible solution.
  </p>

  <div style="background-color:#111; padding:16px; border-radius:8px; margin-top:20px; border:1px solid #333;">
    <p style="margin:0; font-size:14px; color:#bbb;">
      <strong>Your Message:</strong><br>
      "${message}"
    </p>
  </div>

  <p style="margin-top:28px; font-size:15px; color:#ccc;">
    – The BrightHawk Team
  </p>

  <hr style="border:0; border-top:1px solid #333; margin:30px 0;"/>

  <div style="font-size:13px; color:#888; text-align:center;">
    <p>BrightHawk Infotech</p>
    <p>East Wing, Office No.-120, Aurora Tower, MG Road, Camp, Pune - 411001</p>
    <p>Email: brighthawkinfotech@gmail.com</p>
    <p>Phone: +91 9370320860</p>
  </div>

</div>
`;

    /* ===========================================================
       OWNER NOTIFICATION TEMPLATE (sent to YOU)
    ============================================================ */

    const ownerHtml = `
<div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0a0a0a; color: #e5e5e5;">

  <div style="text-align:center; margin-bottom:20px;">
    <img src="https://yourwebsite.com/images/logo.png" 
         alt="BrightHawk Logo" style="width:150px; max-width:80%;" />
  </div>

  <h2 style="color:#ff7a1a; margin-bottom:10px;">New Contact Form Submission</h2>

  <p style="font-size:15px; line-height:1.6;">
    You have received a new contact request from your website.
  </p>

  <div style="margin-top:20px; padding:18px; background:#111; border-radius:10px; border:1px solid #333;">
    <p style="margin:8px 0; font-size:14px;"><strong>Name:</strong> ${name}</p>
    <p style="margin:8px 0; font-size:14px;"><strong>Email:</strong> ${email}</p>
    <p style="margin:8px 0; font-size:14px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p style="margin:8px 0; font-size:14px;"><strong>Message:</strong><br>${message}</p>
  </div>

  <p style="margin-top:24px; font-size:14px;">
    Please respond to the user as soon as possible.
  </p>

  <hr style="border:0; border-top:1px solid #333; margin:30px 0;" />

  <p style="font-size:13px; text-align:center; color:#777;">
    BrightHawk – Modern Technology Solutions for Startups & Businesses
  </p>

</div>
`;

    /* ===========================================================
       SEND EMAILS
    ============================================================ */

    // Send to CUSTOMER
    await transporter.sendMail({
      from: `"BrightHawk" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting BrightHawk!",
      html: autoReplyHtml,
    });

    // Send to OWNER
    await transporter.sendMail({
      from: `"BrightHawk Website" <${process.env.MAIL_USER}>`,
      to: "brighthawkinfotech@gmail.com",
      subject: "New Contact Form Submission",
      html: ownerHtml,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
