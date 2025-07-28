import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import path from "path";

//const app=express(); // start server
const PORT = process.env.PORT || 5000; //either 5000 or PORT 8000

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); //middleware(to parse the incoming req with json payloads)  //this will help in extracting the fields from req.body in auth.controller
app.use(cookieParser());

app.use("/api/auth", authRoutes); // whenever we will go to /api/auth we will go to authRoutes //middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
}); //it makes listening on port 5000
