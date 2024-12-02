import { useState } from "react";
import { BsChevronDown, BsChevronRight  } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import Menus from "./data.json";

const App = () => {
  const [downwardMenuOpen, setdownwardMenuOpen] = useState(false);
  const [popupMenuOpen, setpopupMenuOpen] = useState(false);

  return (
    <div className="flex">
      <div className="bg-purple-800 h-screen p-4 pt-8 w-36 relative">
        <div className="inline-flex cursor-pointer">
          <MdAccountCircle className="bg-white text-purple-900 text-2xl rounded-full mt-1 mr-2" />
          <h1 className="text-white font-medium text-xl">LogIN</h1>
        </div>

        {/* Menu Items */}
        <ul className="pt-2">
          {Menus.map((menu, index)=>(
            <>
              <li key={index} className="flex items-center text-gray-100 text-sm p-2 mt-2 cursor-pointer hover:bg-purple-700 rounded-md"
                onClick={() => {
                  if (menu.downwardMenu) setdownwardMenuOpen(!downwardMenuOpen);
                  if (menu.popupMenu) setpopupMenuOpen(!popupMenuOpen);
                }}
              >
                <span className="text-base">{menu.title}</span>
                {menu.downwardMenu && <BsChevronDown className={`ml-auto transition-transform ${downwardMenuOpen && "rotate-180"}`} />}
                {menu.popupMenu && <BsChevronRight className={`ml-auto transition-transform ${popupMenuOpen && "rotate-180"}`} />}
              </li>

              {/* Downward Menu */}
              {menu.downwardMenu && downwardMenuOpen && (
                <ul>
                  {menu.downwardMenuItems.map((downwardItem, downwardIndex)=>(
                    <li key={downwardIndex} className="flex items-center text-gray-100 text-sm p-1 mx-4 cursor-pointer hover:bg-purple-700 rounded-md">
                      <span>{downwardItem.title}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Popup Menu */}
              {menu.popupMenu && popupMenuOpen && (
                <ul className="absolute bg-purple-900 w-full text-gray-100 rounded-md p-2 top-[32%] left-[150px]">
                  {menu.popupMenuItems.map((popupItem, popupIndex) => (
                    <li key={popupIndex} className="text-sm p-2 cursor-pointer hover:bg-purple-700 rounded-md">
                      {popupItem.title}
                    </li>
                  ))}
                </ul>
              )}

            </>
          ))}
        </ul>
      </div>

      <div className="p-8">
        <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
    </div>
  );
}

export default App;
