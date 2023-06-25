import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import ProfileUpperBar from "./profile/components/ProfileUpperBar";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function MainLayout() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const [showUpBar, setShowUpBar] = useState(true);
  const [showProfileUpBar, setShowProfileUpBar] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("/direct/inbox")) {
      setShowUpBar(false);
    } else if (location.pathname.includes(user.username)) {
      setShowUpBar(false);
      setShowProfileUpBar(true);
    } else {
      setShowUpBar(true);
      setShowProfileUpBar(false);
    }
  }, [location]);

  return (
    <div className="flex h-fit flex-col mobileForm:flex-row">
      <div className=" hidden mobileForm:block">
        <SideBar />
      </div>
      {showUpBar && (
        <div className="z-20 sticky top-0 mobileForm:hidden">
          <UpperBar />
        </div>
      )}
      {showProfileUpBar && (
        <div className="z-20 sticky top-0 mobileForm:hidden">
          <ProfileUpperBar />
        </div>
      )}
      <div className=" w-full">
        <Outlet />
      </div>
      <div className=" mobileForm:hidden">
        <BottomBar />
      </div>
    </div>
  );
}

export default MainLayout;
