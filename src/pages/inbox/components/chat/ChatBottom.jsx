import React, { useEffect, useState } from "react";
import { GetIcon } from "../../../../assets/icons";
import classNames from "classnames";

function ChatBottom() {

    const [inputHeight, setInputHeight] = useState(44)

  useEffect(() => {
    let textarea = document.querySelector(".resize-ta");
    textarea.addEventListener("keyup", () => {
        console.log({textarea});
        
        // setInputHeight(textarea.scrollHeight); 
    });
  }, []);

  return (
    <div className=" min-h-[77px] h-auto w-full flex items-center">
      <div className=" mx-4 min-h-11 h-auto flex items-center border w-full border-inactive_line rounded-3xl">
        <button className=" ml-[14px] mr-[12px]">
          <GetIcon name="emoji" />
        </button>
        <textarea
        style={{height:inputHeight}}
          className={classNames({
            "resize-ta outline-none leading-5 break-words pt-1 pb-1 bg-transparent placeholder:text-[.9375rem] placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 resize-none  placeholder:text-inactive_text flex-1 text-[15px] " : true,
            "pt-3" : inputHeight == 44,
            "pt-1" : inputHeight != 44,
          })}
          placeholder="Message..."
        />
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
      </div>
    </div>
  );
}

export default ChatBottom;
