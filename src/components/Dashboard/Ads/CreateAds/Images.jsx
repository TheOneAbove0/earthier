import React, { useState } from "react";
import { Close, Image } from "../../../assets/icons/index";
import { Search } from "../../../assets/icons/index";

export default function Images() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    try {
      const uploadedImage = event.target.files[0];
      if (uploadedImage) {
        const imageName = uploadedImage.name;
        setImage({ file: uploadedImage, name: imageName });
      }
    } catch (error) {
      console.error("Error uploading image:", error); 
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    try {
      e.preventDefault();
      const droppedImage = e.dataTransfer.files[0];
      if (droppedImage) {
        const imageName = droppedImage.name;
        setImage({ file: droppedImage, name: imageName });
      }
    } catch (error) {
      console.error("Error dropping image:", error);
    }
  };

  return (
    <div className=" w-[776px] bg-white pb-4 gap-2  ">
      <div className="flex  gap-2  ">
        <div className="w-[50%]">
          {/* Left side image */}
          {image && (
            <div className="">
              <div className=" px-[28px] py-2 ">
                <img
                  className="w-[144px]  object-fill h-[120px]"
                  src={URL.createObjectURL(image.file)}
                  alt="uploaded"
                />
              </div>
              <div className="flex justify-between items-center p-[6px] ">
                {image && (
                  <p className="text-[7.5px] leading-[9.75px] tracking-[0.05px] text-Tertiary">
                    {image.name}
                  </p>
                )}
                {image && (
                  <button onClick={handleDeleteImage}>
                    <img
                      className="w-[15px] h-[15px]"
                      src={Close}
                      alt="Close"
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className="w-[50%] h-[153px]  rounded-2xl"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {/* Drag and drop area */}
          <div className="">
            <div className="w-full h-[153px] justify-center mt-2 Dashborder flex flex-col gap-[6px] items-center border-dashed rounded-2xl">
              <div className="flex flex-col items-center">
                <img className="w-6 mb-1 h-6" src={Image} alt="drop-down" />
                <span className="text-[13px] leading-[18px] tracking-[-0.08px]">
                  Drag and drop or
                </span>
              </div>

              <label
                htmlFor="fileInput"
                className="bg-LightGrey rounded-lg py-2 px-4 font-medium text-xs leading-[16px] cursor-pointer"
              >
                Upload an image
              </label>

              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div> 
          </div>
        </div>
        </div>

        <div className=" flex flex-col gap-2 ">
          <div className=" text-xs leading-[16px] ">
            Title{" "}
            <span className=" text-Danger text-[11px] leading-[13px] tracking-[0.07px] ">
              *
            </span>
          </div>
          <input
            className=" w-full rounded-lg p-4 text-xs leading-[16px]"
            type="text"
            placeholder="E.g. Laptop, Summer collection"
          />
        </div>

        <div>
            <div className=" text-xs leading-[16px] ">Link to</div>
            <div className=" flex gap-4 items-center ">
                <div className=" flex gap-2 items-center p-8 pr-0 ">
                    <input type="checkbox" className=" w-4 h-4 " />
                    <div className=" text-xs leading-[16px] ">Specific category</div>
                </div>
                <div className=" flex gap-2 items-center p-8 pr-0 ">
                    <input type="checkbox" className=" w-4 h-4 " />
                    <div className=" text-xs leading-[16px] ">Specific product</div>
                </div>
            </div>
            <div className=" flex gap-2 w-full ">
                <div className=" px-4 py-[14px] flex w-full bg-LightGrey  ">
                    <input  type="text" placeholder="Search category"/>
                    <img src={Search} alt="Search" />

                </div>
                <div className=" text-[11px] leading-[13px] tracking-[0.07px] px-8 py-[17.5px] rounded-lg border ">
                Browse
                </div>
            </div>

        </div>
      
    </div>
  );
}
