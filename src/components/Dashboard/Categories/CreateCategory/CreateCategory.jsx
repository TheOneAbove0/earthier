import DragDrop from "./DragDrop";
import React from "react";
import { ArrowLeft } from "../../../assets/icons";
import Description from "./Description";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    navigate("/categories");
  };
  return (
    <div className=" px-16 py-4 bg-LightGrey ">
      <div className=" flex item-center justify-between  ">
        <div className=" flex items-center gap-2 ">
          <img className=" w-[20px] h-[20px] cursor-pointer " onClick={handleCreateCategoryClick} src={ArrowLeft} alt="ArrowLeft" />
          <div className=" font-bold text-[17px] leading-[22px] tracking-[-0.41px] ">
            Create Category
          </div>
        </div>
        <div className=" flex items-center gap-4 ">
          <div onClick={handleCreateCategoryClick} className=" font-medium cursor-pointer text-[13px] text-Tertiary leading-[18.2px] px-6 py-3 rounded-lg bg-white  ">
            Cancel
          </div>
          <div onClick={handleCreateCategoryClick} className=" font-medium cursor-pointer text-[13px] text-white leading-[18.2px] px-6 py-3 rounded-lg bg-BlueColor  ">
            Save
          </div>
        </div>
      </div>

      <div className=" flex gap-4 mt-4 h-[748px]  ">
        <Description />
        <DragDrop />
      </div>
    </div>
  );
}
