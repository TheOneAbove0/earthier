import React, { useState } from "react";
import { PlusBlue } from "../../../../assets/icons";

export default function Pricing() {
  const [isToggled, setIsToggled] = useState(true);

  const toggleButtonClasses = `relative w-[48px] h-[21px] rounded-full bg-opacity-10 bg-[#1274FF] ${
    isToggled ? "bg-[#1274FF]" : "bg-gray-300"
  }`;

  return (
    <div className=" bg-white flex-grow p-4 rounded-2xl ">
      <div className=" flex flex-col gap-4 ">
        <div className=" font-medium text-[15px] leading-[20px] ">Pricing</div>
        <div className=" flex gap-2 ">
          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">
              Selling Price
              <span className=" text-[11px] leading-[13px] tracking-[0.07px] text-Danger ">
                *
              </span>
            </div>
            <input
              className=" p-4 w-full bg-LightGrey focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>

          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">
              Crossed Price
              <span className=" text-[11px] leading-[13px] tracking-[0.07px] text-Danger ">
                *
              </span>
            </div>
            <input
              className=" p-4 w-full bg-LightGrey focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>
          <div className=" w-full flex flex-col gap-2 ">
            <div className=" text-xs leading-[16px] "></div>
            <input
              hidden
              className=" p-4 w-full bg-LightGrey focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>
        </div>

        <div className=" flex gap-2 ">
          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">Cost per item</div>
            <input
              className=" p-4 w-full bg-LightGrey focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>

          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">Profit</div>
            <input
              className=" p-4 w-full  focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>
          <div className=" w-full flex flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">Margin</div>
            <input
              className=" p-4 w-full  focus:outline-none text-xs leading-[16px] rounded-lg "
              type="text"
              placeholder="Rs  0.00"
            />
          </div>
        </div>

        <div className=" flex gap-4 items-center ">
          <button
            onClick={() => setIsToggled(!isToggled)}
            className={toggleButtonClasses}
          >
            <div
              className={`absolute w-[19px] h-[19px] rounded-full bg-BlueColor top-[2px] left-1 transition-transform transform ${
                isToggled ? "translate-x-[27px]" : ""
              }`}
            ></div>
          </button>
          <span className=" font-medium text-[13px] leading-[18.2px] ">Taxable</span>
        </div>

        <div className=" flex gap-2 items-center cursor-pointer ">
            <img src={PlusBlue} alt="PlusBlue" />
            <p className=" text-xs leading-[16px] text-BlueColor ">Add variants (options like size or color)</p>
        </div>
      </div>
    </div>
  );
}
