import React from "react";
import { SellingProductData } from "./SellingProductData";

export default function SellingProduct() {
  return (
    <div className="mx-6 my-4 bg-white rounded-2xl">
      <div className="p-4">
        <div className="font-medium text-[15px] leading-[20px]">
          Top Selling Product
        </div>

        <table>
          <thead>
            <tr className=" tableBorder ">
              <th className="pl-4 whitespace-nowrap pt-4 pb-2 w-[80%]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  Product
                </div>
              </th>
              <th className="pl-2 whitespace-nowrap pt-4 pb-2 w-[200px]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  Sold Quantity
                </div>
              </th>
              <th className="pl-2 pt-4 whitespace-nowrap pb-2 w-[200px]">
                <div className="font-medium text-xs leading-[16px] text-start">
                  Sold Value
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {SellingProductData.map((item, index) => (
              <tr key={index}>
                <td className="pl-4 whitespace-nowrap py-2 w-[80%]">
                  <div className="gap-2 flex items-center">
                    <img src={item.image} alt="Avatar" />
                    <span className=" text-[13px] leading-[18px] tracking-[-0.08px] ">{item.name}</span>
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap w-[200px]">
                  <div className="text-xs leading-[16px]">{item.quantity}</div>
                </td>
                <td className="py-3 whitespace-nowrap pl-2 w-[200px]">
                  <div className="text-xs leading-[16px]">{item.value}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
