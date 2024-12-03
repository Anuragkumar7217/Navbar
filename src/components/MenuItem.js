import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${level > 0 ? "pl-4" : ""}`}>
      {/* Menu Item */}
      <div
        className={`flex justify-between items-center cursor-pointer hover:bg-purple-700 rounded-md p-2`}
        onClick={toggleOpen}
      >
        <span>{item.title}</span>
        {item.subItems && (
          <BsChevronDown className={`ml-auto transition-transform  ${isOpen ? "rotate-180" : ""}`} />
        )}
      </div>

      {/* Dropdown Rendering */}
      {isOpen && item.menuType === "dropdown" && item.subItems && (
        <div className="mt-2">
          {item.subItems.map((subItem, index) => (
            <MenuItem key={`dropdown-${index}`} item={subItem} level={level + 1} />
          ))}
        </div>
      )}

      {/* Popup Rendering */}
      {isOpen && item.menuType === "popup" && item.subItems && (
        <div className="absolute left-full top-0 mt-2 w-48 bg-purple-800 text-white shadow-lg rounded-md z-10">
          {item.subItems.map((subItem, index) => (
            <MenuItem key={`popup-${index}`} item={subItem} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
