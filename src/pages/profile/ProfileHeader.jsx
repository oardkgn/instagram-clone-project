import React from 'react'
import { GetIcon } from '../../assets/icons'

function ProfileHeader() {
  return (
    <div className=' w-full pt-8 px-[130px] flex'>
        <div className='flex w-full max-w-7xl'>
            <div className='w-[35%] flex justify-center'>
            <img className=' w-[150px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViRQJ7b7BJff6G7GN5gxbJLlG9h8ErWVRCeYPMOM&s" alt="" />
            </div>
            <div className='w-[65%] '>
            <div className='flex gap-2 h-10 items-center  '>
                <span className=' text-xl pr-4'>username</span>
                <button className=' px-4 py-[0.4rem] bg-inactive_line rounded text-sm font-semibold'>Edit profile</button>
                <button className=' p-2'><GetIcon name="settings" size={24} /></button>
            </div>
            <div className=' flex gap-8 h-10 items-center  pt-4'>
                <div>12 posts</div>
                <div>345 followers</div>
                <div>431 folowing</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader