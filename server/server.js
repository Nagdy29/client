import express, { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import clerWebhooks from './Controll/Clerksign.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
dotenv.config();
app.use(json());
app.use(cors());
app.use(clerkMiddleware())

// MongoDB Connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


// Routes (مثال بسيط)
app.get('/', (req, res) => {
  res.send('🚀 Server is running on port 4000!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

//  api clerek
app.use("/api/clerk", clerWebhooks)
