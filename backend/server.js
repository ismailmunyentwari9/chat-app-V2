import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() to access environment variables.
const PORT = process.env.PORT || 5000;

// MongoDB connection function
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cyusa:xsgKeKc9c9R9dbA0@cluster0.fwbca.mongodb.net/alu-chat",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cookieParser());

// Define API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Handle SPA routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
server.listen(PORT, async () => {
  await connectToMongoDB(); // Connect to MongoDB before starting the server
  console.log(`Server Running on port ${PORT}`);
});
