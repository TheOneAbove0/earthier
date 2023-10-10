import React from "react";
import { Search } from "../../assets/icons";
import TableBody from "./TableBody";
import PageNumber from "./PaginationControls";
import PaginationControls from "./PaginationControls";

export default function Categories() {
  return (
    <div className=" bg-LightGrey  ">
      <div className=" flex items-center justify-between px-6 py-4  ">
        <div className=" font-bold text-[15px] leading-[20px] tracking-[-0.5px] ">
          Product Category
        </div>
        <div className=" py-3 px-6 font-medium text-[13px] leading-[18.2px] text-white bg-BlueColor rounded-lg ">
          Create category
        </div>
      </div>

      <div className=" bg-white mx-6  mb-[14px] ">
        <div className=" flex justify-end  ">
          <div className=" flex justify-between bg-LightGrey  mt-4 mr-4 mb-3 w-60 items-center  ">
            <input
              className=" w-full bg-LightGrey  rounded-lg focus:outline-none text-[13px] leading-[18px] tracking-[-0.08px] text-Tertiary py-[7px] pl-2 "
              type="text"
              placeholder="Search here...."
            />
            <img
              className=" py-1 bg-LightGrey  pr-2  "
              src={Search}
              alt="Search"
            />
          </div>
        </div>

        <TableBody />

        {/* <PaginationControls /> */}
      </div>
    </div>
  );
}
