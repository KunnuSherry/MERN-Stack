import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['Student', 'Recruiter'],
        required:true,
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, //Establishing the relation between two scehmas
        profilePhoto:{
            type:String,
            default:""
        }
    }
}, {timestamps:true});

export const User = mongoose.model('User', UserSchema);