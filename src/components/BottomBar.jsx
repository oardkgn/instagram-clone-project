import React from "react";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetIcon } from "../assets/icons";
import { useSelector } from "react-redux";
import classNames from "classnames";

function BottomBar() {
  const [searchBar, setSearchBar] = useState(false);
  const [nav, setNav] = useState(localStorage.getItem("nav"));
  const user = useSelector((state) => state.auth.user);
  const handleSearch = () => {
    setSearchBar(!searchBar);
  };

  useEffect(() => {
    localStorage.setItem("nav", nav);
  }, [nav]);

  return (
    <div className="fixed left-0 bottom-0 z-50  h-12 w-full border-t border-inactive_line bg-white">
      <ul className="flex px-1 -mt-[2px] flex-shrink-0 items-center justify-evenly w-full gap-2">
        <li>
          <NavLink
            to={"/"}
            onClick={() => {
              setSearchBar(false);
              setNav("home");
            }}
            className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" -ml-[1px] group-hover:scale-105 transition-all">
              {nav == "home" ? (
                <GetIcon name="home" />
              ) : (
                <GetIcon name="homeInactive" />
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <a
            href=""
            className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" -ml-[1px] group-hover:scale-105 transition-all">
              <GetIcon name="explore" />
            </div>
          </a>
        </li>
        <li>
          <a
            href=""
            className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" -ml-[1px] group-hover:scale-105 transition-all">
              <GetIcon name="reels" />
            </div>
          </a>
        </li>
        <li>
          <a
            href=""
            className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" -ml-[1px] group-hover:scale-105 transition-all">
              <GetIcon name="create" />
            </div>
          </a>
        </li>
        <li>
          <NavLink
            to={`/direct/inbox`}
            onClick={() => {
              setSearchBar(false);
              setNav("message");
            }}
            className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
          >
            <div className=" -ml-[1px] group-hover:scale-105 transition-all">
              {nav == "message" ? (
                <GetIcon name="msgActive" />
              ) : (
                <GetIcon name="msg" />
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <div>
            <NavLink
              to={`/${user.username}`}
              onClick={() => {
                setNav("profile");
              }}
              className=" group hover:scale-105 transition-all px-3 items-center  py-3 rounded-md flex flex-shrink-0 gap-4"
            >
              <img
                className={classNames({
                  "w-6 h-6  -ml-[1px] rounded-full group-hover:scale-105 transition-all": true,
                  "outline-2 outline outline-gray-700": nav == "profile",
                })}
                src="../../../public/defaultProfileImg.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BottomBar;
