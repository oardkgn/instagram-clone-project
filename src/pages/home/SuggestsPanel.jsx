import React from "react";
import { useSelector } from "react-redux";
import { usersData } from "../../data";

function SuggestsPanel() {
  const suggestedUsers = usersData.slice(0, 5);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className=" pr-1 pt-2">
      <div className=" flex gap-5 items-center text-sm font-semibold">
        <img className=" w-14" src="public/defaultProfileImg.jpg" alt="" />
        <div className=" mr-auto ">
          <h4>{user.username}</h4>
          <p className=" font-light">Bio...</p>
        </div>
        <button className=" text-xs text-[#1ea1f7]">Switch</button>
      </div>
      <div className=" flex justify-between items-center">
        <p className=" text-inactive_text text-sm font-semibold">
          Suggested for you
        </p>
        <button className=" text-xs font-semibold py-4 items-center">
          See All
        </button>
      </div>
      <div>
        {suggestedUsers.map((item) => {
          return (
            <div key={item.id} className=" flex gap-3 py-[1px] items-center">
              <img className=" w-8 rounded-full" src={item.src} alt="" />
              <div className=" mr-auto">
                <h4>{item.name}</h4>
                <p className=" text-xs text-inactive_text">Suggested for you</p>
              </div>
              <button className="text-xs text-[#1ea1f7] font-semibold py-4 items-center">
                Follow
              </button>
            </div>
          );
        })}
      </div>
      <div className="minFooter pt-6  text-xs flex max-w-full flex-wrap items-center text-[#C7C7C7] ">
        <a href="" className="hover:underline">About</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">Help</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">Press</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">API</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span> 
        <a href="" className="hover:underline">Jobs</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">Privacy</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">Terms</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span> 
        <a href="" className="hover:underline">Locations</a><span className=" text-base px-[2px] h-[18px] leading-3">.</span>  
        <a href="" className="hover:underline">Language</a> <span className=" text-base px-[2px] h-[18px] leading-3">.</span>
        <a href="" className="hover:underline">Meta Verified</a>
      </div>
      <p className="pt-5 text-xs text-[#C7C7C7]">© 2023 INSTAGRAM FROM META</p>
    </div>
  );
}

export default SuggestsPanel;
