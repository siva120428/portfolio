import nodemailer from 'nodemailer';

/**
 * Retrieve and normalize SMTP configuration from environment variables.
 * Sensitive values are kept secure and never logged directly.
 */
export const getSMTPConfig = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER ? process.env.SMTP_USER.trim() : '';
  const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.trim() : '';
  const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

  // Destination address: prioritized from CONTACT_RECEIVER_EMAIL / CONTACT_RECIPIENT_EMAIL
  const recipient = (
    process.env.CONTACT_RECEIVER_EMAIL ||
    process.env.CONTACT_RECIPIENT_EMAIL ||
    'manikounder1984@gmail.com'
  ).trim();

  // Authenticated sender address: matches authenticated user or configured domain email
  const fromEmail = (process.env.SMTP_FROM_EMAIL || user || recipient).trim();

  const isConfigured = Boolean(user && pass);

  return {
    host,
    port,
    user,
    pass,
    isSecure,
    recipient,
    fromEmail,
    isConfigured
  };
};

/**
 * Initialize a Nodemailer transporter instance.
 */
export const createTransporter = () => {
  const { host, port, user, pass, isSecure, isConfigured } = getSMTPConfig();

  if (!isConfigured) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production'
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
  });
};

/**
 * Startup and on-demand SMTP configuration & connectivity verification.
 * Diagnoses whether host, port, and authentication are working without printing secrets.
 */
export const verifySMTPConnection = async () => {
  const { host, port, user, recipient, isConfigured } = getSMTPConfig();

  if (!isConfigured) {
    console.warn(
      `[SMTP Notice] SMTP credentials (SMTP_USER / SMTP_PASS) are not configured. The contact form is active in fallback mode (code: SMTP_NOT_CONFIGURED). Destination address is set to: ${recipient}.`
    );
    return {
      configured: false,
      verified: false,
      code: 'SMTP_NOT_CONFIGURED',
      message: 'SMTP_USER and/or SMTP_PASS are missing in environment variables.'
    };
  }

  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log(
      `[SMTP Verified] Connection successfully verified to ${host}:${port}. Authenticated as ${user}. Ready to deliver messages to ${recipient}.`
    );
    return {
      configured: true,
      verified: true,
      host,
      port,
      user,
      recipient
    };
  } catch (err) {
    console.error(
      `[SMTP Error] Verification failed for ${host}:${port} (Account: ${user}): ${err.message}`
    );
    return {
      configured: true,
      verified: false,
      code: err.code || 'VERIFICATION_FAILED',
      message: err.message
    };
  }
};

/**
 * Send contact inquiry message via authenticated SMTP provider.
 * Strictly verifies provider acceptance before resolving.
 */
export const sendContactEmail = async ({ name, email, subject, message }) => {
  const { host, port, user, pass, recipient, fromEmail, isConfigured } = getSMTPConfig();

  // 1. Strict Configuration Verification
  // Never fake success or simulate delivery. If credentials are missing, throw 503.
  if (!isConfigured) {
    const error = new Error(
      `Email service is not configured on this server. SMTP_USER and SMTP_PASS environment variables are required to transmit messages to ${recipient}.`
    );
    error.statusCode = 503;
    error.isConfigurationError = true;
    error.code = 'SMTP_NOT_CONFIGURED';
    throw error;
  }

  const transporter = createTransporter();
  if (!transporter) {
    const error = new Error('Failed to initialize SMTP transporter.');
    error.statusCode = 500;
    throw error;
  }

  // 2. Compose Email with validated Reply-To Header
  const safeName = escapeHeader(name);
  const safeSubject = escapeHeader(subject);

  const mailOptions = {
    from: `"${safeName} via Portfolio" <${fromEmail}>`,
    to: recipient,
    replyTo: `"${safeName}" <${email}>`,
    subject: `[Portfolio Inquiry] ${safeSubject}`,
    text: `You have received a new contact inquiry from your portfolio website:

Sender Name:    ${name}
Sender Email:   ${email}
Subject:        ${subject}
Destination:    ${recipient}

Message Content:
${message}

--------------------------------------------------
To reply directly to the visitor, click "Reply" in your email client.
Reply-To is configured directly to ${email}.`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #137F83; border-radius: 12px; background-color: #07090D; color: #F8FAFC;">
        <div style="border-bottom: 1px solid rgba(0, 214, 201, 0.25); padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #00D6C9; margin: 0 0 4px 0; font-size: 20px;">New Portfolio Message</h2>
          <p style="margin: 0; color: #94A3B8; font-size: 12px;">Delivered to ${escapeHtml(recipient)} via Verified Portfolio Dispatch</p>
        </div>
        <div style="background-color: #0D1117; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94A3B8;">Sender:</strong> <span style="color: #F8FAFC;">${escapeHtml(name)}</span></p>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94A3B8;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #00D6C9; text-decoration: none;">${escapeHtml(email)}</a></p>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94A3B8;">Subject:</strong> <span style="color: #F8FAFC;">${escapeHtml(subject)}</span></p>
        </div>
        <div style="margin-top: 16px; padding: 18px; background-color: #0D1117; border-left: 3px solid #00D6C9; border-radius: 4px;">
          <div style="font-size: 11px; text-transform: uppercase; color: #00D6C9; font-weight: 600; letter-spacing: 1px; margin-bottom: 8px;">Message Content</div>
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #E2E8F0; font-size: 14px;">${escapeHtml(message)}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 11px; color: #94A3B8;">
          Reply-To is configured directly to <strong>${escapeHtml(email)}</strong>.
        </div>
      </div>
    `
  };

  // 3. Send and Verify Acceptance
  const info = await transporter.sendMail(mailOptions);

  // 4. Verify that the provider accepted the delivery
  if (!info || !info.messageId || !info.accepted || info.accepted.length === 0) {
    const error = new Error('The email service provider did not accept the message for delivery.');
    error.statusCode = 502;
    error.code = 'PROVIDER_REJECTED';
    throw error;
  }

  // Safe diagnostic log without leaking message body or secrets
  console.log(`[Email Dispatch] Success: messageId=${info.messageId}, accepted=${JSON.stringify(info.accepted)}`);

  return {
    success: true,
    messageId: info.messageId,
    accepted: info.accepted,
    response: info.response
  };
};

function escapeHeader(val) {
  return String(val || '').replace(/[\r\n]/g, ' ').trim();
}

function escapeHtml(string) {
  return String(string || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
