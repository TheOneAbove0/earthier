import React from 'react'
import { ChevronDown, Close, Edit } from '../../../../../assets/icons'

export default function ProductVariants() {
  return (
    <div className=' flex flex-col mt-4 bg-white rounded-2xl gap-4 p-4 '>
      <div className=' font-medium text-[15px] leading-[20px] '>Product variants</div>

      <div className=' flex flex-col gap-2 '>
      <div className=' flex items-center justify-between '>
        <span className=' text-[16px] leading-[16px] '>Size</span>
        <div className=' flex item-center gap-5 '>
          <img src={Edit} alt="Edit" />
          <img src={Close} alt="Close" />
        </div>
      </div>

      <div className=' flex gap-4 '>
        <div className=' text-xs leading-[16px] px-4 py-[6px] bg-LightGrey rounded-[4px] '>XXL</div>
        <div className=' text-xs leading-[16px] px-4 py-[6px] bg-LightGrey rounded-[4px] '>XL</div>

      </div>
      </div>

      <div className=' flex flex-col gap-4 border-b '>
      <div className=' flex items-center w-full gap-4 '>
        <div className=' flex w-full justify-between items-center bg-LightGrey p-4 '>
          <div className=' text-xs leading-[16px] '>Colors</div>
          <img src={ChevronDown} alt="ChevronDown" />
        </div>
        <img src={Close} alt="Close" />
      </div>

      <div className=' flex flex-col gap-2'>

        <div className=' flex gap-4 p-2 w-full bg-LightGrey rounded-lg '>

          <div className=' flex bg-white rounded-[4px] items-center gap-4 px-3 py-2 '>
            <span className='text-xs leading-[16px]  '>Red</span>
            <img src={Close} alt="Close" />
          </div>

          <div className=' flex bg-white rounded-[4px] items-center gap-4 px-3 py-2 '>
            <span className='text-xs leading-[16px] '>Green</span>
            <img src={Close} alt="Close" />
          </div>
        </div>

        <div className=' w-fit py-2 px-6 mb-4 text-[13px] leading-[18px] tracking-[-0.08px] text-BlueColor border-BlueColor border rounded-[4px] '>
          Save
        </div>

      </div>
      </div>

      <div className=' flex flex-col  gap-4 mt-4  '>
        <div className=' flex items-center p-4 bg-LightGrey w-fit  gap-[93px]'>
          <span className=' text-xs leading-[16px] '>Enter variant title</span>
          <img src={Close} alt="Close" />
        </div>

        <div className=' flex flex-col gap-2  border-b'>
          <input className=' p-3 text-xs leading-[16px] bg-LightGrey w-full ' type="text" placeholder='Variant name' />
          <div className=' w-fit py-2 px-6 mb-4 text-[13px] leading-[18px] tracking-[-0.08px] text-BlueColor border-BlueColor border rounded-[4px] '>
          Save
        </div>

        </div>

      </div>

      <div className=' w-fit py-2 px-6 text-[13px] leading-[18px] tracking-[-0.08px] text-BlueColor border-BlueColor border rounded-[4px] '>
      New variant
        </div>

    </div>
  )
}
