import { Router } from 'express';
import mongoose from 'mongoose';
import { getSMTPConfig } from '../services/emailService.js';

const router = Router();

router.get('/health', (req, res) => {
  const { isConfigured, host, port, recipient } = getSMTPConfig();
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    database: mongoose.connection?.readyState === 1 ? 'connected' : 'disconnected/optional',
    smtp: {
      configured: isConfigured,
      host,
      port,
      receiver: recipient
    },
    service: 'Siva M Portfolio API'
  });
});

export default router;
