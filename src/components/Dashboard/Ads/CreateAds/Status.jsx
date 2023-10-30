import React from "react";
import { ChevronDown } from "../../../assets/icons";

export default function Status() {
  return (
    <div className="  w-full flex flex-col gap-2 ">
      <div className=" bg-white  flex flex-col gap-2 p-4  rounded-2xl">
        <div className=" text-[12px] leading-[16px]  ">
          Status <span className=" text-Danger ">*</span>
        </div>
        <div className=" flex items-center px-4 py-[14px] bg-LightGrey justify-between w-full ">
          <div className=" text-[12px] leading-[16px] ">Active</div>
          <img src={ChevronDown} alt="ChevronDown" />
        </div>
      </div>

      <div className=" bg-white  flex flex-col gap-4 p-4  rounded-2xl">
        <div className=" text-[12px] leading-[16px]  ">Applicable period</div>
        <div className=" flex gap-2 ">
          
        <div className=" w-full flex flex-col gap-2 ">
            <div className=" text-[12px] leading-[16px] ">
              Start date <span className=" text-Danger ">*</span>
            </div>
            <div className=" w-full  px-4 py-[14px] bg-LightGrey  ">
              <input
                className=" text-[12px] rounded-lg w-full leading-[16px] bg-LightGrey  text-Tertiary focus:outline-none "
                type="date"
              />
            </div>
          </div>

          <div className=" w-full flex flex-col gap-2 ">
            <div className=" text-[12px] leading-[16px] ">
            End date
            </div>
            <div className=" w-full  px-4 py-[14px] bg-LightGrey  ">
              <input
                className=" text-[12px] w-full rounded-lg leading-[16px] bg-LightGrey  text-Tertiary focus:outline-none "
                type="date"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
