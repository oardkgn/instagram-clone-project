import React from "react";

function FormSection() {
  return (
    <div className=" w-[270px] pt-8">
      <form action="">
        <input
          className="w-full outline-none bg-[#FAFAFA] mb-[0.3rem] focus:border-[#A8A8A8] border border-inactive_line rounded text-sm p-2 placeholder:text-inactive_text placeholder:text-xs"
          placeholder="Phone number, username, or email"
          type="text"
        />
        <input
          className="w-full outline-none bg-[#FAFAFA] border border-inactive_line focus:border-[#A8A8A8] rounded text-sm p-2 placeholder:text-inactive_text placeholder:text-xs"
          placeholder="Password"
          type="text"
        />
        <div className=" p-[1.1rem] pl-1 flex items-center gap-[0.4rem]">
          <input
            className=" w-4 h-4 outline-none accent-white ring-0"
            type="checkbox"
            name=""
            id="save"
          />
          <label className=" text-[12px]" htmlFor="save">
            Save login info
          </label>
        </div>
        <button
          className=" py-[0.38rem] text-white w-full font-semibold text-sm rounded-lg bg-[#4CB5F9]"
          type="submit"
        >
          Log in
        </button>
      </form>
      <div className="flex items-center mt-[0.85rem]">
        <div className="w-full h-[0.7px] bg-inactive_line"></div>
        <div className=" font-semibold text-[0.82rem] px-4 text-inactive_text">
          OR
        </div>
        <div className="w-full h-[0.7px] bg-inactive_line"></div>
      </div>
      <div className="flex flex-col items-center pb-5 gap-[1rem] mt-7">
        <a href="#" className=" flex w-fit items-center ">
          <div className=" w-4 h-4 bg-[position:-414px_-259px] bg-[url('https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png')]"></div>
          <div className=" -mt-[2px] text-[#385185] font-semibold text-[14px] pl-2">
            Log in with Facebook
          </div>
        </a>
        <p className=" text-[#00376B] text-[12px]">Forgot password?</p>
      </div>
    </div>
  );
}

export default FormSection;
