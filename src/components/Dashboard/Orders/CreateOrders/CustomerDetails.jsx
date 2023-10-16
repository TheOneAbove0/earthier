import React from "react";
import { useState } from "react";
import { ChevronDown } from "../../../assets/icons";

export default function CustomerDetails() {
  const [selectedOption, setSelectedOption] = useState("homeDelivery");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className=" flex flex-col gap-4 ">
      <div className=" rounded-2xl bg-white flex flex-col gap-4 p-4">
        <div className=" font-medium  text-[15px] leading-[20px] ">
          Customer Details
        </div>
        <div className=" flex flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Full Name <span className=" text-Danger ">*</span>
          </div>
          <input
            className=" p-4 w-full bg-LightGrey focus:outline-none "
            type="text"
            placeholder="Sailesh Karki "
            required
          />
        </div>

        <div className="flex w-full  gap-4  ">
          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">Email address</div>
            <input
              className=" p-4 w-full bg-LightGrey focus:outline-none "
              type="email"
              placeholder="email@gmail.com"
            />
          </div>

          <div className=" flex w-full flex-col gap-2 ">
            <div className=" text-xs leading-[16px] ">
              Phone No.<span className=" text-Danger ">*</span>
            </div>
            <input
              className=" p-4 w-full bg-LightGrey focus:outline-none "
              type="text"
              placeholder="98632973209"
              required
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">
        <div className=" text-sm leading-[20px] tracking-[2%] ">Delivery Method</div>

        <div className="flex deliveryMethod w-fit">
          <div
            className={`flex gap-2 p-4 ${
              selectedOption === "homeDelivery"
                ? "bg-BlueColor bg-opacity-10 pr-[17px]"
                : ""
            }`}
          >
            <input
              type="radio"
              checked={selectedOption === "homeDelivery"}
              onChange={() => handleOptionChange("homeDelivery")}
            />
            <span className="text-sm leading-[16.44px] tracking-[4%]">
              Home Delivery
            </span>
          </div>
          <div
            className={`flex gap-2 p-4 ${
              selectedOption === "pickUp"
                ? "bg-BlueColor bg-opacity-10 pr-[69px]"
                : ""
            }`}
          >
            <input
              type="radio"
              checked={selectedOption === "pickUp"}
              onChange={() => handleOptionChange("pickUp")}
            />
            <span className="text-sm leading-[16.44px] tracking-[4%]">
              Pick up
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">
        <div className=" text-sm leading-[20px] tracking-[2%] ">Payment</div>

        <div className=" flex flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Payment Status<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Paid</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          Payment Mode<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>ConnectIPS</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

      </div>



      <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">

      <div className=" text-sm leading-[20px] tracking-[2%] ">Shipping Details</div>

      <div className=" flex flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          Shipping Mode<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Express</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex w-full gap-4  items-center">
        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          District<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Kathmandu</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          Area<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Bansbari, Maharajgunj</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
        </div>

        <div className=" flex w-full gap-4 ">
        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          Location<span className=" text-Danger ">*</span>
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Bansbari, Pipalbot</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>

        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
          Landmark
          </div>
          <div className=" p-4 py-[14px] justify-between items-center flex w-full bg-LightGrey focus:outline-none " >
            <span>Near Bigmart</span>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}
