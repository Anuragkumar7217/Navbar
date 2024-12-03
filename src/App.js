import React from "react";
import Sidebar from "./components/Sidebar";
import { BsList } from "react-icons/bs";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <nav className="bg-purple-950 shadow flex items-center justify-between px-4 h-14">
          <div className="inline-flex cursor-pointer">
            <BsList className="text-white text-3xl mr-2" />
            <h1 className="text-white font-medium text-xl">Slider App</h1>
          </div>
        </nav>
      </div>

      <div className="flex">
        <Sidebar />

        <div className="p-8">
          <h1 className="text-2xl font-semibold">Homepage</h1>
        </div>
      </div>
    </div>
  );
};

export default App;