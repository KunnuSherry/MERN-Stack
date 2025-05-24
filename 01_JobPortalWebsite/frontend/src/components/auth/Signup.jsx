import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx'
import { RadioGroupItem, RadioGroup } from '../ui/radio-group.jsx'
import { Button } from '../ui/button.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_ENDPOINT } from '../../utils/constant.js'
import { toast } from 'sonner'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice.js'

const Signup = () => {

    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        role: "",
        password: "",
        file: ""

    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("role", input.role);
        formData.append("password", input.password);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login")
            }
            else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)

        } finally{
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-100 mx-auto border-2 border-indigo-600 py-10 rounded-3xl shadow-2xl shadow-neutral-950'>
                <form onSubmit={submitHandler} action="" className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-3xl mb-5'>Sign Up</h1>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                            id="fullname"
                            type="text"
                            placeholder="Enter your full name"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="Enter your Phone Number"

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
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
                                    checked={input.role === 'Student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    checked={input.role === 'Recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <Label htmlFor="profile">Profile</Label>
                        <Input
                            id="profile"
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className="cursor-pointer w-50"
                        />
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /></Button> :
                            <Button type="submit" className="bg-[#6a39c2] hover:bg-[#342849] text-white w-full" >Signup</Button>

                    }
                    <span>Already have an account? <Link to="/login" className="text-blue-400" >Login</Link></span>

                </form>
            </div>

        </div>
    )
}

export default Signup