import React, { useState } from "react";
import { chevrondown, searchBlue } from "../../../assets/icons";
import { categories } from "./Data";

export default function Permissions({handleCheckboxChange, checkedItems}) {
 
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-[15px] leading-[20px] tracking-[-0.5px] font-bold">
        All Permissions
      </div>
      <div className="rounded-2xl w-full p-4 flex flex-col gap-2 bg-LightGrey">
        <div className="flex justify-between px-2 bg-white w-full items-center">
          <input
            className="focus:outline-none text-[13px] leading-[18px] tracking-[-0.08px] py-[7px]"
            type="text"
            placeholder="Search"
          />
          <img src={searchBlue} alt="searchBlue" />
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center pl-2 gap-4">
              <img src={chevrondown} alt="chevrondown" />
              <span className="font-bold py-[7px] leading-[18px] text-[13px] tracking-[-0.08px]">
                {category.name}
              </span>
            </div>
            <div className="flex flex-col  w-full pl-8">
              <div className="flex ">
                {category.actions.map((action, actionIndex) => (
                  <div
                    key={actionIndex}
                    className="flex items-center w-full px-2 gap-2"
                  >
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex][actionIndex]}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, actionIndex)
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {action}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex ">
                {category.permission.map((permission, permissionIndex) => (
                  <div
                    key={permissionIndex}
                    className="flex items-center w-full px-2 gap-2"
                  >
                    <input
                      className="w-3 h-3"
                      type="checkbox"
                      checked={checkedItems[categoryIndex][permissionIndex]}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, permissionIndex)
                      }
                    />
                    <span className="text-[13px] leading-[18px] tracking-[-0.08px] py-1">
                      {permission}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
