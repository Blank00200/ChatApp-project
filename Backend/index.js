import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
import cookieParser from 'cookie-parser';

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cookieParser());
app.use(cors());

// MongoDB Connection
const PORT = process.env.PORT || 3000;
const URI = process.env.Mongo_URI;

mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
