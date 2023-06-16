import React, { Children } from "react";

function Button({type = "button",children,...props}) {
  return (
    <button
      className=" h-[32px] flex items-center justify-center disabled:bg-[#4CB5F9] text-white w-full font-semibold text-sm rounded-lg bg-[#0095F6] hover:bg-[#1877F2]"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
