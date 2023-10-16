import React, { useState } from "react";
import SelectProducts from "./Select/SelectProducts";
import { Minus, Plus } from "../../../../assets/icons";

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectAndClose = (products, price) => {
    setSelectedProducts(products);
    setTotalPrice(price);
  };
  console.log(selectedProducts);

  return (
    <>
      <div className=" w-full bg-white rounded-2xl  p-4 ">
        <div className="flex flex-col min-h-[226px] max-h-[402px] justify-between items-start">
          <div className="font-medium text-[15px] leading-[20px] self-start">
            Products
          </div>
          <div className=" h-[420px] w-full flex flex-col gap-6 overflow-y-scroll scrollbar-hidden pt-4  ">
            {selectedProducts.map((product, index) => (
              <div
                key={index}
                className="w-full border-b flex items-center gap-4"
              >
                <input type="checkbox" />

                <img src={product.Image} alt="Laptop1" />
                <div className="flex w-full py-3 flex-col gap-2 ">
                  <div className="flex w-full flex-col gap-4 ">
                    <div className="font-semibold text-base leading-[18.78px] tracking-[4%] ">
                      {product.ProductName}
                    </div>
                    <div className="flex gap-6 ">
                      <div className="flex items-center gap-2 ">
                        <div className="font-medium text-sm leading-[21px] tracking-[-0.32px]  ">
                          Colour:
                        </div>
                        <div className="py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-BlueColor border text-BlueColor ">
                          Blue
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <div className="font-medium text-sm leading-[21px] tracking-[-0.32px]  ">
                          Size:
                        </div>
                        <div className="py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-BlueColor border text-BlueColor ">
                          XL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between ">
                    <span className="font-medium text-[15px] py-[7.5px] leading-[17.61px] tracking-[4%] ">
                      Rs. {product.Price}
                    </span>

                    <div className="flex justify-start items-center gap-4 ">
                      <span className=" text-sm leading-[16.44px] tracking-[4%] font-medium ">
                        Quantity
                      </span>
                      <div className="flex gap-[6.38px] items-center ">
                        <div>
                          <img src={Minus} alt="Minus" />
                        </div>
                        <span className="w-[32.45px] text-[12.73px] leading-[12.73px] font-semibold h-[32.09px] rounded-[6.36px] flex items-center justify-center bg-LightGrey ">
                          1
                        </span>
                        <div>
                          <img src={Plus} alt="Plus" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-medium text-[13px] leading-[18.2px] px-4 py-[10px] text-white w-fit rounded-lg bg-BlueColor self-start ">
            Select Products
          </div>
        </div>
      </div>
      <SelectProducts onSelectAndClose={handleSelectAndClose} />
    </>
  );
}
