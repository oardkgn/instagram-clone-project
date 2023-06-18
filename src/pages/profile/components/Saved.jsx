import React from 'react'

function Saved() {
  return (
    <div className="content w-full flex justify-center pt-20">
      <div className="nonPostProfile flex flex-col items-center">
        <div
          style={{
            backgroundPosition: "-192px -269px",
          }}
          className=' w-16 h-16 bg-no-repeat bg-[url("https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png")]'
        ></div>
        <h6 className=" text-3xl font-[1000] pt-3">Your saved posts</h6>
        <p className=" text-sm text-[#616161] pt-3">
        When you save some posts, they'll appear here.
        </p>
        
      </div>
      <div>{/* posts */}</div>
    </div>
  )
}

export default Saved