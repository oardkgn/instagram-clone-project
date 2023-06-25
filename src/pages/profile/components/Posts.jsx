import React from "react";

function Posts() {
  return (
    <div className="content w-full flex justify-center pt-20">
      <div className="nonPostProfile flex flex-col items-center">
        <div
          style={{
            backgroundPosition: "-128px -269px",
          }}
          className=' w-16 h-16 bg-no-repeat bg-[url("https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png")]'
        ></div>
        <h6 className=" text-3xl font-[1000] pt-3">Share Photos</h6>
        <p className=" text-sm text-[#616161] pt-3">
          When you share photos, they will appear on your profile.
        </p>
        <button className=" text-sky-500 hover:text-[#212121] pt-4 text-sm font-semibold tracking-tight">
          Share your first photo
        </button>
    
      </div>
      <div>{/* posts */}</div>
    </div>
  );
}

export default Posts;
