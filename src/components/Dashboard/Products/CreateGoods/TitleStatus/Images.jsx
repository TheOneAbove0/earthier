import React, { useState } from "react";
import { Close, Image } from "../../../../assets/icons/index";

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
    <div className="flex bg-white pb-4 gap-2  ">
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
                  <img className="w-[15px] h-[15px]" src={Close} alt="Close" />
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
  );
}
