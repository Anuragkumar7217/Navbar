import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-8">
        <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
    </div>
  );
};

export default App;








// import { useState } from "react";
// import { BsChevronDown, BsChevronRight  } from "react-icons/bs";
// import { MdAccountCircle } from "react-icons/md";
// import Menus from "./data.json";

// const App = () => {
//   const [downwardMenuOpen, setdownwardMenuOpen] = useState(false);
//   const [popupMenuOpen, setpopupMenuOpen] = useState(false);
//   const [subPopupOpen, setSubPopupOpen] = useState(false); 

//   return (
//     <div className="flex">
//       <div className="bg-purple-800 h-screen p-4 pt-8 w-36 relative">
//         <div className="inline-flex cursor-pointer">
//           <MdAccountCircle className="bg-white text-purple-900 text-2xl rounded-full mt-1 mr-2" />
//           <h1 className="text-white font-medium text-xl">LogIN</h1>
//         </div>

//         {/* Menu Items */}
//         <ul className="pt-2">
//           {Menus.map((menu, index)=>(
//             <>
//               <li key={index} className="flex items-center text-gray-100 text-sm p-2 mt-2 cursor-pointer hover:bg-purple-700 rounded-md"
//                 onClick={() => {
//                   if (menu.downwardMenu) setdownwardMenuOpen(!downwardMenuOpen);
//                   if (menu.popupMenuItems) setpopupMenuOpen(!popupMenuOpen);
//                 }}
//               >
//                 <span className="text-base">{menu.title}</span>
//                 {menu.downwardMenu && <BsChevronDown className={`ml-auto transition-transform ${downwardMenuOpen && "rotate-180"}`} />}
//                 {menu.popupMenuItems && <BsChevronRight className={`ml-auto transition-transform ${popupMenuOpen && "rotate-180"}`} />}
//               </li>

//               {/* Downward Menu */}
//               {menu.downwardMenu && downwardMenuOpen && (
//                 <ul>
//                   {menu.downwardMenuItems.map((downwardItem, downwardIndex)=>(
//                     <li key={downwardIndex} className="flex items-center text-gray-100 text-sm p-1 mx-4 cursor-pointer hover:bg-purple-700 rounded-md">
//                       <span>{downwardItem.title}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {/* Popup Menu */}
//               {menu.popupMenuItems && popupMenuOpen && (
//                 <ul className="absolute bg-purple-900 w-full text-gray-100 rounded-md p-2 top-[30%] left-[102%]">
//                   {menu.popupMenuItems.map((popupItem, popupIndex) => (
//                     <li key={popupIndex}>
//                       <div
//                         className="flex items-center text-sm p-2 cursor-pointer hover:bg-purple-700 rounded-md"
//                         onClick={() => {
//                           if (popupItem.subItems) setSubPopupOpen(!subPopupOpen);
//                         }}
//                       >
//                         <span>{popupItem.title}</span>
//                         {popupItem.subItems && (<BsChevronRight className={`ml-auto transition-transform ${ subPopupOpen && "rotate-180" }`} />
//                         )}
//                       </div>

//                       {/* Sub-PopupMenu*/}
//                       {popupItem.subItems && subPopupOpen && (
//                         <ul className="absolute bg-purple-800 w-full text-gray-100 rounded-md p-2 top-0 left-[102%]">
//                           {popupItem.subItems.map((subItem, subIndex) => (
//                             <li key={subIndex} className="text-sm p-2 cursor-pointer hover:bg-purple-700 rounded-md" >
//                               {subItem.title}
//                             </li>
//                           ))}
//                         </ul>
//                       )}

//                     </li>
//                   ))}
//                 </ul>
//               )}

//             </>
//           ))}
//         </ul>
//       </div>

//       <div className="p-8">
//         <h1 className="text-2xl font-semibold">Homepage</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
