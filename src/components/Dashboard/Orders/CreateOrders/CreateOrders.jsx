
import React from "react";
import { ArrowLeft } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";
import Main from "./Main";


export default function CreateOrders() {
  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    navigate("/products");
  };
  return (
    <div className=" px-14 py-4 bg-LightGrey ">
      <div className=" flex item-center justify-between  ">
        <div className=" flex items-center gap-2 ">
          <img
            className=" w-[20px] h-[20px] cursor-pointer "
            onClick={handleCreateCategoryClick}
            src={ArrowLeft}
            alt="ArrowLeft"
          />
          <div className=" font-bold text-[17px] leading-[22px] tracking-[-0.41px] ">
          Create Order
          </div>
        </div>
        <div className=" flex items-center gap-4 ">
          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-Danger leading-[18.2px] px-6 py-3 rounded-lg bg-white  "
          >
            Cancel
          </div>

          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-Tertiary leading-[18.2px] px-6 py-3 rounded-lg bg-white  "
          >
            Save as Draft
          </div>
          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-white leading-[18.2px] px-6 py-3 rounded-lg bg-BlueColor  "
          >
            Save
          </div>
        </div>
      </div>

      <div className="  my-4   ">
        <Main />
      </div>

      <div className=" flex item-center justify-end mt-4  ">
        <div className=" flex items-center gap-4 ">
          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-Danger leading-[18.2px] px-6 py-3 rounded-lg bg-white  "
          >
            Cancel
          </div>
          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-Tertiary leading-[18.2px] px-6 py-3 rounded-lg bg-white  "
          >
            Save as Draft
          </div>
          <div
            onClick={handleCreateCategoryClick}
            className=" font-medium cursor-pointer text-[13px] text-white leading-[18.2px] px-6 py-3 rounded-lg bg-BlueColor  "
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
