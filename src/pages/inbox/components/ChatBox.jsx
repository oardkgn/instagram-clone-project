

function ChatBox() {
  return (
    <div className=" flex gap-3 pb-4 items-center">
        <img className=" w-14 rounded-full" src="../../../../public/defaultProfileImg.jpg" alt="" />
        <div className=" flex flex-col gap-[5px] -mt-2">
            <h3 className=" text-sm font-semibold">username</h3>
            <p className=" text-xs">info Lorem ipsum dolor sit.</p>
        </div>
    </div>
  )
}

export default ChatBox