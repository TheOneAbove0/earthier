import React, { useState } from "react";
import { ThreeDot} from "../../assets/icons/index";
import { Avatar } from "../../assets/image/index";
import { TableData } from "./TableData";
import PaginationControls from "./PaginationControls";

export default function TableBody() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the starting and ending indices
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data to display only the items
  const currentTableData = TableData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(TableData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (

    <div className=" px-4  relative ">
      <div>
      <table className="    ">
        <thead>
          <tr className=" tableBorder ">
            <th className="px-3 whitespace-nowrap pt-4 pb-2 w-[64px]">
              <input className=" w-4 h-4 rounded-[4px]" type="checkbox" />
            </th>

            <th className="pl-2 whitespace-nowrap pt-4 pb-2 w-[64px]">
              <div className="font-medium text-xs leading-[16px] text-start">
                #
              </div>
            </th>

            <th className="pl-4 whitespace-nowrap pt-4 pb-2 w-[70%] ">
              <div className="font-medium text-xs leading-[16px] text-start">
                Category
              </div>
            </th>
            <th className="pl-2 whitespace-nowrap pt-4 pb-2 w-[200px]">
              <div className="font-medium text-xs leading-[16px] text-start">
                Parent category
              </div>
            </th>
            <th className="pl-2 pt-4 whitespace-nowrap pb-2 w-[200px]">
              <div className="font-medium text-xs leading-[16px] text-start">
                Products
              </div>
            </th>
            <th className="pl-[11px] pt-4 pr-2 whitespace-nowrap pb-2 w-[56px]">
              <div className="font-medium text-xs leading-[16px] text-start">
                Action
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {currentTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 whitespace-nowrap pt-4 pb-2 w-[64px]">
                  <input className="w-4 h-4 rounded-[4px]" type="checkbox" />
                </td>

                <td className="pl-2 whitespace-nowrap pt-2 pb-2 w-[64px]">
                  <div className="font-medium text-xs leading-[16px] text-start ">
                    {item.id}
                  </div>
                </td>

                <td className="pl-4 whitespace-nowrap py-2 w-[70%]">
                  <div className="gap-2 flex items-center">
                    <img className=" w-6 h-6 object-contain" src={Avatar} alt="Avatar" />
                    <span className=" text-[13px] leading-[18px] tracking-[-0.08px] ">
                      {item.Category}
                    </span>
                  </div>
                </td>

                <td className="p-3 whitespace-nowrap w-[200px]">
                  <div className="text-xs leading-[16px]">
                    {item.ParentCategory}
                  </div>
                </td>
                <td className="py-3 whitespace-nowrap pl-2 w-[200px]">
                  <div className="text-xs leading-[16px]">{item.Products}</div>
                </td>

                <td className="pl-[28px] py-[10px]  whitespace-nowrap w-[56px]">
                  <div className="font-medium text-xs leading-[16px] text-start">
                    <img src={ThreeDot} alt="ThreeDot" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

      {/* Pagination controls */}
      <div className=" ">
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      </div>
    </div>
  );
}
