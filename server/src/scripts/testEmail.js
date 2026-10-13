import dotenv from 'dotenv';
dotenv.config();

import {
  getSMTPConfig,
  verifySMTPConnection,
  sendContactEmail
} from '../services/emailService.js';

async function runDiagnostic() {
  console.log('====================================================');
  console.log('   PORTFOLIO SMTP & EMAIL DELIVERY DIAGNOSTIC TEST   ');
  console.log('====================================================');

  const config = getSMTPConfig();
  console.log(`[Config Check] SMTP_HOST:               ${config.host}`);
  console.log(`[Config Check] SMTP_PORT:               ${config.port}`);
  console.log(`[Config Check] SMTP_SECURE:             ${config.isSecure}`);
  console.log(`[Config Check] SMTP_USER:               ${config.user ? config.user : '(NOT CONFIGURED)'}`);
  console.log(`[Config Check] SMTP_PASS:               ${config.pass ? '******** (configured)' : '(NOT CONFIGURED)'}`);
  console.log(`[Config Check] CONTACT_RECEIVER_EMAIL:  ${config.recipient}`);
  console.log('----------------------------------------------------');

  if (!config.isConfigured) {
    console.error('[Result] ERROR: SMTP_USER and/or SMTP_PASS are missing.');
    console.error('Please configure your credentials in server/.env or hosting environment variables.');
    console.error('For Gmail, generate a 16-character Google App Password with 2-Step Verification.');
    process.exit(1);
  }

  console.log('[Step 1] Verifying connection to SMTP host...');
  const verification = await verifySMTPConnection();

  if (!verification.verified) {
    console.error('[Result] Connection verification failed:');
    console.error(verification.message || verification.error);
    process.exit(1);
  }

  console.log('[Step 2] Sending live test email to destination...');
  try {
    const result = await sendContactEmail({
      name: 'Diagnostic Suite',
      email: 'system-diagnostic@sivam.dev',
      subject: 'Portfolio SMTP Verification Test',
      message:
        'This is an automated test verifying that your portfolio SMTP delivery pipeline is working and messages are successfully accepted by your mail provider.'
    });

    console.log('----------------------------------------------------');
    console.log('[Result] SUCCESS! The email provider accepted the message.');
    console.log(`[Provider Details] Message ID: ${result.messageId}`);
    console.log(`[Provider Details] Accepted by Provider: ${JSON.stringify(result.accepted)}`);
    console.log(`[Inbox Verification] Please check your inbox at: ${config.recipient}`);
    console.log('(Remember to check your Spam/Junk folder if not in Primary inbox)');
    console.log('====================================================');
    process.exit(0);
  } catch (err) {
    console.error('[Result] FAILED: Provider rejected sending:');
    console.error(err.message);
    process.exit(1);
  }
}

runDiagnostic();
