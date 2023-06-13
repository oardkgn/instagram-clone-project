import React, { useState } from "react";
import FormSection from "./FormSection";


const data = [
  {
    id: 1,
    src: "public/screenshots/screenshot1.png",
  },
  {
    id: 2,
    src: "public/screenshots/screenshot2.png",
  },
  {
    id: 3,
    src: "public/screenshots/screenshot3.png",
  },
  {
    id: 4,
    src: "public/screenshots/screenshot4.png",
  },
];

function LoginPage() {

  const [CurrentSS, setCurrentSS] = useState(0);

  setTimeout(() => {
    if (CurrentSS != 3) {
      setCurrentSS(CurrentSS + 1)
    }else{
      setCurrentSS(0)
    }
  }, 2000);

  return (
    <div>
      <div className=" flex justify-center gap-8 w-full mt-[2.8rem] h-[628px]">

        {/* login image slide section  */}

        <div className="pt-1">
        <div className='w-[380px] relative h-[583px] bg-auto bg-top bg-[url("https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk")]'>
          <img className=" absolute right-[16px] bottom-[14px]" src={data[CurrentSS].src} alt="" />
        </div>
        </div>

        {/* login section */}

        <div className=" w-[350px]">
          <div className="flex border border-inactive_line justify-center flex-col pt-12 items-center">
            <div className=' w-44 h-14 bg-[url("https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png")] bg-left-top bg-[length:176px_186px]'></div>
            <FormSection />
          </div>

          <div className=" flex p-5 gap-1 mt-[0.63rem] text-sm border justify-center border-inactive_line">
            <p>Don't have an account?</p>
            <a className=" text-[#5295F6] font-semibold" href="">
              Sign up
            </a>
          </div>

          <div className=" mt-4">
            <p className=" text-sm text-center">Get the app.</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className=" w-[134px] h-[40px]">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  alt=""
                />
              </button>
              <button className=" w-[110px] h-[40px]">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
