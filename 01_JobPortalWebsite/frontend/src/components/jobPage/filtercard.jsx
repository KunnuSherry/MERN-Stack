import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import {Label} from '../ui/label'
const filterData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

const Filtercard = () => {
  return (
    <div className='w-full p-5 rounded-full'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, ind)=>(
            <div>
              <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
              {
                data.array.map((d, ind)=>(
                  <div className='flex items-center space-x-2 my-2'>
                    <RadioGroupItem value={d} />
                    <Label>{d}</Label>
                  </div>
                ))
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default Filtercard