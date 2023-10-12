import React from "react";
import { TableData } from "./TableData";

export default function ServicesTable() {
  return (
    <div className="px-4 bg-white relative">
      <table>
        <thead>
          <tr className="tableBorder">
            <th className="px-3 whitespace-nowrap pt-4 pb-2 w-[64px]">
              <input className="w-4 h-4 rounded-[4px]" type="checkbox" />
            </th>
            <th className="pl-2 text-start whitespace-nowrap pt-4 pb-2 w-[64px]">
              #
            </th>
            <th className="pl-4 text-start whitespace-nowrap pt-4 pb-2 w-[75%]">
              Product
            </th>
            <th className="pl-2 text-start whitespace-nowrap pt-4 pb-2 w-[200px]">
              Status
            </th>

            <th className="pl-[11px] text-start pt-4 pr-2 whitespace-nowrap pb-2 w-[56px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 whitespace-nowrap pt-4 pb-2 w-[64px]">
                <input className="w-4 h-4 rounded-[4px]" type="checkbox" />
              </td>
              <td className="pl-2 whitespace-nowrap pt-2 pb-2 w-[64px]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  {item.id}
                </div>
              </td>
              <td className="pl-4 whitespace-nowrap py-2 w-[75%]">
                <div className="gap-2 flex items-center">
                  <img
                    className="w-6 h-6 object-contain"
                    src={item.Avatar}
                    alt="Avatar"
                  />
                  <span className="text-[13px] leading-[18px] tracking-[-0.08px]">
                    {item.Product}
                  </span>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap w-[200px]">
                <div className="text-xs leading-[16px]">{item.Status}</div>
              </td>

              <td className="pl-[28px] py-[10px] whitespace-nowrap w-[56px]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  <img src={item.ThreeDot} alt="ThreeDot" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
