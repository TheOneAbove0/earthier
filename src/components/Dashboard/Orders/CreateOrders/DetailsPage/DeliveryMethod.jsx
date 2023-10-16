import React, { useState } from "react";

export default function DeliveryMethod() {
  const [selectedOption, setSelectedOption] = useState("homeDelivery");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="rounded-2xl bg-white flex flex-col gap-4 p-4 ">
      <div className=" text-sm leading-[20px] tracking-[2%] ">
        Delivery Method
      </div>

      <div className="flex deliveryMethod w-fit">
        <div
          className={`flex gap-2  p-4 ${
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
  );
}
