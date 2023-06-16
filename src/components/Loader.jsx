import React from 'react'


function Loader() {
  return (
    <div className='w-full relative h-screen text-3xl'>
      <img className=' absolute w-[74px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="../../public/Instagram.png" alt="" />
      <img className=' absolute w-20 bottom-10 left-1/2 -translate-x-1/2' src="../../public/meta.png" alt="" />
    </div>
  )
}

export default Loader