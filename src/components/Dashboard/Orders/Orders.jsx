import React, { useState } from "react";
import TableBody from "./TableBody";
import { Calendar, Search } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import FilterTable from "./FilterTableData";

const tabs = [
  { label: "All", value: "All" },
  { label: "Draft", value: "Draft" },
  { label: "Pending", value: "Pending" },
  { label: "Processing", value: "Processing" },
  { label: "Dispatched", value: "Dispatched" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Returned", value: "Returned" },
];

export default function Orders() {
  const [activeItem, setActiveItem] = useState("All");

  const clickHandler2 = (item) => {
    setActiveItem(item);
  };

  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    navigate("/orders/createorders");
  };
  return (
    <div>
      <div className=" bg-LightGrey   ">
        <div className=" ">
          <div className=" flex items-center justify-between px-6 py-4  ">
            <div className=" font-bold text-[15px] leading-[20px] tracking-[-0.5px] ">
              Order{" "}
              <span className=" text-Tertiary text-[13px] leading-[18px] tracking-[-0.08px] ">
                (July 15, 2023 - July 22, 2023)
              </span>
            </div>
            <div className=" flex items-center gap-4 ">
              <div
                onClick={handleCreateCategoryClick}
                className=" font-medium cursor-pointer text-[13px] text-BlueColor leading-[18.2px] px-6 py-3 rounded-lg bg-white  "
              >
                Export
              </div>
              <div
                onClick={handleCreateCategoryClick}
                className=" font-medium cursor-pointer text-[13px] text-white leading-[18.2px] px-6 py-3 rounded-lg bg-BlueColor  "
              >
                Create Order
              </div>
            </div>
          </div>

          <div className=" bg-white mx-6  mb-[14px] ">
            <div className=" flex justify-between items-center px-4 pt-4  pb-3  ">
              <div className=" flex w-full  bg-white rounded-lg  ">
                {tabs.map((tab, i) => (
                  <div key={i}>
                    {" "}
                    <div
                      onClick={() => clickHandler2(tab.value)}
                      className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-2 px-5 ${
                        activeItem === `${tab.label}`
                          ? "text-BlueColor border-b-[2px] border-BlueColor  "
                          : ""
                      } `}
                    >
                      {tab.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className=" flex gap-4 items-center ">
                <div className=" flex justify-between bg-LightGrey   w-60 items-center  ">
                  <input
                    className=" w-full bg-LightGrey  rounded-lg focus:outline-none text-[13px] leading-[18px] tracking-[-0.08px] text-Tertiary py-[7px] pl-2 "
                    type="text"
                    placeholder="Search here...."
                  />
                  <img
                    className=" py-1 bg-LightGrey  pr-2  "
                    src={Search}
                    alt="Search"
                  />
                </div>
                <div className=" flex items-center gap-2 bg-LightGrey rounded-full px-3 py-2 ">
                  <img className="  " src={Calendar} alt="Calendar" />
                  <span className=" text-[13px] leading-[18.2px] font-medium ">
                    Filter
                  </span>
                </div>
              </div>
            </div>
            <FilterTable />
            <TableBody />
          </div>
        </div>
      </div>
    </div>
  );
}
