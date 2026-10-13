import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { verifySMTPConnection } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Connect to Database if URI available
connectDB();

const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim());

// Security Middleware
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman, or server-to-server)
      if (!origin) return callback(null, true);

      // Check configured origins or localhost or vercel previews
      if (
        allowedOrigins.includes(origin) ||
        origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:') ||
        origin.endsWith('.vercel.app')
      ) {
        callback(null, true);
      } else {
        // Log unauthorized origin in production for diagnosis
        console.warn(`[CORS] Blocked request from unauthorized origin: ${origin}`);
        callback(new Error(`CORS policy does not allow access from origin ${origin}`));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body Parsers
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// General Rate Limiter
app.use('/api', generalLimiter);

// API Routes
app.use('/api', healthRoutes);
app.use('/api', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Siva M Portfolio Backend API is running.',
    healthCheck: '/api/health'
  });
});

// Centralized Error Handling
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`[Server] Portfolio backend running on port ${PORT} (Environment: ${process.env.NODE_ENV || 'development'})`);
  // Validate SMTP configuration on startup (never prints secrets)
  await verifySMTPConnection();
});

export default app;
