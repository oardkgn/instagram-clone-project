import React, { useEffect } from "react";
import ChatsBar from "./chatsBar.jsx";
import { Outlet } from "react-router-dom";

function InboxLayout() {
  return (
    <div className=" flex h-full w-full">
      <ChatsBar />
      <div className=" w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default InboxLayout;
