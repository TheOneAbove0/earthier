import React from "react";
import { Revenue } from "../../assets/icons";

import { RevenueData } from "./RevenueData";
export default function RevenueCard() {
  return (
    <div className=" flex gap-4  px-6 py-4 ">
      {RevenueData.map((item, index) => {
        return (
          <div
            key={index}
            className=" flex py-4 pl-4 shodowNew bg-white w-full rounded-xl flex-col gap-2 "
          >
            <div className=" mb-[5px] ">
              <img
                className=" p-2  bg-LightGrey rounded-lg  "
                src={Revenue}
                alt="Revenue"
              />
            </div>
            <span className=" text-[15px] leading-[20px] tracking-[2%] ">
              {item.title}
            </span>

            <div className=" flex items-center gap-4 ">
              <div className=" font-bold text-[22px] leading-[28px] tracking-[0.35px]  ">
                {item.Total}
              </div>
              <div className={`text-[17px] leading-[22px] tracking-[2%]  ${item.color} `}>
                {item.profit}
              </div>
            </div>

            <div className=" text-Tertiary text-[13px] leading-[18px] tracking-[-0.08px] ">
              {item.Date}
            </div>
          </div>
        );
      })}
    </div>
  );
}
