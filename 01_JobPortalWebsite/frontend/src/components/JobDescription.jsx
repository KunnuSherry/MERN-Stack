import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = true;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl'>Title</h1>
            <div className='flex items-center gap-10 justify-between'>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className="text-blue-700 font-bold bg-blue-100 hover:bg-blue-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-in-left" variant="ghost">                    12 Positions
                    </Badge>
                    <Badge className="text-[#f83002] font-bold bg-red-100 hover:bg-red-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-100 animate-slide-in-up" variant="ghost">
                        Part Time
                    </Badge>
                    <Badge className="text-[#7209b7] font-bold bg-purple-100 hover:bg-purple-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-200 animate-slide-in-right" variant="ghost">
                        24 LPA
                    </Badge>
                </div>
                <Button className={
                    isApplied ? "bg-green-200 text-black cursor-not-allowed" : "bg-black text-white cursor-pointer"
                } disabled={
                    isApplied ? true : false
                }>
                    {
                        isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>

            </div>
            <h1 className='vorder-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div>
                <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal'>Frontend Developer</span></h1>
            </div>

        </div>
    )
}

export default JobDescription