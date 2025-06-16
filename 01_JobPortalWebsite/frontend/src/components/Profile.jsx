import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Pen, Mail, Contact } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobsTable from './profile/AppliedJobsTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

const isResume = true;
const skills = []
const Profile = () => {
    const {user} = useSelector(store=>store.auth)
    const[open,setOpen] = useState(false);

    if (!user) return null; // or a loader

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-5'>
                <div className='flex justify-between items-center'>
                    {/* Left side: Avatar + Name + Description */}
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user.fullname}</h1>
                            <p>{user.profile.bio}</p>
                        </div>
                    </div>

                    {/* Right side: Edit button */}
                    <Button onClick={()=>setOpen(true)} variant="outline">
                        <Pen className="h-5 w-5" />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3'>
                        <Mail />
                        <span>{user.email}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>{user.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-3 my-5'>
                        {
                            user.profile.skills.length != 0 ? user.profile.skills.map((item, index) => <Badge className="rounded-full bg-black text-white" key={index}>{item}</Badge>) : (<h1>NA</h1>)
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a className='text-blue-500 w-full hover:underline' href="https://youtube.com/kunnusherry" target='blank'>KunnuSherry</a> : (<h1>NA</h1>)
                    }
                </div>

            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Application Table */}
                <AppliedJobsTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Profile;
