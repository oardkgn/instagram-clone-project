import { NavLink } from "react-router-dom"


function ChatBox({chat}) {
  console.log(chat);
  return (
    <NavLink 
     to={`/inbox/${chat.id}`}
    className=" flex gap-2 py-2 hover:bg-[#FAFAFA] pl-6  cursor-pointer items-center">
        <img className=" w-14 rounded-full" src={chat.src} alt="" />
        <div className=" flex flex-col gap-[5px] -mt-2">
            <h3 className=" text-sm font-semibold">{chat.name}</h3>
            <p className=" text-xs">info Lorem ipsum dolor sit.</p>
        </div>
    </NavLink>
  )
}

export default ChatBox