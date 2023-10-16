import React from 'react'
import { Calendar, ChevronDown } from '../../assets/icons'

export default function FilterTableData() {
  return (
    <div className=' px-6  '>
      <div className=' flex flex-col  gap-3 px-2  '>
        <div className='pt-4 flex gap-4  '>
          <div className=' flex gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey '>
            <div className=' text-xs leading-[16px] '>Status</div>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>

          <div className=' flex gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey '>
            <div className=' text-xs leading-[16px] '>Payment status</div>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>

          <div className=' flex gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey '>
            <div className=' text-xs leading-[16px] '>Date</div>
            <img src={Calendar} alt="Calendar" />
          </div>
          
        </div>

 
        <div></div>

      </div>
    </div>
  )
}
