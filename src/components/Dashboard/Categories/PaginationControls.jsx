import React from "react";
import { Left, Right } from "../../assets/icons/index";

export default function PaginationControls({
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="  ">
      <div className="flex justify-end mt-3 mb-4  mr-4 " >
        <button
          className=" p-1 "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={Left} alt="Left" />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={` px-3 py-2 rounded-[3px] text-[14px] leading-[20px] ${
              currentPage === index + 1
                ? "bg-ButtonHover text-white"
                : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="  p-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={Right} alt="Right" />
        </button>
      </div>
      </div>
  );
}
