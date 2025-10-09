import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, contact, gmbLink, interest, other } = await request.json();

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
      // 👇 Receiving email is now written directly here
      to: 'gmbxprt@gmail.com', 
      subject: `New GMB Expert Inquiry from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>GMB Profile Link:</strong> <a href="${gmbLink}">${gmbLink}</a></p>
        <p><strong>Interested In:</strong> ${interest}</p>
        ${other ? `<p><strong>Other Details:</strong> ${other}</p>` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), { status: 500 });
  }
}
