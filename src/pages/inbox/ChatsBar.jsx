import { useState, useEffect } from "react";
import { GetIcon } from "../../assets/icons";
import ChatBox from "./components/ChatBox";
import { usersData } from "../../data";

function ChatsBar() {
  const [chats, setChats] = useState(null);
  useEffect(() => {
    setChats(usersData.slice(10, 20));
  }, []);
  
  return (
    <div className="w-[397px] min-w-[397px] border-r border-inactive_line">
      <div className=" flex justify-between pl-6  pr-7 mt-9 items-center">
        <div className="flex gap-2 items-center ">
          <h3 className=" text-xl font-bold">username</h3>
          <button>
            <GetIcon name="downArrow" size="12" />{" "}
          </button>
        </div>
        <button>
          <GetIcon name="createMsg" size={18} />
        </button>
      </div>
      <div className=" flex pl-6  justify-between items-center pr-6 pt-5 pb-2">
        <span className=" text-base font-bold">Messages</span>
        <button className=" text-sm font-semibold text-inactive_text">
          Requests
        </button>
      </div>
      <div className="chats pt-2 h-full max-h-[calc(100vh-116px)] overflow-y-scroll">
        {chats ?
          chats.map((chat) => {
            
           return <ChatBox chat={chat} key={chat.id} />;
          }) : "Loading..."}
      </div>
    </div>
  );
}

export default ChatsBar;
