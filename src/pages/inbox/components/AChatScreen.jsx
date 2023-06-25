import React, { useState } from 'react'
import ChatHeader from './chat/ChatHeader'
import { useParams } from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import ChatContext from './chat/ChatContext';
import ChatBottom from './chat/ChatBottom';
import { messagesData } from '../../../data';

function AChatScreen() {

  const [messages, setMessages] = useState(messagesData)

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
    <div className=' h-[calc(100vh-50px)]  mobileForm:h-screen  mobileForm:max-h-screen pb-2 flex flex-col '>
      <ChatHeader currentChat={currentChat[0]} />
      <ChatContext currentChat={currentChat[0]} messages={messages} />
      <ChatBottom setMessages={setMessages} />
    </div>
  )
}

export default AChatScreen