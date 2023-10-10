import DragDrop from "./DragDrop";
import React from "react";
import { ArrowLeft} from "../../../assets/icons";

export default function CreateCategory() {
 
  return (
    <div className=" px-16 py-4 bg-LightGrey ">
      <div className=" flex item-center justify-between  ">
        <div className=" flex items-center gap-2 ">
          <img src={ArrowLeft} alt="ArrowLeft" />
          <div className=" font-bold text-[17px] leading-[22px] tracking-[-0.41px] ">
            Create Category
          </div>
        </div>
        <div className=" flex items-center gap-4 ">
          <div className=" font-medium text-[13px] text-Tertiary leading-[18.2px] px-6 py-3 rounded-lg bg-white  ">
            Cancel
          </div>
          <div className=" font-medium text-[13px] text-white leading-[18.2px] px-6 py-3 rounded-lg bg-BlueColor  ">
            Save
          </div>
        </div>
      </div>

      <div className=" flex gap-4 mt-4 h-[758px]  ">
        <div className=" h-[528px] bg-white w-full rounded-2xl  ">
          {/* here */}
        </div>

        <DragDrop />



        


      </div>
    </div>
  );
}
