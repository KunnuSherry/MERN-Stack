import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Button } from "../ui/button.jsx";
import { Avatar, AvatarImage } from "../ui/avatar.jsx"
import { User2, LogOut } from "lucide-react"


const Navbar = () => {

    const user = false


    return (
        <div className='bg-white w-full px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job<span className='text-[#f83002]'>Portal</span>
                    </h1>
                </div>

                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link>Browse</Link></li>
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button className="bg-[#6a39c2] hover:bg-[#342849] text-white" variant='outline'>Login</Button></Link>
                                <Link to="/signup"><Button>Signup</Button></Link>

                            </div>
                        ) :
                    (

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 flex flex-col gap-4">
                            <div className='flex items-center gap-2'>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>Kunal Sharma</h4>
                                    <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className='flex gap-3 text-gray-600'>
                                <div className='flex items-center'>
                                    <User2 />
                                    <Button className='cursor-pointer' variant='link'>View Profile</Button>
                                </div>
                                <div className='flex items-center'>
                                    <LogOut />
                                    <Button className='cursor-pointer text-red-500' variant='link'>Logout</Button>
                                </div>

                            </div>

                        </PopoverContent>
                    </Popover>
                    )           
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar