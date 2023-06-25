import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import UpperBar from "../components/UpperBar";

function MainLayout() {

  return (
    <div className="flex h-fit flex-col mobileForm:flex-row">
      <div className=" hidden mobileForm:block">
      <SideBar />
      </div>
      <div className="z-20 sticky top-0 mobileForm:hidden">
      <UpperBar />
      </div>
      <div className=" w-full">
        <Outlet />
        
        </div>
      
    </div>
  );
}

export default MainLayout;
