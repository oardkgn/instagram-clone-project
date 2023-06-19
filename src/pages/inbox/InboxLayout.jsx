import React, { useEffect } from 'react'
import ChatsBar from './ChatsBar'
import ChatDiv from './ChatDiv'



function InboxLayout() {
  return (
    <div className=' flex h-full w-full'>
        <ChatsBar />
        <ChatDiv />
    </div>
  )
}

export default InboxLayout