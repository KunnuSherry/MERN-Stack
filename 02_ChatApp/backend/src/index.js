import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import {connectDB} from "./utils/db.js"
dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
    
})