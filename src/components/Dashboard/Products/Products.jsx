import React, { useState } from "react";
import { Search } from "../../assets/icons";
import { TableData } from "./TableData";

import { useNavigate } from "react-router-dom";
import TableBody from "./TableBody";
import ServicesTable from "./CreateServices/ServicesTable";

export default function Products() {
  const [active, setActive] = useState("Goods");
  const [activeItem, setActiveItem] = useState("Active");

  const clickHandler = (label) => {
    setActive(label);
  };
  const clickHandler2 = (label) => {
    setActiveItem(label);
  };

  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    if (active === "services") {
      navigate("/Products/createservices");
    } else if (active === "Goods") {
      navigate("/Products/createproducts");
    }
  };
  return (
    <div className=" bg-LightGrey   ">
      <div className=" pb-6 ">
        <div className=" flex items-center justify-between px-6 py-4  ">
          <div className=" font-bold text-[15px] leading-[20px] tracking-[-0.5px] ">
            Product
          </div>
          <div
            onClick={handleCreateCategoryClick}
            className=" py-3 cursor-pointer px-6 font-medium text-[13px] leading-[18.2px] text-white bg-BlueColor rounded-lg "
          >
            {active === "services" ? "Create Services" : "Create Goods"}
          </div>
        </div>

        <div className=" w-full px-6  ">
          <div className=" flex w-full pl-4 mb-4 bg-white rounded-lg  ">
            <div
              onClick={() => {
                clickHandler("Goods");
              }}
              className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-3 px-5 ${
                active === "Goods"
                  ? "text-BlueColor border-b-[2px] border-BlueColor  "
                  : ""
              } `}
            >
              Goods
            </div>
            <div
              onClick={() => {
                clickHandler("services");
              }}
              className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-3 px-5 ${
                active === "services"
                  ? "text-BlueColor border-b-[2px] border-BlueColor  "
                  : ""
              } `}
            >
              Services
            </div>
          </div>
        </div>

        <div className=" bg-white mx-6  mb-[14px] ">
          <div className=" flex justify-between items-center px-4 pt-4  pb-3  ">
            <div className=" flex w-full  bg-white rounded-lg  ">
              <div
                onClick={() => {
                  clickHandler2("Active");
                }}
                className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-2 px-5 ${
                  activeItem === "Active"
                    ? "text-BlueColor border-b-[2px] border-BlueColor  "
                    : ""
                } `}
              >
                Active
              </div>
              <div
                onClick={() => {
                  clickHandler2("Draft");
                }}
                className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-2 px-5 ${
                  activeItem === "Draft"
                    ? "text-BlueColor border-b-[2px] border-BlueColor  "
                    : ""
                } `}
              >
                Draft
              </div>
              <div
                onClick={() => {
                  clickHandler2("Archived");
                }}
                className={`font-medium cursor-pointer  text-[15px] leading-[20px] py-2 px-5 ${
                  activeItem === "Archived"
                    ? "text-BlueColor border-b-[2px] border-BlueColor  "
                    : ""
                } `}
              >
                Archived
              </div>
            </div>

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
          </div>

          <div className=" pb-4 ">
            {active === "Goods" && <TableBody />}
            {active === "services" && <ServicesTable />}
          </div>

          
        </div>
      </div>
    </div>
  );
}
