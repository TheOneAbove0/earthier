import React from "react";
import { Avatar } from "../../assets/image";

export default function SellingProduct() {
  return (
    <div className="mx-6 my-4 bg-white rounded-2xl  ">
      <div className=" p-4  ">
        <div className="font-medium  text-[15px] leading-[20px]  ">
          Top Selling Product
        </div>

        <table>

          <thead>
            <tr>
              <th className="pl-4 whitespace-nowrap pt-4 pb-2 min-w-[870px]" >
                <div className="font-medium text-xs leading-[16px] text-start">
                  Product
                </div>
              </th>
              <th className="pl-2 whitespace-nowrap pt-4 pb-2 w-[200px]" >
                <div className="font-medium text-xs leading-[16px] text-start">
                  Sold Quantity
                </div>
              </th>
              <th className="pl-2 pt-4 whitespace-nowrap pb-2 w-[200px]" >
                <div className="font-medium text-xs leading-[16px] text-start">
                  Sold Value
                </div>
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="pl-4 whitespace-nowrap py-2 min-w-[870px]" >
                <div className="gap-2 flex items-center">
                  <img src={Avatar} alt="Avatar" />
                  <span>Alcohol</span>
                </div>
              </td>
              <td className="p-3 whitespace-nowrap w-[200px]" >
                <div className="text-xs leading-[16px]">540</div>
              </td>
              <td className="py-3 whitespace-nowrap pl-2 w-[200px]">
                <div className="text-xs leading-[16px]">12540</div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>28</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Bob</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
