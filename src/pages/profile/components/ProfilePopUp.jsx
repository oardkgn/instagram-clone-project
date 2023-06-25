import React from "react";
import { logOut } from "../../../firebase";

function ProfilePopUp({setPopUP}) {
  return (
    <div className="fixed z-[9999] left-0 top-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" flex flex-col items-center w-[260px] mobileForm:w-[400px] rounded-lg bg-white">
        <button className="py-3 border-b border-inactive_line w-full">Apps and Websites</button>
        <button className="py-3 border-b border-inactive_line w-full">QR Code</button>
        <button className="py-3 border-b border-inactive_line w-full">Notification</button>
        <button className="py-3 border-b border-inactive_line w-full">Settings and privacy</button>
        <button className="py-3 border-b border-inactive_line w-full">Supervision</button>
        <button onClick={logOut} className="py-3 border-b border-inactive_line w-full">Log Out</button>
        <button onClick={() => setPopUP(false)} className="py-3 w-full">Cancel</button>
      </div>
    </div>
  );
}

export default ProfilePopUp;
