export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  // Safe user-friendly message without leaking credentials or stack traces
  let message = err.message || 'An unexpected internal error occurred.';

  if (err.isConfigurationError || err.code === 'SMTP_NOT_CONFIGURED') {
    message = 'Email service is currently offline or not configured with SMTP credentials. Please contact directly at manikounder1984@gmail.com.';
  } else if (err.code === 'EAUTH' || err.responseCode === 535) {
    message = 'Email provider authentication failed. Please verify SMTP credentials or contact directly at manikounder1984@gmail.com.';
  } else if (err.code === 'ESOCKET' || err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED') {
    message = 'Unable to reach the email provider mail server. Please try again later or contact directly at manikounder1984@gmail.com.';
  } else if (statusCode === 500 && process.env.NODE_ENV === 'production') {
    message = 'A server error occurred while processing your message. Please reach out via direct email at manikounder1984@gmail.com.';
  }

  // Diagnostic log for server operators - never logs passwords or secrets
  console.error(`[Error] ${req.method} ${req.originalUrl} - Status: ${statusCode} - Code: ${err.code || 'N/A'} - ${err.message}`);

  res.status(statusCode).json({
    success: false,
    message,
    errorCode: err.code || (err.isConfigurationError ? 'SMTP_NOT_CONFIGURED' : 'INTERNAL_ERROR')
  });
};
