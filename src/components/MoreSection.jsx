import React, { useEffect } from "react";
import { GetIcon } from "../assets/icons";
import { logOut } from "../firebase";

function MoreSection({showMore}) {

   
  return (
    <div
    style={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }} 
    className="moreDiv absolute z-[9999] text-sm -top-[412px] rounded-2xl w-[266px]">
      <div className="bg-white p-2 rounded-t-xl">
        <ul>
          <li>
            <a
              href=""
              className="flex items-center p-2 py-[0.94rem] pl-4 gap-3 transition-all duration-200 hover:bg-gray-100 rounded-lg"
            >
              {" "}
              <GetIcon name="settings" /> <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 py-[0.94rem] pl-4 gap-3 transition-all duration-200 hover:bg-gray-100 rounded-lg"
            >
              {" "}
              <GetIcon name="activity" /> <span>Your activity</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 py-[0.94rem] pl-4 gap-3 transition-all duration-200 hover:bg-gray-100 rounded-lg"
            >
              {" "}
              <GetIcon name="saved" /> <span>Saved</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 py-[0.94rem] pl-4 gap-3 transition-all duration-200 hover:bg-gray-100 rounded-lg"
            >
              {" "}
              <GetIcon name="theme" /> <span>Switch appearance</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex items-center p-2 py-[0.94rem] pl-4 gap-3 transition-all duration-200 hover:bg-gray-100 rounded-lg"
            >
              {" "}
              <GetIcon name="report" /> <span>Report a problem</span>
            </a>
          </li>
        </ul>
      </div>
      <div className=" bg-zinc-100 h-[6px] w-full"></div>
      <div className="p-2 bg-white rounded-xl">
        <button className=" p-2 pl-4 py-[0.94rem] duration-200 hover:bg-gray-100 rounded-lg w-full text-start">Switch accounts</button>
        <hr className="mt-2 mb-2" />
        <button
        onClick={logOut}
        className=" p-2 pl-4 py-[0.94rem] duration-200 hover:bg-gray-100 rounded-lg w-full text-start">Log out</button>
      </div>
    </div>
  );
}

export default MoreSection;
