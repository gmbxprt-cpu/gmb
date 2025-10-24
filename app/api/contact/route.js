import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, contact, gmbLink, interest, other, token } = await request.json();

    // Step 1: Check reCAPTCHA token
    if (!token) {
      return new Response(JSON.stringify({ success: false, message: "Missing reCAPTCHA token" }), {
        status: 400,
      });
    }

    // Step 2: Verify with Google reCAPTCHA API
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const verification = await verifyResponse.json();

    if (!verification.success) {
      return new Response(JSON.stringify({ success: false, message: "reCAPTCHA verification failed" }), {
        status: 400,
      });
    }

    // Step 3: Send email (only if reCAPTCHA passed)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `GMB Expert Form <${process.env.SMTP_USER}>`,
      to: "gmbxprt@gmail.com",
      subject: `New GMB Expert Inquiry from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>GMB Profile Link:</strong> <a href="${gmbLink}">${gmbLink}</a></p>
        <p><strong>Interested In:</strong> ${interest}</p>
        ${other ? `<p><strong>Other Details:</strong> ${other}</p>` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form route:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
