import React from "react";
import TableData from "./TableData"; 
import {ThreeDot} from "../../../../../assets/icons/index";

export function TableBody() {
  return (
    <div className=" bg-white relative pb-4  rounded-2xl">
        <div className=" font-medium  text-[15px] leading-[20px] pt-4 px-4 ">
        Current variants
        </div>
      <table>
        <thead>
          <tr>
            <th className="pl-6 text-start text-[12px] leading-[16px] font-medium whitespace-nowrap pt-4 pb-2 w-[65%] ">
              Variant
            </th>
            <th className="pl-2 text-start text-[12px] leading-[16px] font-medium whitespace-nowrap pt-4 pb-2 w-[104px]">
              Price (Rs.)
            </th>
            <th className="pl-2 text-start text-[12px] leading-[16px] font-medium pt-4 whitespace-nowrap pb-2 w-[104px]">
              Available
            </th>
            <th className="pl-2 text-start text-[12px] leading-[16px] font-medium pt-4 whitespace-nowrap pb-2 w-[104px]">
              On hand
            </th>
            <th className="pl-2 text-start text-[12px] leading-[16px] font-medium pt-4 whitespace-nowrap pb-2 w-[120px]">
              SKU
            </th>
            <th className="pl-[11px] text-start pt-4 text-[12px] leading-[16px] font-medium pr-4 whitespace-nowrap pb-2 w-[53px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => (
            <tr key={index}>
              <td className="pl-6 whitespace-nowrap  w-[65%]">
                <div className="gap-2 flex items-center">
                  <img className="w-6 h-6 object-contain" src={item.image} alt="Avatar" />
                  <span className="text-[13px] leading-[18px] tracking-[-0.08px]">
                    {item.Variant}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap w-[104px]">
                <div className="text-[13px] px-1 py-[6px] tracking-[-0.08px]  leading-[18px]">
                    <input className=" w-full focus:outline-none px-2 py-[5px] border-Tertiary border rounded-[4px] " value={item.Price} type="text" />
                </div>
              </td>
              <td className=" whitespace-nowrap pl-2 w-[104px]">
              <div className="text-[13px] px-1 py-[6px] tracking-[-0.08px]  leading-[18px]">
                    <input className=" w-full focus:outline-none px-2 py-[5px] border-Tertiary border rounded-[4px] " value={item.Available} type="text" />
                </div>
              </td>
              <td className="whitespace-nowrap pl-2 w-[104px]">
              <div className="text-[13px] px-1 py-[6px] tracking-[-0.08px]  leading-[18px]">
                    <input className=" w-full focus:outline-none px-2 py-[5px] border-Tertiary border rounded-[4px] " value={item.OnHand} type="text" />
                </div>
              </td>
              <td className=" whitespace-nowrap pl-2 w-[120px]">
              <div className="text-[13px] px-1 py-[6px] tracking-[-0.08px]  leading-[18px]">
                    <input className=" w-full focus:outline-none px-2 py-[5px] border-Tertiary border rounded-[4px] " type="text" />
                </div>
              </td>
              <td className="pl-[28px] py-[10px] pr-4  whitespace-nowrap w-[53px]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  <img src={ThreeDot} alt="ThreeDot" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


