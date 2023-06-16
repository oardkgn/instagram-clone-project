import React, { useEffect, useState } from "react";
import { GetIcon } from "../assets/icons";
import { IoIosCloseCircle } from "react-icons/io";
import { usersData } from "../data";
import User from "./User";
import classNames from "classnames";
classNames

function SearchBar({isSearchBarOpen}) {
  const [users, setUsers] = useState(usersData);
  useEffect(() => {
    setUsers(usersData);
  }, []);


  return (
    <div className={classNames({
        " absolute left-full overflow-hidden h-screen transition-all rounded-r-2xl border-r" : true,
        " !w-0 " : !isSearchBarOpen,
        " w-[397px] " : isSearchBarOpen
    })}>
      <h1 className="pt-6 pl-7 pb-10 text-2xl font-semibold">Search</h1>

      {/* search section */}

      <div className="px-2 mb-6 bg-[#EFEFEF] mx-4 group cursor-text rounded-lg flex items-center">
        <div className=" text-[#767676] pl-2  group-focus-within:hidden ">
          <GetIcon name="search" size={15} />
        </div>
        <input
          className="w-full py-2 pl-2 outline-none bg-transparent   placeholder:font-light placeholder:text-[#767676] "
          type="text"
          placeholder="Search"
        />
        <button
          onClick={(e) => {
            e.target.parentNode.parentNode.parentNode.childNodes[1].blur();
            e.target.parentNode.parentNode.parentNode.childNodes[1].value = "";
            e.target.parentNode.parentNode.parentNode.childNodes[0].style.display =
              "block";
          }}
          className="hidden group-focus-within:block text-[#767676] text-[16px]"
        >
          <IoIosCloseCircle />
        </button>
      </div>

      <hr />

      {/* results section */}

      <div className=" w-full flex flex-col pt-4 h-[calc(100vh-160px)] overflow-y-auto">
        <div className=" flex justify-between  px-7 items-center">
          <h3 className="font-semibold pb-3">Recent</h3>
          <button className=" text-sky-500 font-semibold text-sm hover:text-sky-900">
            Clear all
          </button>
        </div>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
