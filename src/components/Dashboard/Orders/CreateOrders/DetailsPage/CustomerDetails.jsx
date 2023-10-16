import React from "react";


export default function CustomerDetails() {
  return (
    <div className=" rounded-2xl bg-white flex flex-col gap-4 p-4">
      <div className=" font-medium  text-[15px] leading-[20px] ">
        Customer Details
      </div>
      <div className=" flex flex-col gap-2 ">
        <div className=" text-xs leading-[16px] ">
          Full Name <span className=" text-Danger ">*</span>
        </div>
        <input
          className=" p-4 w-full rounded-lg text-xs leading-[16px] bg-LightGrey focus:outline-none "
          type="text"
          placeholder="Sailesh Karki "
          required
        />
      </div>

      <div className="flex w-full  gap-4  ">
        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">Email address</div>
          <input
            className=" p-4 w-full rounded-lg text-xs leading-[16px] bg-LightGrey focus:outline-none "
            type="email"
            placeholder="email@gmail.com"
          />
        </div>

        <div className=" flex w-full flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Phone No.<span className=" text-Danger ">*</span>
          </div>
          <input
            className=" p-4 w-full rounded-lg text-xs leading-[16px] bg-LightGrey focus:outline-none "
            type="text"
            placeholder="98632973209"
            required
          />
        </div>
      </div>
    </div>
  );
}
