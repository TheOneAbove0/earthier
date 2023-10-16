import React from "react";
import { ChevronDown } from "../../../../assets/icons";

export default function ShippingDetails() {
  return (
    <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">
      <div className=" text-sm font-medium leading-[20px]  ">
        Shipping Details
      </div>

      <div className=" flex flex-col gap-2 ">
        <div className=" text-xs leading-[16px] ">
          Shipping Mode<span className=" text-Danger ">*</span>
        </div>
        <div className=" p-4 py-[14px] justify-between rounded-lg items-center flex w-full bg-LightGrey focus:outline-none ">
          <span className=" text-xs leading-[16px] ">Express</span>
          <img src={ChevronDown} alt="ChevronDown" />
        </div>
      </div>

      <div className=" flex w-full gap-4  items-center">
        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            District<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
            <span className="text-xs leading-[16px]">Kathmandu</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Area<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
            <span className=" text-xs leading-[16px] ">Bansbari, Maharajgunj</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
      </div>

      <div className=" flex w-full gap-4 ">
        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Location<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
            <span className=" text-xs leading-[16px] ">Bansbari, Pipalbot</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">Landmark</div>
          <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
            <span  className=" text-xs leading-[16px] ">Near Bigmart</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
      </div>
    </div>
  );
}
