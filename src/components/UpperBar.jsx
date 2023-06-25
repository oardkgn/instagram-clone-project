import React from 'react'
import { GetIcon } from '../assets/icons'
import {IoIosCloseCircle} from 'react-icons/io'
 
function UpperBar() {
  return (
    <div className=' h-[60px] w-full border-b border-inactive_line flex items-center bg-white'>
        <div className='pl-4 flex gap-2'>
        <GetIcon name="instagram" size={103} /> 
        <button className=' -mt-1'>
            <GetIcon name="downArrow" size={12} />
        </button>
        </div>
        <div className=' flex gap-5 absolute left-2 mini:left-[calc(100%-326px)] pr-4 items-center'>
            <div className=' relative'>
            <input placeholder='Search' type="text" className='pl-10 peer focus:pl-4 placeholder:font-light pr-8 rounded-lg w-[268px] outline-none px-4 py-[6px] bg-[#EFEFEF]' />
            <div className=' peer-focus:hidden absolute left-4 top-1/2 -translate-y-1/2'>
            <GetIcon name="search" size={15} />
            </div>
            <button className=' text-gray-400 text-[17px] hidden peer-focus:block absolute right-2 top-1/2 -translate-y-1/2'><IoIosCloseCircle /></button>
            </div>
            <button className=' hover:scale-110 transition-all'>
                <GetIcon name="notify" size={22} />
            </button>
        </div>
    </div>
  )
}

export default UpperBar