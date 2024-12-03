import React from "react";
import { MdAccountCircle } from "react-icons/md";
import menuData from "../data/menuData.json";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <div className="bg-purple-800 text-white h-screen w-48 p-4 pt-8 relative">
      <div className="inline-flex cursor-pointer">
        <MdAccountCircle className="bg-white text-purple-900 text-2xl rounded-full mt-1 mr-2" />
        <h1 className="text-white font-medium text-xl">LogIN</h1>
      </div>

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
