import mongoose from 'mongoose';

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000
    },
    ipAddress: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['delivered', 'queued', 'failed'],
      default: 'delivered'
    }
  },
  {
    timestamps: true
  }
);

export const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);
