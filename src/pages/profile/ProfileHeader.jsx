import React from "react";
import { GetIcon } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import classNames from "classnames";

function ProfileHeader() {
  const { username } = useParams();

  return (
    <div className="profileHeader w-full">
      <div className=" pt-[30px] flex">
        <div className="flex w-full pb-11 border-b border-inactive_line">
          <div className=" w-[291px] mr-[16px] flex justify-center">
            <img
              className=" w-[150px] -ml-3 rounded-full"
              src="../../../public/defaultProfileImg.jpg"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="flex gap-2 h-10 items-center  ">
              <span className=" text-xl pr-4">usernamea</span>
              <button className=" px-4 py-[0.36rem] bg-[#efefef] rounded-lg text-sm font-semibold">
                Edit profile
              </button>
              <button className=" p-2">
                <GetIcon name="settings" size={24} />
              </button>
            </div>
            <div className=" flex gap-8 h-10 items-center  pt-4">
              <div>
                <span className=" font-semibold">12</span> posts
              </div>
              <div>
                <span className=" font-semibold">345</span> followers
              </div>
              <div>
                <span className=" font-semibold">431</span> folowing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center gap-14 ">
        <NavLink
          end
          to={`/${username}`}
          className={({ isActive }) =>
            classNames({
              "flex gap-[6px] pt-5 -mt-[1px] items-center text-xs font-semibold tracking-widest": true,
              " text-active_profile_nav stroke-active_profile_nav border-t border-black":
                isActive,
              "text-inactive_text stroke-inactive_text": !isActive,
            })
          }
        >
          <GetIcon name="posts" size={12} />
          POSTS
        </NavLink>
        <NavLink
          to={`/${username}/saved`}
          
          className={({ isActive }) =>
            classNames({
              "flex gap-[6px] pt-5 -mt-[1px] items-center text-xs font-semibold tracking-widest": true,
              " text-active_profile_nav stroke-active_profile_nav border-t border-black":
                isActive,
              "text-inactive_text stroke-inactive_text": !isActive,
            })
          }
        >
          <GetIcon name="saved" size={12} />
          SAVED
        </NavLink>
        <NavLink
          to={`/${username}/tagged`}
          
          className={({ isActive }) =>
            classNames({
              "flex gap-[6px] pt-5 -mt-[1px] items-center text-xs font-semibold tracking-widest": true,
              " text-active_profile_nav stroke-active_profile_nav border-t border-black":
                isActive,
              "text-inactive_text stroke-inactive_text": !isActive,
            })
          }
        >
          <GetIcon name="tagged" size={12} />
          TAGGED
        </NavLink>
      </div>
    </div>
  );
}

export default ProfileHeader;
