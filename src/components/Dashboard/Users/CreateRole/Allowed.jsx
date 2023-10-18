import React from 'react';
import { chevrondown, searchBlue } from '../../../assets/icons';

export default function Allowed({ checkedItems }) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <span className='text-[15px] leading-[20px] tracking-[-0.5px] font-bold'>Allowed</span>
        <span className='text-[12px] leading-[16px] text-Danger'>Clear permissions</span>
      </div>
      <div className='rounded-2xl w-full p-4 flex flex-col gap-2 bg-LightGrey'>
        <div className='flex justify-between px-2 bg-white w-full items-center'>
          <input className='focus:outline-none text-[13px] leading-[18px] tracking-[-0.08px] py-[7px]' type="text" placeholder='Search' />
          <img src={searchBlue} alt="searchBlue" />
        </div>

        
        {checkedItems.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className='flex items-center pl-2 gap-4'>
              <img src={chevrondown} alt='chevrondown' />
              <span className='font-bold py-2 leading-[18px] text-[13px] tracking-[-0.08px]'>
                Category Name
              </span>
            </div>
            <div className='flex flex-col w-full pl-8'>
              <div className='flex'>
                {category.map((isChecked, itemIndex) => (
                  <div key={itemIndex} className='flex items-center w-full px-2 gap-2'>
                    <input
                      className='w-3 h-3'
                      type='checkbox'
                      checked={isChecked}
                     
                    />
                    <span className='text-[13px] leading-[18px] tracking-[-0.08px] py-1'>
                      Item Name
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
