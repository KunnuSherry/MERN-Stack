import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { generateToken } from "../utils/utils.js";
export const signup=async(req,res)=>{
    const {fullName, email, password} = req.body;
    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message: "Fill all the fields"})
        }
        if(password.length<6){
            return res.status(400).json({ message: "Password must be atleast 6 characters."});
        }
        const user = await User.findOne({email})
        if(user) return res.status(400).json({message: "Email already exists"})
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })
        if(newUser){
            generateToken(newUser._id, res)
            await newUser.save();
            return res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            return res.status(400).json({message: "Something went wrong ..."});
        }


    } catch (error) {
        console.log("Error in signup...")
        return res.status(500).json({message:"There is some catch error"})
    }
}
export const login= async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid Credentails"})
        }
        generateToken(user._id, res)

        res.status(200).json({
            id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic

        })
    } catch (error) {
        res.status(400).json({message : "Internal Server Error"})
    }
}
export const logout=(req,res)=>{
    try {
        res.cookie["jwt","",{maxAge:0}]
        res.status(200).json({ message: "Logged Out Successfully !"});
    } catch (error) {
        res.status(400).json({message : "Internal Server Error"})
    }
}


export const updateProfile=async(req,res)=>{
    
}