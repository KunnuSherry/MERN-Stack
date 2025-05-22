import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx'
import { RadioGroupItem, RadioGroup } from '../ui/radio-group.jsx'
import {Button} from '../ui/button.jsx'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-100 mx-auto border-2 border-indigo-600 py-10 rounded-3xl shadow-2xl shadow-neutral-950'>
                <form action="" className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-3xl mb-5'>Sign Up</h1>
                    <div className='flex flex-col gap-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="Enter your Phone Number"

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <RadioGroup defaultValue="option-one" className="flex items-center gap-4">
                            <div className="flex items-center space-x-2">
                                <Input  
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input  
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                        <div className='flex gap-2 flex-col'>
                            <Label>Profile</Label>
                            <Input 
                                accept="image/*"
                                type="file"
                                className="cursor-pointer w-50"
                            />
                        </div>
                        <Button type="submit" className="bg-[#6a39c2] hover:bg-[#342849] text-white w-full" >Signup</Button>
                        <span>Already have an account? <Link to="/login" className="text-blue-400" >Login</Link></span>
                    
                </form>
            </div>

        </div>
    )
}

export default Signup