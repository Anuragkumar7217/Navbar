import React from "react";
import menuData from "../data/menuData.json";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <div className="bg-purple-800 text-white h-screen w-48 px-4 pt-8 relative">
      <div>
        {/* Render Menu Items */}
        {menuData.map((item, index) => (
          <MenuItem key={`menu-item-${index}`} item={item} level={0} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
