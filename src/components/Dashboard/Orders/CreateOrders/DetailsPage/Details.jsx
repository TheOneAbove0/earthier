import React from "react";
import CustomerDetails from "./CustomerDetails";
import DeliveryMethod from "./DeliveryMethod";
import Payment from "./Payment";
import ShippingDetails from "./ShippingDetails";

export default function Details() {
  return (
    <div className=" flex flex-col gap-4 ">
      <CustomerDetails />
      <DeliveryMethod />
      <Payment />
      <ShippingDetails />
    </div>
  );
}
