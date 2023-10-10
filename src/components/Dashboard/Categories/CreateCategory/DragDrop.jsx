import React, { useState } from 'react';
import { Close, Image } from '../../../assets/icons/index';

export default function DragDrop() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      const imageName = uploadedImage.name;
      setImage({ file: uploadedImage, name: imageName });
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedImage = e.dataTransfer.files[0];
    if (droppedImage) {
      const imageName = droppedImage.name;
      setImage({ file: droppedImage, name: imageName });
    }
  };

  return (
    <div
      className="h-[313px] w-[400px] bg-white rounded-2xl"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="m-4">
        <span className="font-medium text-[15px] leading-[20px]">Image</span>
        <div className="w-full h-[253px] justify-center mt-2 Dashborder flex flex-col gap-[6px] items-center border-dashed rounded-2xl">
          <div className="flex flex-col items-center">
            {image ? (
              <div className="relative">
                <img
                  className="w-[240px] px-[64px] pt-4 pb-2 object-fill h-[200px]"
                  src={URL.createObjectURL(image.file)}
                  alt="uploaded"
                />
              </div>
            ) : (
              <>
                <img className="w-6 h-6" src={Image} alt="drop-down" />
                <span className="text-[13px] leading-[18px] tracking-[-0.08px]">
                  {image ? '' : 'Drag and drop or'}
                </span>
              </>
            )}
          </div>
          {!image && (
            <label
              htmlFor="fileInput"
              className="bg-LightGrey rounded-lg py-2 px-4 font-medium text-xs leading-[16px] cursor-pointer"
            >
              Upload an image
            </label>
          )}

          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
           <div className="flex items-center gap-8">
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
       
      </div>
    </div>
  );
}
