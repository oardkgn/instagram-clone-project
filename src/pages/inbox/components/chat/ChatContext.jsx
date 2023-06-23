import classNames from "classnames";
import { key } from "localforage";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ScrollToBottom from 'react-scroll-to-bottom';
import { useScrollToBottom } from "react-scroll-to-bottom";

function ChatContext({ messages }) {

  const user = useSelector((state) => state.auth.user)
  
  
  

  return (
    <ScrollToBottom className="scroll overflow-auto flex flex-col pl-4 pt-2">
      {messages.map((item,key) => {
        return (
          <div key={key} className={classNames({
            " w-full flex items-center gap-2 py-2" :true,
            "justify-start":item.from.id != user.uid,
            "justify-end -ml-3":item.from.id == user.uid
          })}>
            {item.from.id != user.uid && <img className=" w-7 h-7 rounded-full self-end" src={item.from.avatar_url} alt="" />}
            <p className={classNames({
              " text-[15px] p-2 px-3 rounded-3xl max-w-[50%]":true,
              "bg-[#efefef]": item.from.id != user.uid,
              "bg-[#3797f0] text-white": item.from.id == user.uid,
            })}>{item.message}</p>
          </div>
        )
      })}
    </ScrollToBottom>
  );
}

export default ChatContext;
