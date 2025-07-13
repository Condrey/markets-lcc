import { webName } from "@/lib/utils";
import { sendMail } from "../../(email)/nodemailer";
import { validateRequest } from "@/auth";
import { Role } from "@/app/generated/prisma";

export const sendWelcomeRemarksEmail = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  const { user } = await validateRequest();
  const isAdmin = !!user && user.role !== Role.USER;
  const organization = webName + " Management Team";
  const senderName = "Ogwang Coundrey James";
  const senderTitle = "I.T Support team";
  const subject = "Welcome remarks!";
  const htmlContent = !isAdmin
    ? `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Welcome to Market Management</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway&display=swap');

  body {
    font-family: 'Raleway', Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 700px;
    margin: 40px auto;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-family: 'Pacifico', cursive;
    color: #f59e0b; /* Will update below with primary color */
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.15em;
    line-height: 1.6;
    color: #444444;
    margin-bottom: 20px;
  }
  .features {
    margin-top: 20px;
  }
  .feature-item {
    font-size: 1.1em;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  .feature-item:before {
    content: "✨";
    margin-right: 10px;
    font-size: 1.2em;
  }
  .cta-button {
    display: inline-block;
    margin-top: 30px;
    padding: 14px 30px;
    background-color: #f59e0b; /* Primary color */
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    font-family: 'Raleway', cursive;
    font-size: 1.2em;
    transition: background-color 0.3s ease;
  }
  .cta-button:hover {
    background-color: #a89f8d;
  }
  .footer {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    color: #777777;
  }
  a {
    color: #f59e0b;
    text-decoration: underline;
    font-weight: bold ;
  }
</style>
</head>
<body>
  <div class="container">
    <h1 style="color: #f59e0b;">Welcome to Your Market Oasis!</h1>
    <p>Hey there, ${user?.name || "Superstar"}! </p>
    <p>We're beyond thrilled to have you join our vibrant community! Our platform is your new best friend—helping you effortlessly keep track of payments, taxes, rent, and your precious stall and space ownership documents. Plus, you'll get friendly notifications to keep you always in the loop.</p>
    <div class="features">
      <div class="feature-item">Seamlessly monitor your payments, taxes, and rent.</div>
      <div class="feature-item">Keep your stall & ownership documents beautifully organized.</div>
      <div class="feature-item">Stay updated with friendly notifications and alerts.</div>
    </div>
    <p>You're all set for a smoother, smarter market experience. Let's get started and make your management journey fun and fabulous!</p>
    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/login" class="cta-button">Let's Go!</a>
    <div class="footer">
      <p>Warmest wishes,</p>
      <p>${senderName}</p>
      <p>${senderTitle}</p>
      <p><strong>${organization}</strong></p>
      <p style="margin-top:10px;">P.S. If you need a hand or just want to say hi, <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact">reach out to us</a>. We're here for you!</p>
      <p>&copy; 2025 ${webName} Management. All rights reserved.</p>
    </div>
  </div>
</body>
</html>


`
    : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Market Management - Admin Portal</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway&display=swap');

    body {
      font-family: 'Raleway', Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 700px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    h1 {
      font-family: 'Pacifico', cursive;
      color: #f59e0b;
      font-size: 2.5em;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.15em;
      line-height: 1.6;
      color: #444444;
      margin-bottom: 20px;
    }
    .features {
      margin-top: 20px;
    }
    .feature-item {
      font-size: 1.1em;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }
    .feature-item:before {
      content: "🔑";
      margin-right: 10px;
      font-size: 1.2em;
    }
    .cta-button {
      display: inline-block;
      margin-top: 30px;
      padding: 14px 30px;
      background-color: #f59e0b;
      color: #ffffff;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      font-family: 'Raleway', sans-serif;
      font-size: 1.2em;
      transition: background-color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #a89f8d;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      font-size: 14px;
      color: #777777;
    }
    a {
      color: #f59e0b;
      text-decoration: underline;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 style="color: #f59e0b;">Welcome to Your Admin Command Center!</h1>
    <p>Greetings,${user.name || "Market Master, Assistant, or Market Agent"}!</p>
    <p>We're excited to have you take the helm of our market management platform. As an admin, you have the power to oversee operations, streamline processes, and ensure everything runs like clockwork. From managing payments and taxes to verifying stall ownership and sending critical notifications, this platform is your ultimate tool for market mastery.</p>
    <div class="features">
      <div class="feature-item">Effortlessly oversee payments, taxes, and rent collection.</div>
      <div class="feature-item">Manage and verify stall ownership documents with ease.</div>
      <div class="feature-item">Send targeted notifications and alerts to keep vendors informed.</div>
    </div>
    <p>Your role is pivotal in creating a thriving market environment. Dive in, take control, and make your management tasks seamless and efficient!</p>
    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/login?user=staff" class="cta-button">Take Charge Now!</a>
    <div class="footer">
      <p>Warmest wishes,</p>
      <p>${senderName}</p>
      <p>${senderTitle}</p>
      <p><strong>${organization}</strong></p>
      <p style="margin-top:10px;">P.S. If you need a hand or just want to say hi, <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact">reach out to us</a>. We're here for you!</p>
      <p>&copy; 2025 ${webName} Management. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;
  try {
    await sendMail(email, {
      subject,
      html: htmlContent,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send verification link.");
  }
};
