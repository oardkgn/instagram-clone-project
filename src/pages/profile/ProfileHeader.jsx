import {useState} from "react";
import { GetIcon } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import ProfilePopUp from "./components/ProfilePopUp";

function ProfileHeader() {
  const { username } = useParams();
  const [popUP, setPopUP] = useState(false);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="profileHeader w-full">
      <div className=" pt-[30px] flex">
        <div className="flex w-full pl-8 mobileForm:pl-0 pb-11 border-b border-inactive_line">
          <div className="mobileForm:w-[291px]  mobileForm:mr-[16px] flex  mobileForm:justify-center">
            <img
              className=" w-[90px] min-w-[90px] mr-8 mobileForm:mr-0  mobileForm:w-[150px] -ml-3 rounded-full"
              src="../../../public/defaultProfileImg.jpg"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="flex-col w-[250px] pr-8 mobileForm:flex-row gap-2 h-10 items-center  ">
              <div className=" flex items-center">
                <span className=" text-xl pr-0 mobileForm:pr-4">
                  {user.username}
                </span>
                <button className=" hidden mobileForm:block px-4 py-[0.36rem] bg-[#efefef] rounded-lg text-sm font-semibold">
                  Edit profile
                </button>
                <button onClick={() => setPopUP(true)} className=" p-2">
                  <GetIcon name="settings" size={24} />
                </button>
              </div>
              <button className=" mobileForm:hidden mt-3 w-full  px-4 py-[0.36rem] bg-[#efefef] rounded-lg text-sm font-semibold">
                Edit profile
              </button>
            </div>

            <div className=" hidden mobileForm:flex gap-8 h-10 items-center  pt-4">
              <div>
                <span className=" font-semibold">12</span> posts
              </div>
              <div>
                <span className=" font-semibold">345</span> followers
              </div>
              <div>
                <span className=" font-semibold">431</span> following
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-around py-[10px] mobileForm:hidden border-b border-inactive_line text-sm">
        <div className=" flex flex-col  text-center">
          <span className="font-semibold">12</span>
          <span className=" text-inactive_text">posts</span>
        </div>
        <div className=" flex flex-col  text-center">
          <span className="font-semibold">345</span>
          <span className=" text-inactive_text">followers</span>
        </div>
        <div className=" flex flex-col  text-center">
          <span className="font-semibold">431</span>
          <span className=" text-inactive_text">following</span>
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
      {popUP && <ProfilePopUp setPopUP={setPopUP} />}
    </div>
  );
}

export default ProfileHeader;
