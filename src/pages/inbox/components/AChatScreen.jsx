import React from 'react'
import ChatHeader from './chat/ChatHeader'
import { useParams } from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import ChatContext from './chat/ChatContext';
import ChatBottom from './chat/ChatBottom';

function AChatScreen() {
  const chats = useOutletContext()[0];
  const currentChatId = useParams().conversationId
  const currentChat = chats.filter((item) => {
    if (item.id == currentChatId) {
      return item
       
    }else{
      return null
    }
  })

  return (
    <div className=''>
      <ChatHeader currentChat={currentChat[0]} />
      <ChatContext currentChat={currentChat[0]} />
      <ChatBottom />
    </div>
  )
}

export default AChatScreen