import React from 'react'
import {CgClose} from 'react-icons/cg'

function User({user}) {
  return (
    <div className='flex cursor-pointer hover:bg-gray-50  px-6 ml-[1px] py-1 items-center justify-between'>
        <div className=' border p-[2px] w-fit rounded-full'><img className=' w-11 h-11 rounded-full' src={user.src} alt="" /></div>
        <div className=' w-[75%]'>
            <h3 className='text-sm font-semibold'>{user.name}</h3>
            <p className=' text-sm text-inactive_text'>{user.desc}</p>
        </div>
        <button className=' text-inactive_text text-[20px]'><CgClose /></button>
    </div>
  )
}

export default User