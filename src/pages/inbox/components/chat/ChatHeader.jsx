import React from 'react'
import { GetIcon } from '../../../../assets/icons'

function ChatHeader({currentChat}) {
  return (
    <div className=' w-full h-[75px] border-b border-inactive_line flex items-center px-4 justify-between'>
        <div className=' flex items-center gap-3'>
            <img src={currentChat.src} alt="" className=' w-11 h-11 rounded-full' />
            <h3 className=' font-semibold'>{currentChat.name}</h3>
        </div>
        <div className=' flex gap-3 pr-2'>
            <button><GetIcon name="telephone" size={24} /></button>
            <button><GetIcon name="video" size={24} /></button>
            <button><GetIcon name="info" size={24} /></button>
        </div>
    </div>
  )
}

export default ChatHeader