import rateLimit from 'express-rate-limit';

// Limit contact form submissions: max 5 requests per 15 minutes per IP
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages submitted from this IP address. Please try again after 15 minutes or send an email directly to manikounder1984@gmail.com.'
  }
});

// General API rate limiter: max 100 requests per 15 minutes
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});
