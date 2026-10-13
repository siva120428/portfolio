export const validateContactInput = (body) => {
  const errors = [];
  const { name, email, subject, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name is required.');
  } else if (name.trim().length > 100) {
    errors.push('Name cannot exceed 100 characters.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required.');
  } else if (email.trim().length > 120) {
    errors.push('Email cannot exceed 120 characters.');
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    errors.push('Subject is required.');
  } else if (subject.trim().length > 150) {
    errors.push('Subject cannot exceed 150 characters.');
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.push('Message is required.');
  } else if (message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long.');
  } else if (message.trim().length > 2000) {
    errors.push('Message cannot exceed 2000 characters.');
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      name: name ? name.trim() : '',
      email: email ? email.trim().toLowerCase() : '',
      subject: subject ? subject.trim() : '',
      message: message ? message.trim() : ''
    }
  };
};
