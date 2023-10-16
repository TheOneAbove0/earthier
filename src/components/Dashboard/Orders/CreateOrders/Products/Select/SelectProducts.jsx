import React, { useState } from "react";
import { Close, Minus, Plus, Search } from "../../../../../assets/icons";
import { SelectData, Color, Size } from "./SelectData";

export default function SelectProducts(props) {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState("XL");
  const [quantity, setQuantity] = useState(1);
  const [quantityStates, setQuantityStates] = useState(
    Array(SelectData.length).fill(false)
  );

  const handleCheckboxClick = (index) => {
    const newQuantityStates = [...quantityStates];
    newQuantityStates[index] = !newQuantityStates[index];
    setQuantityStates(newQuantityStates);
  };

  const handleQuantityChange = (value) => {
    if (quantity + value >= 1) {
      setQuantity(quantity + value);
    } else {
      setQuantity(1);
    }
  };
  const totalPrice = SelectData.reduce((total, item, index) => {
    if (quantityStates[index]) {
      return total + Number(item.Price) * quantity;
    }
    return total;
  }, 0);

  const handleSelectAndClose = () => {
    const selectedProducts = SelectData.filter(
      (_, index) => quantityStates[index]
    );
    props.onSelectAndClose(selectedProducts, totalPrice);
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
  };
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="mt-40 p-4 pt-0 flex flex-col gap-4 bg-white w-[600px] rounded-[16px]  ">
      <div className=" flex py-4 items-center justify-between ">
        <span className=" font-medium text-[15px] leading-[20px] ">
          Select Products
        </span>
        <img src={Close} alt="Close" />
      </div>

      <div className=" flex items-center gap-4 w-full ">
        <div className=" bg-LightGrey   flex w-full items-center rounded-lg ">
          <input
            placeholder="Search products "
            className=" bg-LightGrey  py-[10px] pl-2 focus:outline-none w-full text-[13px] leading-[18px] tracking-[-0.08px] "
            type="text"
          />
          <img className="pr-2" src={Search} alt="Search" />
        </div>
        <div
          onClick={handleSelectAndClose}
          className="text-white min-w-fit py-[10px] text-[13px] font-medium leading-[18.2px] px-4 rounded-lg bg-BlueColor "
        >
          Select & Close
        </div>
      </div>

      <div className="py-4 ">
        {SelectData.map((item, index) => (
          <div key={index} className="w-full border-b flex items-center gap-4">
            <input type="checkbox" onClick={() => handleCheckboxClick(index)} />

            <img src={item.Image} alt="Laptop1" />
            <div className="flex w-full py-3 flex-col gap-2 ">
              <div className="flex w-full flex-col gap-4 ">
                <div className="font-semibold text-base leading-[18.78px] tracking-[4%] ">
                  {item.ProductName}
                </div>
                <div className="flex gap-6 relative">
                  <div
                    className={`absolute bg-white flex justify-between items-center rounded-2xl p-4`}
                  >
                    <div className="text-sm leading-[16.44px] tracking-[4%]">
                      Color
                    </div>
                    <div className="flex gap-4 items-center">
                      {Color.map((colorItem, index) => (
                        <div
                          onClick={() => handleColorClick(colorItem.Color)}
                          key={index}
                          className={`${
                            activeColor === colorItem.Color
                              ? `border-BlueColor border text-BlueColor`
                              : "bg-LightGrey"
                          } py-3 px-4 text-base leading-[21px] tracking-[-0.32px] rounded-lg`}
                        >
                          {colorItem.Color}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className=" absolute bg-white  flex justify-between items-center rounded-2xl p-4 ">
                    <div className=" text-sm leading-[16.44px] tracking-[4%] ">
                      Size
                    </div>

                    <div className=" flex gap-4 items-center ">
                      {Size.map((item, index) => (
                        <div onClick={() => handleSizeClick(item.Size)}
                          key={index}
                          className={`${activeSize === (item.Size)?"text-BlueColor border-BlueColor border":'bg-LightGrey'} py-3 px-4  text-base leading-[21px] tracking-[-0.32px]  rounded-lg `}
                        >
                          {item.Size}
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <div className="flex items-center gap-2 ">
                    <div className="font-medium text-sm leading-[21px] tracking-[-0.32px]  ">
                      Colour:
                    </div>
                    {activeColor ? (
                      <div
                        className={`py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-BlueColor border text-BlueColor`}
                      >
                        {activeColor}
                      </div>
                    ) : (
                      <div
                        className={`py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-Tertiary border text-Tertiary`}
                      >
                        Select color
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="font-medium text-sm leading-[21px] tracking-[-0.32px]  ">
                      Size:
                    </div>
                    {/* <div className="py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-BlueColor border text-BlueColor ">
                      XL
                    </div> */}
                    <div className="py-[6px] font-bold text-base leading-[21px] tracking-[-0.32px] px-4 rounded-lg border-Tertiary border text-Tertiary ">
                      Select size
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between ">
                <span className="font-medium text-[15px] py-[7.5px] leading-[17.61px] tracking-[4%] ">
                  Rs.{" "}
                  {String(
                    Number(item.Price) *
                      Number(quantityStates[index] ? quantity : 1)
                  )}
                </span>

                {quantityStates[index] && (
                  <div className="flex justify-start items-center gap-4 ">
                    <span className=" text-sm leading-[16.44px] tracking-[4%] font-medium ">
                      Quantity
                    </span>
                    <div className="flex gap-[6.38px] items-center ">
                      <div onClick={() => handleQuantityChange(-1)}>
                        <img src={Minus} alt="Minus" />
                      </div>
                      <span className="w-[32.45px] text-[12.73px] leading-[12.73px] font-semibold h-[32.09px] rounded-[6.36px] flex items-center justify-center bg-LightGrey ">
                        {quantity}
                      </span>
                      <div onClick={() => handleQuantityChange(1)}>
                        <img src={Plus} alt="Plus" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
