import { useEffect } from "react";
import { GetIcon } from "../assets/icons";
import MoreSection from "./MoreSection";
import { useState } from "react";
import classNames from "classnames";
import SearchBar from "./SearchBar";
import { Link, NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
  const [showMore, setShowMore] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [msgBar, setMsgBar] = useState(false);
  const [nav, setNav] = useState(localStorage.getItem("nav"));

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    localStorage.setItem("nav", nav);
  }, [nav]);

  useEffect(() => {
    if (window.location.href == "http://localhost:5173/direct/inbox") {
      setMsgBar(true);
    }
  }, []);

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };

  return (
    <div>
      <div className={classNames({
            "w-[72px] xl:w-[244px] h-screen z-0": true,
            "!w-[71.2px]": msgBar,
          })}>

      </div>
      <div className=" fixed left-0 z-50 top-0">
        <div
          className={classNames({
            "flex relative flex-col pb-6 z-50 justify-between w-[72px] xl:w-[244px] h-screen transition-all border-r": true,
            "!w-[71.1px]": searchBar,
            "!w-[71.2px]": msgBar,
          })}
        >
          <div>
            {!searchBar && !msgBar ? (
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
                <NavLink
                  to={"/"}
                  onClick={() => {
                    setMsgBar(false);
                    setSearchBar(false);
                    setNav("home");
                  }}
                  className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
                >
                  <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                    {nav == "home" ? (
                      <GetIcon name="home" />
                    ) : (
                      <GetIcon name="homeInactive" />
                    )}
                  </div>
                  {!searchBar && !msgBar ? (
                    <span
                      className={classNames({
                        "hidden xl:block": true,
                        "font-bold": nav == "home",
                      })}
                    >
                      Home
                    </span>
                  ) : null}
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (!searchBar) {
                      setNav(`${nav} search`);
                    } else {
                      setNav(nav.split(" ")[0]);
                    }
                    handleSearch();
                  }}
                  className={`w-full group hover:bg-gray-100 transition-all px-3 items-center ${
                    searchBar && "border"
                  }  py-3 rounded-md flex gap-4`}
                >
                  <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                    <GetIcon name="search" width={searchBar ? 2.8 : 2} />
                  </div>
                  {!searchBar && !msgBar ? (
                    <span className=" hidden xl:block">Search</span>
                  ) : null}
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
                  {!searchBar && !msgBar ? (
                    <span className="hidden xl:block">Explore</span>
                  ) : null}
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
                  {!searchBar && !msgBar ? (
                    <span className=" hidden xl:block">Reels</span>
                  ) : null}
                </a>
              </li>
              <li>
                <NavLink
                  to={`/direct/inbox`}
                  onClick={() => {
                    setMsgBar(true);
                    setSearchBar(false);
                    setNav("message");
                  }}
                  className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4"
                >
                  <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                    {nav == "message" ? (
                      <GetIcon name="msgActive" />
                    ) : (
                      <GetIcon name="msg" />
                    )}
                  </div>
                  {!searchBar && !msgBar ? (
                    <span
                      className={classNames({
                        "hidden xl:block": true,
                        "font-bold": nav == "message",
                      })}
                    >
                      Messages
                    </span>
                  ) : null}
                </NavLink>
              </li>
              <li>
                <a className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex gap-4">
                  <div className=" -ml-[1px] group-hover:scale-105 transition-all">
                    <GetIcon name="notify" />
                  </div>
                  {!searchBar && !msgBar ? (
                    <span className=" hidden xl:block">Notifications</span>
                  ) : null}
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
                  {!searchBar && !msgBar ? (
                    <span className=" hidden xl:block">Create</span>
                  ) : null}
                </a>
              </li>
              <li>
                <div>
                  <NavLink
                    to={`/${user.username}`}
                    onClick={() => {
                      setNav("profile");
                    }}
                    className=" group hover:bg-gray-100 transition-all px-3 items-center  py-3 rounded-md flex flex-shrink-0 gap-4"
                  >
                    <img
                      className={classNames({
                        "w-6 h-6  -ml-[1px] rounded-full group-hover:scale-105 transition-all": true,
                        "outline-2 outline outline-gray-700": nav == "profile",
                      })}
                      src="../../../public/defaultProfileImg.jpg"
                      alt=""
                    />
                    {!searchBar && !msgBar ? (
                      <span
                        className={classNames({
                          "hidden xl:block": true,
                          "font-bold": nav == "profile",
                        })}
                      >
                        Profile
                      </span>
                    ) : null}
                  </NavLink>
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
                {!searchBar && !msgBar ? (
                  <span className=" hidden xl:block">More</span>
                ) : null}
              </button>
            </li>
          </ul>

          <SearchBar isSearchBarOpen={searchBar} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
