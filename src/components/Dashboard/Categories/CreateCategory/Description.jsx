import React from 'react'

export default function Description() {
  return (
    <div className=" h-[528px] bg-white w-full rounded-2xl  ">
          <div className=" p-4  ">
            <div>
              <span className="text-xs leading-[16px]">
                Title
                <span className=" text-Danger text-[11px] leading-[13px] tracking-[0.07px] ">
                  *
                </span>
              </span>
              <input
                className=" text-xs leading-[16px] p-4 bg-LightGrey w-full focus:outline-none mt-2 "
                type="text" required
                placeholder="E.g. Laptop, Summer collection "
              />
            </div>

            <div className=" mt-4 ">
              <span className="text-xs leading-[16px]">Under category</span>
              <input
                className=" text-xs leading-[16px] p-4 bg-LightGrey w-full focus:outline-none mt-2 "
                type="text"
                placeholder="E.g. Laptop, Summer collection "
              />
              
            </div>

            <div className=" mt-4 ">
              <span className="text-xs leading-[16px]">Description</span>
              <textarea
                className=" text-xs p-4 leading-[16px] min-h-[276px] bg-LightGrey w-full focus:outline-none mt-2 "
                type="text"
                
              />
            </div>
          </div>
        </div>

  )
}
