import React from "react";
import Products from "./Products";
import CustomerDetails from "./CustomerDetails";

export default function Main() {
  return (
    <div className=" flex w-full gap-4 ">
      <div className="  w-full ">
        <Products />
      </div>
      <div className="  w-full ">
        <CustomerDetails />
      </div>
    </div>
  );
}
