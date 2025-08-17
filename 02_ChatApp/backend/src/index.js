import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./utils/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express();
const PORT = process.env.PORT

// Increase body parser limits for image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser())
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true, // Allow cookies to be sent with requests
    }
))

app.get('/', (req, res) => {
    res.json({ message: "Hi There you landed right !" });
});


app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);

})