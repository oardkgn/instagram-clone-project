import React, { useEffect, useState } from "react";
import { GetIcon } from "../../../../assets/icons";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";

function ChatBottom({setMessages}) {
  const [message, setMessage] = useState("");
  const [bottomBar, setbottomBar] = useState(77);

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(message.length);
   if (message.length >= 2) {
    setMessages( messages => [
      ...messages,
      {
        from: {
          id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
          name: "Arda Akdoğan",
          username: "ardakdgn",
          avatar_url: "public/defaultProfileImg.jpg",
        },
        message: message,
      }
    ]);
    setMessage("")
   }
  }

  const handleTextArea = (e) => {
    if(e.nativeEvent.inputType === "insertLineBreak") return;
    setMessage(e.target.value);
 };

  return (
    <div className={`w-full flex pr-5 mobileForm:pr-0 items-center pt-3 flex-shrink-0 h-[${bottomBar}px]`}>
      <form onSubmit={sendMessage} className=" mx-4 bg-white min-h-[44px] h-auto flex items-center border w-full border-inactive_line rounded-3xl">
        <button className=" ml-[14px] mr-[12px]">
          <GetIcon name="emoji" />
        </button>
        <TextareaAutosize
          onHeightChange={(e) => {
            if (e <= 77) {
              setbottomBar(77)
            }else{
              setbottomBar(e)
            }
          }}
          value={message}
          onKeyUp={(event) => {
            if (event.key == "Enter") {
              event.preventDefault();
              document.querySelector(".sendBtn").click();
            }
          }}
          onChange={ e => {
            handleTextArea(e)
          }}
          className={classNames({
            " h-full outline-none bg-white overflow-auto leading-5 break-words pt-1 pb-1 bg-transparent placeholder:text-[.9375rem] placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 resize-none  placeholder:text-inactive_text flex-1 text-[15px] ": true,
            
          })}
          maxRows={7}
          placeholder="Message..."
        />
        {!message ? (
          <div className=" flex  items-center gap-4 px-4">
            <button>
              <GetIcon name="mic" />
            </button>
            <button>
              <GetIcon name="photo" />
            </button>
            <button>
              <GetIcon name="info" />
            </button>
          </div>
        ) : <button type="submit" className="sendBtn text-[#0095f6] font-semibold text-sm pl-3 pr-4 hover:text-[#00376B]">Send</button> }
      </form>
    </div>
  );
}

export default ChatBottom;
