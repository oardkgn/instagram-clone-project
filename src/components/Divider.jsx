import React from "react";

function Divider() {
  return (
    <div className="flex items-center mt-[0.85rem]">
      <div className="w-full h-[0.7px] bg-inactive_line"></div>
      <div className=" font-semibold text-[0.82rem] px-4 text-inactive_text">
        OR
      </div>
      <div className="w-full h-[0.7px] bg-inactive_line"></div>
    </div>
  );
}

export default Divider;
