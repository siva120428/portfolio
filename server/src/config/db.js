import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!uri) {
    console.log('[Database] No MONGO_URI provided. Database logging is skipped (in-memory mode).');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (err) {
    console.error(`[Database Warning] MongoDB connection error: ${err.message}. Continuing without persistent DB logging.`);
    return false;
  }
};
