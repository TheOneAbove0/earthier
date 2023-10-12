import { useState } from "react";
import { CLoseButton } from "../../../../assets/icons/index";

const initialTags = ["Green", "Iphone", "Mac", "256 GB", "512 GB"];

export function TagList() {
  const [tags, setTags] = useState(initialTags);
  const [searchInput, setSearchInput] = useState("");

  const handleTagDelete = (tag) => {
    setTags(tags.filter((item) => item !== tag));
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="p-4 pt-0 relative">
      <div className="text-xs leading-[16px]">
        Tags
        <span className="text-Danger text-[11px] leading-[13px] tracking-[0.07px]">
          *
        </span>
      </div>
      <div>
        <input
          placeholder="Search tags"
          className="w-[408px] text-xs leading-[16px] focus:outline-none mt-2 bg-LightGrey px-4 rounded-lg py-4"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="flex flex-wrap list-none gap-2 pt-2 pb-4">
        {filteredTags.map((tag, index) => (
          <li key={index}>
            <div className="flex bg-LightGrey item-center gap-3 px-3">
              <span className="py-2 text-xs leading-[16px]">{tag}</span>
              <img
                className="my-[6px] w-[20px] h-[20px]"
                src={CLoseButton}
                alt="CloseButton"
                onClick={() => handleTagDelete(tag)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TagList;
