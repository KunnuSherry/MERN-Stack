import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./utils/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server } from "./utils/socket.js"

import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const PORT = process.env.PORT

// Increase body parser limits for image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser())
app.use(cors(
    {
        origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "http://localhost:5173",
        credentials: true, // Allow cookies to be sent with requests
    }
))

app.get('/', (req, res) => {
    res.json({ message: "Hi There you landed right !" });
});


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

if (process.env.VERCEL !== "1") {
    server.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on port ${PORT}`);
    });
}