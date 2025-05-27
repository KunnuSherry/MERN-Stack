import React from 'react'
import Navbar from './shared/Navbar'
import Filtercard from './jobPage/filtercard'
import Job from './jobPage/Job'

const jobArray = [1,2,3,4,5,6,7,8]

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-[20%]'>
            <Filtercard />
          </div>

          {
            jobArray.length <=0 ? <span className='text-3xl text-bold'>No Jobs Found</span>:(
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-10'>
                  {
                    jobArray.map((item, ind)=>
                      <div>
                        <Job/>
                      </div>
                    )
                  }
                </div>
              </div>
            )
            
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs