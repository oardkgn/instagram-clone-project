import React, { useState } from "react";
import ChatsBar from "./ChatsBar.jsx";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function InboxLayout() {

  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Rita Benford",
      src: "https://randomuser.me/api/portraits/women/57.jpg",
      messages:[
        "What are you doing?"
      ],
      unread:false
    },
    {
      id: 2,
      name: "Faustina Schlagtmans",
      src: "https://randomuser.me/api/portraits/women/3.jpg",
      messages:[
        "What are you doing?"
      ],
      unread:true
    },
    {
      id: 3,
      name: "Merill Kobke",
      src: "https://randomuser.me/api/portraits/men/76.jpg",
      messages:[
        "What are you doing?"
      ],
      unread:true
    },
    {
      id: 4,
      name: "Blakeley Melmore",
      src: "https://randomuser.me/api/portraits/men/5.jpg",
      messages:[
        "What are you doing?"
      ],
      unread:false
    },
    {
      id: 5,
      name: "Melody Pordall",
      src: "https://randomuser.me/api/portraits/men/90.jpg",
      messages:[
        "What are you doing?"
      ],
      unread:true
    },
  ]);

  return (
    <div className=" overflow-y-hidden flex h-full w-full">
      <Helmet>
        <title>Inbox • Direct</title>
      </Helmet>
      <ChatsBar chats={chats} />
      <div className=" max-w-[calc(100vw-110px)] mobileForm:w-full">
        <Outlet  context={[chats]} />
      </div>
    </div>
  );
}

export default InboxLayout;
