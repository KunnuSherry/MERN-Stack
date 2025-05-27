import React from 'react'
import { Bookmark } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-600'>2 days ago</p>
                <Button variant="outline" className="rounded-full" ><Bookmark /></Button>
            </div>

            <div className='flex'></div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon" >
                    <Avatar>
                        <AvatarImage src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1>Company Name</h1>
                    <p>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur similique autem eveniet ea natus vel iusto? Vel, et repellendus!</p>
            </div>
            <div className='flex items-center gap-3 '>
                <Badge className="text-blue-700 font-bold bg-blue-100 hover:bg-blue-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-in-left" variant="ghost">                    12 Positions
                </Badge>
                <Badge className="text-[#f83002] font-bold bg-red-100 hover:bg-red-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-100 animate-slide-in-up" variant="ghost">
                    Part Time
                </Badge>
                <Badge className="text-[#7209b7] font-bold bg-purple-100 hover:bg-purple-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 delay-200 animate-slide-in-right" variant="ghost">
                    24 LPA
                </Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline" >
                    Details
                </Button>
                <Button className="bg-[#7209b7] text-white">
                    Save for Later
                </Button>
            </div>
        </div>
    )
}

export default Job