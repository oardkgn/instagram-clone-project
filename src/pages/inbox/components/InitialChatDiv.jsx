import React from "react";
import { GetIcon } from "../../../assets/icons";

function InitialChatDiv() {
  return (
    <div className="initialChatDiv flex flex-col items-center">
      <GetIcon name="yourMsg" size={96} />
      <h3 className=" text-xl pt-3 pb-1">Your messages</h3>
      <p className=" text-sm  text-inactive_text pb-4">
        Send private photos and messages to a friend or group
      </p>
      <button className=" px-[16px] py-[7px] rounded-lg text-white bg-[#0095f6]">
        <span className="block -mt-[2px] text-sm font-semibold">
          Send message
        </span>
      </button>
    </div>
  );
}

export default InitialChatDiv;
