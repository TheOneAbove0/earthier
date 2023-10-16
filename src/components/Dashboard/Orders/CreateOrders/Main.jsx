import React from "react";
import Products from "./Products/Products";
import Details from "./DetailsPage/Details";

export default function Main() {
  return (
    <div className=" flex w-full gap-4 ">
      <div className="  w-full ">
        <Products />
      </div>
      <div className="  w-full ">
        <Details />
      </div>
    </div>
  );
}
