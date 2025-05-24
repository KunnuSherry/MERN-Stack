import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx'
import { RadioGroupItem, RadioGroup } from '../ui/radio-group.jsx'
import {Button} from '../ui/button.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'sonner'
import { USER_API_ENDPOINT } from '../../utils/constant.js'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice.js'
import { Loader2 } from 'lucide-react'


const Login = () => {
    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
            email:"",
            password:"",
            role:"",    
        })
    
        const changeEventHandler = (e) =>{
            setInput({...input, [e.target.name]:e.target.value})
        }
    
        const submitHandler = async(e) =>{
            e.preventDefault();
            try {
                dispatch(setLoading(true));
                const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                })
                if(res.data.success){
                    toast.success(res.data.message);
                    navigate("/")
                }
                else{
                    toast.error(res.data.message)
                }
            } catch (error) {
                toast.error(error)
                
            }  finally{
                dispatch(setLoading(false));
            }       
        }
    return (
        <div>
            <Navbar />
            
            <div className='flex items-center justify-center max-w-100 mx-auto border-2 border-indigo-600 py-10 rounded-3xl shadow-2xl shadow-neutral-950'>
                <form onSubmit={submitHandler} action="" className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-3xl mb-5'>Login</h1>
                    
                    <div className='flex flex-col gap-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Password</Label>
                        <Input
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
                                    checked={input.role==='Student'}
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
                                    checked={input.role==='Recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/></Button>:
                            <Button type="submit" className="bg-[#6a39c2] hover:bg-[#342849] text-white w-full" >Login</Button>

                        }
                        <span>Do not have an account? <Link to="/signup" className="text-blue-400" >Signup</Link></span>
                    
                </form>
            </div>

        </div>
    )
}

export default Login