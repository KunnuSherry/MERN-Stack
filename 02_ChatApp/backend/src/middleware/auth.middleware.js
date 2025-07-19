import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute=async(req, res, next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({ message: "Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            res.status(401).json({ message: "Invalid Token"})
        }
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(401).json({ message: "No User Found"})
        }
        req.user = user
        next()
    }
    catch(error){
        res.status(500).json({ message: "Internal Error"})
    }
}