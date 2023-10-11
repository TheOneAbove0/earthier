import React from "react";

export default function Quality() {
  return (
    <div className=" bg-white p-4 rounded-2xl ">
      <div className=" flex w-[441px] flex-col gap-4 ">
        <div className=" font-medium text-[15px] leading-[20px] ">Quantity</div>
        <div className="flex flex-col gap-2 ">
          <div className=" flex flex-col gap-2 ">
            <div className=" text-[12px] leading-[16px] ">
              Quantity
              <span className="text-[11px] leading-[13px] tracking-[0.07px] text-Danger ">
                *
              </span>
            </div>
            <input
              className=" p-4 text-xs rounded-lg leading-[16px] focus:outline-none bg-LightGrey border-[#DFE1E6] border "
              type="text"
              value={0}
            />
          </div>

          <div className=" flex flex-col gap-2 ">
            <div className=" text-[12px] leading-[16px] ">Product sku</div>
            <input
              className=" p-4 text-xs  rounded-lg leading-[16px] focus:outline-none bg-LightGrey border-[#DFE1E6] border "
              type="text"
              placeholder="E. g.  200"
            />
          </div>
        </div>

        <div className=" flex items-center gap-2   ">
          <input className=" w-3 h-3 bg-BlueColor " type="checkbox" checked />
          <p className=" text-xs leading-[16px] ">
            Continue selling even after product is out of stock
          </p>
        </div>
      </div>
    </div>
  );
}
