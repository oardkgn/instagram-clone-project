import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function MainLayout() {

  return (
    <div className="flex">
      <SideBar />
      <div className=" w-full">
        <Outlet />
        
        </div>
      
    </div>
  );
}

export default MainLayout;
