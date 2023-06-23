import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

function ChatBox({ chat }) {
  const currentChatId = useParams().conversationId;
  return (
    <NavLink
      to={`/direct/inbox/${chat.id}`}
      className={classNames({
        " flex gap-2 py-2 relative pl-6  cursor-pointer items-center": true,
        " hover:bg-[#FAFAFA]": currentChatId != chat.id,
        "bg-[#efefef]": currentChatId == chat.id,
      })}
    >
      <img className=" w-14 rounded-full" src={chat.src} alt="" />
      <div className="  flex flex-col gap-[5px] -mt-2">
        <h3 className=" text-sm font-semibold">{chat.name}</h3>
        <p
          className={classNames({
            " text-xs text-inactive_text": true,
            " font-bold text-black": chat.unread,
          })}
        >
          {chat.messages[0]}
        </p>
        {chat.unread && (
          <div className="w-[10px] h-[10px] bg-[#0095f6] rounded-full absolute right-4 top-1/2 -translate-y-1/2"></div>
        )}
      </div>
    </NavLink>
  );
}

export default ChatBox;
