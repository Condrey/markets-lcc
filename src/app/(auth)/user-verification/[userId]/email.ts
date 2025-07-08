import { webName } from "@/lib/utils";
import { sendMail } from "../../(email)/nodemailer";

export const sendEmailVerificationLink = async ({
  email,
  token,
}: {
  email: string;
  token: string;
}) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/email-verification/" + token;
  const subject = "Email Verification Link";
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Admin Email - Market Management</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@400;600;700&display=swap');

    body {
      font-family: 'Raleway', Arial, sans-serif;
      background: linear-gradient(135deg, #f4f4f4 0%, #e0e7ff 100%);
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 700px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      border-left: 5px solid #f59e0b;
    }
    h1 {
      font-family: 'Pacifico', cursive;
      color: #f59e0b;
      font-size: 2.8em;
      text-align: center;
      margin-bottom: 25px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
    p {
      font-size: 1.15em;
      line-height: 1.7;
      color: #333333;
      margin-bottom: 20px;
      font-weight: 400;
    }
    .features {
      margin-top: 25px;
      padding: 20px;
      background-color: #fff8e1;
      border-radius: 10px;
    }
    .feature-item {
      font-size: 1.1em;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    .feature-item:before {
      content: "🔒";
      margin-right: 12px;
      font-size: 1.3em;
    }
    .cta-button {
      display: inline-block;
      margin: 30px auto;
      text-align: center;
      padding: 16px 35px;
      background: linear-gradient(45deg, #f59e0b, #fbbf24);
      color: #ffffff;
      text-decoration: none;
      border-radius: 30px;
      font-weight: 700;
      font-family: 'Raleway', sans-serif;
      font-size: 1.25em;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
      display: block;
      width: fit-content;
    }
    .cta-button:hover {
      background: linear-gradient(45deg, #a89f8d, #d4d3cf);
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      font-size: 0.9em;
      color: #555555;
      font-weight: 400;
    }
    a {
      color: #f59e0b;
      text-decoration: none;
      font-weight: 700;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #a89f8d;
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .container {
        padding: 20px;
        margin: 20px;
      }
      h1 {
        font-size: 2.2em;
      }
      .cta-button {
        padding: 12px 25px;
        font-size: 1.1em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Verify Your Admin Email!</h1>
    <p>Greetings,</p>
    <p>Welcome to the Market Management admin team! Secure your admin account and unlock full access to oversee payments, stall documents, and vendor communications. Simply click the link below to verify your email address and ensure your account is protected.</p>
    <div class="features">
      <div class="feature-item">Secure your admin access with email verification.</div>
      <div class="feature-item">Gain full control over market operations.</div>
      <div class="feature-item">Manage confidently in a protected environment.</div>
    </div>
    <p>Click the button below to confirm your email and take charge of your admin command center. Let’s make market management secure and effortless!</p>
    <a href="${url}" class="cta-button">Verify My Email</a>
    <div class="footer">
      <p>Best regards,</p>
      <p><strong>${webName} Management Team</strong></p>
      <p style="margin-top:10px;">P.S. If you did not request for this or interact with our system, please <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact">contact us</a>.</p>
      <p>© 2025 Market Management. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
  try {
    await sendMail(email, {
      subject,
      html: htmlContent,
      replyTo: "@noreply.com",
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send verification link.");
  }
};
