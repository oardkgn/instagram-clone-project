
import React, { useEffect, useRef } from "react";



function ScreenShotSlide() {

const screenShot = useRef();

useEffect(() => {
  let images = screenShot.current.childNodes;
  let total = images.length;
  let current = 0;
  
  const slider = () => {
    if (current > 0) {
      images[current - 1].classList.add("opacity-0");
    } else {
      images[total - 1].classList.add("opacity-0");
    }
    images[current].classList.remove("opacity-0");
    if (current == total - 1) {
      current = 0;
    } else {
      current += 1;
    }
  }
  slider();
 const interval = setInterval(() => {
    slider();
  }, 4000);

  return() => {
    clearInterval(interval)
  }

}, [screenShot]);


  return (
    <div className="pt-1">
    <div
      ref={screenShot}
      className='w-[380px] relative h-[583px] bg-auto bg-top bg-[url("https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk")]'
    >
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src="../../../public/screenshots/screenshot1.png"
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src="../../../public/screenshots/screenshot2.png"
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src="../../../public/screenshots/screenshot3.png"
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src="../../../public/screenshots/screenshot4.png"
        alt=""
      />
    </div>
  </div>
    )
}

export default ScreenShotSlide