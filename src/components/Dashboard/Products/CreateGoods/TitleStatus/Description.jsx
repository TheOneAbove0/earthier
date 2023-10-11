import React from "react";
import { ChevronDown } from "../../../../assets/icons";
import TagList from "./TagList";
import Images from "./Images";

export default function Description() {
  return (
    <div className=" flex w-full h-[699px] gap-4 ">
      <div className="   bg-white flex-grow rounded-2xl  ">
        <div className=" p-4  ">
          <div>
            <span className="text-xs leading-[16px]">
              Title
              <span className=" text-Danger text-[11px] leading-[13px] tracking-[0.07px] ">
                *
              </span>
            </span>
            <input
              className=" text-xs leading-[16px] p-4 bg-LightGrey w-full focus:outline-none mt-2 "
              type="text"
              required
              placeholder="E.g. Laptop, Summer collection "
            />
          </div>

          <div className=" mt-4 ">
            <span className="text-xs leading-[16px]">Description</span>
            <textarea
              className=" text-xs p-4 leading-[16px]  h-[525px] bg-LightGrey w-full focus:outline-none mt-2 "
              type="text"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 ">
        <div className=" bg-white w-[440px] h-[669px] rounded-2xl ">
          <div className=" p-4 relative ">
            <img
              className=" absolute right-8 top-[60px] "
              src={ChevronDown}
              alt="ChevronDown"
            />
            <div className=" text-xs leading-[16px] ">
              Status
              <span className=" text-Danger  text-[11px] leading-[13px] tracking-[0.07px] ">
                *
              </span>
            </div>
            <div>
              <select className="w-[408px] text-xs leading-[16px] focus:outline-none mt-2 bg-LightGrey px-4 rounded-lg py-4 appearance-none">
                <option  value="">
                  Active
                </option>
                <option  value="">
                  Archived
                </option>
              </select>
            </div>
          </div>

          <div className=" p-4 pt-0 relative ">
            <img
              className=" absolute right-8 top-10 "
              src={ChevronDown}
              alt="ChevronDown"
            />
            <div className=" text-xs leading-[16px] ">
              Category
              <span className=" text-Danger  text-[11px] leading-[13px] tracking-[0.07px] ">
                *
              </span>
            </div>
            <div>
              <select className="w-[408px] text-xs leading-[16px] focus:outline-none mt-2 bg-LightGrey px-4 rounded-lg py-4 appearance-none">
                <option className="p-2 m-2" value="Active">
                  Laptop
                </option>
                <option className="p-2 m-2" value="Archived">
                  Summer Collection
                </option>
              </select>
            </div>
          </div>

          <div className=" p-4 pt-0 relative ">
            <div className=" text-xs leading-[16px] ">Brand</div>
            <div>
              <input
                placeholder=" E.g. Hp, Apple "
                className="w-[408px] text-xs leading-[16px] focus:outline-none mt-2 bg-LightGrey px-4 rounded-lg py-4 "
              />
            </div>
          </div>

          <TagList />
        </div>

        <div className=" bg-white rounded-2xl ">
          <div className=" p-4 flex flex-col gap-2 ">
            <div className=" text-[15px] leading-[20px] font-medium ">
              Image
              <span className=" text-Danger  text-[15px] leading-[20px] font-medium  ">
                *
              </span>
            </div>

            <div>
              <Images />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
