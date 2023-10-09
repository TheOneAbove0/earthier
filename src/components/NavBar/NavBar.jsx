import React from "react";
import { CompanyLogo } from "../assets/image";
import { Show, Bell, ArrowUp } from "../assets/icons";

export default function NavBar() {
  return (
    <div className=" flex border bg-white sticky top-0 z-50 items-center justify-between ">
      <div className=" flex items-center gap-[38px] ">
        <img className=" py-3 pl-10 " src={CompanyLogo} alt="CompanyLogo" />
        <img className="p-[10.5px] border rounded-lg bg-AdminPanel " src={Show} alt="Show" />
      </div>

      <div className=" flex  items-center gap-6 ">
        <div className=" flex items-center gap-2 ">
          <span className=" font-semibold text-[15px] leading-[17.61px] tracking-[4%]  ">Visit Store</span>
          <img src={ArrowUp} alt="ArrowUp" />
        </div>

        <img className=" px-[16.72px] pt-[15.67px] pb-[16.5px] bg-LightGrey rounded-lg " src={Bell} alt="Bell" />

        <div className=" mr-4 text-white bg-BlueColor p-[15px] font-semibold text-[15px] leading-[17.61px] tracking-[4%]  rounded-lg ">
          LT
        </div>
      </div>
    </div>
  );
}
