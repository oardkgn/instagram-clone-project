import React from "react";
import { GetIcon } from "../assets/icons";
import MoreSection from "./MoreSection";
import { useState } from "react";
import classNames from "classnames";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function SideBar() {
  const [showMore, setShowMore] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };

  return (
    <div>
      <div
        className={classNames({
          "flex relative flex-col pb-6 justify-between w-[72px] xl:w-[244px] h-screen transition-all border-r": true,
          "!w-[71.2px]": searchBar,
        })}
      >
        <div>
          {!searchBar ? (
            <>
              <div className="pt-10 hidden xl:block pl-6 pb-3">
                <GetIcon name="instagram" size={103} />
              </div>
              <div className="pt-10 block xl:hidden pl-6 pb-3">
                <GetIcon name="logo" size={103} />
              </div>
            </>
          ) : (
            <div className="pt-10 block pl-6 pb-3">
              <GetIcon name="logo" size={103} />
            </div>
          )}
          <ul className="pt-6 px-3 flex flex-col flex-shrink-0 gap-2">
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="home" />
                </div>
                {!searchBar && (
                  <span className="hidden xl:block font-bold">Home</span>
                )}
              </a>
            </li>
            <li>
              <button
                onClick={handleSearch}
                className={`w-full group hover:bg-gray-100 transition-all px-3 items-center ${
                  searchBar && "border"
                }  py-3 rounded-md flex gap-4`}
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="search" />
                </div>
                {!searchBar && <span className=" hidden xl:block">Search</span>}
              </button>
            </li>
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="explore" />
                </div>
                {!searchBar && <span className="hidden xl:block">Explore</span>}
              </a>
            </li>
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="reels" />
                </div>
                {!searchBar && <span className=" hidden xl:block">Reels</span>}
              </a>
            </li>
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="msg" />
                </div>
                {!searchBar && (
                  <span className=" hidden xl:block">Messages</span>
                )}
              </a>
            </li>
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="notify" />
                </div>
                {!searchBar && (
                  <span className=" hidden xl:block">Notifications</span>
                )}
              </a>
            </li>
            <li>
              <a
                href=""
                className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
              >
                <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                  <GetIcon name="create" />
                </div>
                {!searchBar && <span className=" hidden xl:block">Create</span>}
              </a>
            </li>
            <li>
              <div>
                <Link
                  to={"/profile"}
                  className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
                >
                  <img
                    className="w-6 h-6  -ml-[1px] rounded-full group-hover:scale-105 transition-all"
                    src="../../../public/defaultProfileImg.jpg"
                    alt=""
                  />
                  {!searchBar && (
                    <span className=" hidden xl:block">Profile</span>
                  )}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <ul className="">
          <li className="px-3 relative">
            {showMore && <MoreSection showMore={showMore} />}
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-full group hover:bg-gray-100 transition-all px-3  items-center  py-3 rounded-md flex gap-4"
            >
              <div className=" group-hover:scale-105 transition-all">
                <GetIcon name="menu" />
              </div>
              {!searchBar && <span className=" hidden xl:block">More</span>}
            </button>
          </li>
        </ul>

        <SearchBar isSearchBarOpen={searchBar} />
      </div>
    </div>
  );
}

export default SideBar;
