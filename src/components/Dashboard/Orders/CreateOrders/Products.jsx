import React from "react";

export default function Products() {
  return (
    <div className=" w-full bg-white rounded-2xl  min-h-[240px] p-4 ">
      <div className="flex flex-col h-[240px] justify-between items-start">
        <div className="font-medium text-[15px] leading-[20px] self-start">
          Products
        </div>
        <div className="font-medium text-[13px] leading-[18.2px] px-4 py-[10px] text-white w-fit rounded-lg bg-BlueColor self-start ">
          Select Products
        </div>
      </div>
    </div>
  );
}
