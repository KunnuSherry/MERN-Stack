import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Label } from './ui/label'
import { Button } from './ui/button'
import {useDispatch, useSelector} from 'react-redux'
import { USER_API_ENDPOINT } from '../utils/constant'
import axios from 'axios';
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react';
import { setUser } from '../redux/authSlice.js'


const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const {user} = useSelector(store=>store.auth);

    const [input, setInput] = useState({
        fullname:user?.fullname,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill=>skill),
        file:user?.profile?.resume
    });

    const changeeventHandler = (e) =>{
        setInput({...input, [e.target.name]:e.target.value})
    }

    const dispatch = useDispatch();

    const submitHandler= async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("bio", input.bio)
        formData.append("skills", input.skills)
        if(input.file){
            formData.append("file", input.file);
        }
        try{
            const res = await axios.post(`${USER_API_ENDPOINT}/profile/update`, formData,{
                header:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials:true
            });
            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch(e){
            toast.error(e.response.data.message)
        }
        finally{
            setOpen(false)
        }
    }

    const fileChangeHandler = (e) =>{
        const file = e.target.files?.[0]
        setInput({...input, file})
    }
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className='bg-white sm:max-w-[425px]' onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='name' className='text-right'>Name</Label>
                            <input onChange={changeeventHandler} value={input.fullname} id='name' name='fullname' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='email' className='text-right'>email</Label>
                            <input onChange={changeeventHandler} value={input.email} id='email' name='email' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='number' className='text-right'>number</Label>
                            <input onChange={changeeventHandler} value={input.phoneNumber} id='number' name='phoneNumber' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='bio' className='text-right'>bio</Label>
                            <input onChange={changeeventHandler} value={input.bio} id='bio' name='bio' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='skills' className='text-right'>skills</Label>
                            <input onChange={changeeventHandler} value={input.skills} id='skills' name='skills' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='file' className='text-right'>Resume</Label>
                            <input onChange={fileChangeHandler} type='file' accept='application/pdf' id='file' name='file' className=' p-2 col-span-3 border-2 border-black rounded-xl'>

                            </input>
                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button className="bg-black text-white w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="bg-black text-white w-full my-4">Update</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog