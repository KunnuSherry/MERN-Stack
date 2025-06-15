import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Label } from './ui/label'
import { Button } from './ui/button'


const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className='bg-white sm:max-w-[425px]' onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>
                    <form action="">
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='name' className='text-right'>Name</Label>
                            <input id='name' name='name' className='col-span-3 border-2 border-black rounded-2xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='email' className='text-right'>email</Label>
                            <input id='email' name='email' className='col-span-3 border-2 border-black rounded-2xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='number' className='text-right'>number</Label>
                            <input id='number' name='number' className='col-span-3 border-2 border-black rounded-2xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='skills' className='text-right'>skills</Label>
                            <input id='skills' name='skills' className='col-span-3 border-2 border-black rounded-2xl'>

                            </input>
                        </div>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor='file' className='text-right'>Resume</Label>
                            <input type='file' accept='application/pdf' id='file' name='file' className='col-span-3 border-2 border-black rounded-2xl'>

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