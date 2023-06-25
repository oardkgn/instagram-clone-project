import { GetIcon } from "../../assets/icons";
import ChatBox from "./components/ChatBox";

function ChatsBar({ chats }) {
  return (
    <div className="  max-w-[104px] w-[104px] tabletForm:w-[397px] tabletForm:min-w-[397px] border-r border-inactive_line">
      <div className=" flex justify-center tabletForm:justify-between pl-6  pr-7 mt-9 items-center">
        <div className="hidden tabletForm:block gap-2 items-center ">
          <h3 className="  text-xl font-bold">username</h3>
          <button className="">
            <GetIcon name="downArrow" size="12" />{" "}
          </button>
        </div>
        <button className=" ml-1 tabletForm:ml-0">
          <GetIcon name="createMsg" size={18} />
        </button>
      </div>
      <div className=" hidden tabletForm:flex pl-6  justify-between items-center pr-6 pt-5 pb-2">
        <span className=" text-base font-bold">Messages</span>
        <button className=" text-sm font-semibold text-inactive_text">
          Requests
        </button>
      </div>
      <div className="chats pt-5 tabletForm:pt-3 h-full max-h-[calc(100vh-116px)] overflow-y-scroll">
        {chats
          ? chats.map((chat) => {
              return <ChatBox chat={chat} key={chat.id} />;
            })
          : "Loading..."}
      </div>
    </div>
  );
}

export default ChatsBar;
