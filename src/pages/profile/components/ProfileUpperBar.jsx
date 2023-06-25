import React from "react";
import { GetIcon } from "../../../assets/icons";
import { useSelector } from "react-redux";

function ProfileUpperBar() {

    const user = useSelector(state => state.auth.user)

  return (
    <div className=" px-5 h-[44px] w-full border-b border-inactive_line flex items-center justify-between bg-white">
      <button>
          <GetIcon name="settings" size={24} />
      </button>
        <div className=" flex text-base font-semibold gap-2">
        <h4>{user.username}</h4>
        <button><GetIcon name="downArrow" size={16} /></button>
        </div>
        <button>
            <GetIcon name="addFriend" size={24} />
        </button>
    </div>
  );
}

export default ProfileUpperBar;
