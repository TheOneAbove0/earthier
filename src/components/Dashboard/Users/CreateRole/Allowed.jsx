import React from "react";
import { chevrondown, searchBlue } from "../../../assets/icons";

export default function Allowed({
  checkedItems,
  categories,
  handleCheckboxChange,
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center w-full justify-between">
        <span className="text-[15px] leading-[20px] tracking-[-0.5px] font-bold">
          Allowed
        </span>
        <span className="text-[12px] leading-[16px] text-Danger">
          Clear permissions
        </span>
      </div>
      <div className="rounded-2xl w-full h-full p-4  flex flex-col gap-2 bg-LightGrey">
        <div className="flex justify-between px-2 bg-white w-full items-center">
          <input
            className="focus:outline-none w-full text-[13px] leading-[18px] tracking-[-0.08px] py-[7px]"
            type="text"
            placeholder="Search"
          />
          <img src={searchBlue} alt="searchBlue" />
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {checkedItems[categoryIndex].actions ||
            checkedItems[categoryIndex].create ||
            checkedItems[categoryIndex].permission ||
            checkedItems[categoryIndex].delete ? (
              <div className="flex items-center pl-2  gap-4">
                <img src={chevrondown} alt="chevrondown" />
                <span className="font-bold py-2 leading-[18px] text-[13px] tracking-[-0.08px]">
                  {category.name}
                </span>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-col w-full pl-8">
              <div className="flex">
                {checkedItems[categoryIndex].actions && (
                  <div className="flex items-center w-full px-2 gap-2">
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex].actions}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, "actions")
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {category.actions}
                    </span>
                  </div>
                )}
                {checkedItems[categoryIndex].create && (
                  <div className="flex items-center w-full px-2 gap-2">
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex].create}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, "create")
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {category.create}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex">
                {checkedItems[categoryIndex].permission && (
                  <div className="flex items-center w-full px-2 gap-2">
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex].permission}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, "permission")
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {category.permission}
                    </span>
                  </div>
                )}
                {checkedItems[categoryIndex].delete && (
                  <div className="flex items-center w-full px-2 gap-2">
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex].delete}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, "delete")
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {category.delete}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
