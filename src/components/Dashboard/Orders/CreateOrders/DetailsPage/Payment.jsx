import React from "react";
import { ChevronDown } from "../../../../assets/icons";

export default function Payment() {
  return (
    <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">
      <div className=" text-sm leading-[20px] tracking-[2%] ">Payment</div>

      <div className=" flex flex-col gap-2 ">
        <div className=" text-xs leading-[16px] ">
          Payment Status<span className=" text-Danger ">*</span>
        </div>
        <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
          <span className=" text-xs leading-[16px] ">Paid</span>
          <img src={ChevronDown} alt="ChevronDown" />
        </div>
      </div>

      <div className=" flex flex-col gap-2 ">
        <div className=" text-xs leading-[16px] ">
          Payment Mode<span className=" text-Danger ">*</span>
        </div>
        <div className=" p-4 py-[14px] rounded-lg justify-between items-center flex w-full bg-LightGrey focus:outline-none ">
          <span className=" text-xs leading-[16px] ">ConnectIPS</span>
          <img src={ChevronDown} alt="ChevronDown" />
        </div>
      </div>
    </div>
  );
}
