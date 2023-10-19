import React, { useState } from "react";
import Permissions from "./Permissions";
import Allowed from "./Allowed";
import { categories } from "./Data";

export default function Main() {
  const initialCheckedItems = categories.map(() => ({
    actions: false,
    create: false,
    delete: false,
    permission: false,
  }));

  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [clickedItemText, setClickedItemText] = useState("");

  const handleCheckboxChange = (categoryIndex, permissionType) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[categoryIndex][permissionType] =
      !newCheckedItems[categoryIndex][permissionType];

    const clickedItemText = categories[categoryIndex][permissionType];

    setCheckedItems(newCheckedItems);
    setClickedItemText(clickedItemText);
  };

  return (
    <div className="flex w-full bg-white px-4 flex-col py-4 gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-xs leading-[16px]">
          Role{" "}
          <span className="text-[11px] leading-[13px] tracking-[0.07px] text-Danger">
            *
          </span>
        </div>
        <input
          type="text"
          placeholder="Eg: Worker"
          className="w-full p-4 text-xs leading-[16px] focus:outline-none bg-LightGrey rounded-lg"
        />
      </div>
      <div className="flex  w-full p-4 gap-4">
        <Permissions
          categories={categories}
          checkedItems={checkedItems}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Allowed
          categories={categories}
          checkedItems={checkedItems}
          clickedItemText={clickedItemText}
        />
      </div>
    </div>
  );
}
