
import React, { useEffect, useRef } from "react";


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
        src={data[0].src}
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src={data[1].src}
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src={data[2].src}
        alt=""
      />
      <img
        className=" transition-opacity ease-in-out duration-[1700ms] opacity-0 bg-slate absolute right-[16px] bottom-[14px]"
        src={data[3].src}
        alt=""
      />
    </div>
  </div>
    )
}

export default ScreenShotSlide