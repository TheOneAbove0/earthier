import React, { useMemo, useState } from "react";
import { SidebarData } from "./SideBarData";

export default function SideBar() {
    const [active, setActive] = useState("Home");

    const clickHandler = (label) => {
        setActive(label)

    }

    const memoizedActiveItem = useMemo(() => active, [active]);

  return (
    <div className="h-full border-r w-[210px]">
      <div className="pt-[24px] pl-[21px] pr-[16px]">
        <div className=" flex flex-col gap-2 ">
          {SidebarData.map((item, index) => (
            <div onClick={() =>clickHandler(item.title)}
              key={index}
              className={`flex pl-2 cursor-pointer gap-2 items-center w-full   rounded-lg ${memoizedActiveItem === item.title ? "border-BlueColor border text-BlueColor" : "border-white border"}`}
            >
              <img className="py-[11px]" src={item.icon} alt={item.title} />
              <div className="py-[10px] font-medium text-[13px] leading-[18.2px] ">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
