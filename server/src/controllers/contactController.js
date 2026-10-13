import { validateContactInput } from '../validators/contactValidator.js';
import { sendContactEmail } from '../services/emailService.js';
import { ContactMessage } from '../models/ContactMessage.js';
import mongoose from 'mongoose';

export const handleContactSubmit = async (req, res, next) => {
  try {
    // 1. Strict input validation
    const { isValid, errors, sanitized } = validateContactInput(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: errors[0],
        errors
      });
    }

    // 2. Try storing message to MongoDB if database connected
    let savedRecord = null;
    if (mongoose.connection.readyState === 1) {
      try {
        savedRecord = await ContactMessage.create({
          ...sanitized,
          ipAddress: req.ip || req.connection.remoteAddress || ''
        });
      } catch (dbErr) {
        console.warn(`[Contact DB Warning] Could not store message in MongoDB: ${dbErr.message}`);
      }
    }

    // 3. Dispatch email via Nodemailer and wait for verified provider acceptance
    const result = await sendContactEmail(sanitized);

    // 4. Update status if MongoDB record was created
    if (savedRecord) {
      savedRecord.status = 'delivered';
      await savedRecord.save().catch(() => {});
    }

    // 5. Return success only after verified acceptance by the email provider
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been accepted by the email service and sent to manikounder1984@gmail.com.',
      providerConfirmed: true,
      messageId: result.messageId,
      accepted: result.accepted
    });
  } catch (error) {
    next(error);
  }
};
