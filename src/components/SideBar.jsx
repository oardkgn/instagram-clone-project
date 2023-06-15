import React from "react";
import { GetIcon } from "../assets/icons";
import { logOut } from "../firebase";
import MoreSection from "./MoreSection";
import { useState } from "react";

function SideBar() {

const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex flex-col pb-6 justify-between w-[72px] xl:w-[244px] h-screen border-r  ">
      <div className="">
        <div className="pt-10 hidden xl:block pl-6 pb-3">
          <GetIcon name="instagram" size={103} />
        </div>
        <div className="pt-10 block xl:hidden pl-6 pb-3">
          <GetIcon name="logo" size={103} />
        </div>
        <ul className="pt-6 px-3 flex flex-col flex-shrink-0 gap-2">
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="home" />
              </div> <span className="hidden xl:block font-bold">Home</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="search" />
              </div> <span className=" hidden xl:block">Search</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="explore" />
              </div> <span className="hidden xl:block">Explore</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="reels" />
              </div> <span className=" hidden xl:block">Reels</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="msg" /> 
              </div><span className=" hidden xl:block">Messages</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="notify" />
              </div> <span className=" hidden xl:block">Notifications</span>
            </a>
          </li>
          <li>
            <a
              href=""
              className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="create" />
              </div> <span className=" hidden xl:block">Create</span>
            </a>
          </li>
          <li>
            <div>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all pl-3 items-center  py-3 rounded-md flex gap-4"
              >
                <img
                  className=" w-6 rounded-full group-hover:scale-105 transition-all"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViRQJ7b7BJff6G7GN5gxbJLlG9h8ErWVRCeYPMOM&s"
                  alt=""
                />{" "}
                <span className=" hidden xl:block">Profile</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <ul className="">
        <li className="px-3 relative">
          {showMore && <MoreSection showMore={showMore} />}
          <button
            onClick={ () => setShowMore(!showMore)}
            className="w-full group hover:bg-gray-100 transition-all pl-3  items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" group-hover:scale-105 transition-all">
              <GetIcon name="menu" />
            </div> <span className=" hidden xl:block">More</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
