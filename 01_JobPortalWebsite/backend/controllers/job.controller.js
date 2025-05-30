import { Job } from "../models/jobModel.js";

export const postJob = async(req, res)=>{
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        const userId = req.id;  
        
        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message: 'Something is missing',
                success: false
            })
        };
        const job = await Job.create({
            title, 
            description, 
            requirements: requirements.split(","), 
            salary: Number(salary), 
            location, 
            jobType, 
            experienceLevel: experience, 
            position, 
            company: companyId,
            createdBy: userId
        })
        return res.status(201).json({
                message: 'New Job Created Successfully',
                job,
                success: true
        })
    } catch (error) { 
        console.log(error);
        
    }
}

export const getAllJobs = async(req, res)=>{
    try {
        const keywords = req.query.keyword || "";
        const query = {
            $or:[
                {title: {$regex:keywords, $options:"i"}},
                {description: {$regex:keywords, $options:"i"}},
            ]
        };
        const jobs = await Job.find(query);
        if(!jobs){
            return res.status(404).json({
                message: 'Jobs not found',
                success: false
            });
        }
        return res.status(201).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}

// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}

// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ createdBy: adminId });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}