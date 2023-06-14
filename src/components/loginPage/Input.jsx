import React, { useEffect, useState } from "react";

function Input({ type, value, onChange, label, id }) {

  const [showing, setShowing] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  const [typeCurrent, setTypeCurrent] = useState(type);

 useEffect(() => {
    if (id == 2 && value) {
        setShowBtn(true)
    }else{
        setShowBtn(false)
    }
 }, [value])
 

  return (
    <label className="block relative" htmlFor={`input${id}`}>
      <input
        id={`input${id}`}
        className={
          id == 1
            ? "w-full valid:pt-[16px] valid:pb-[4px] transition-all text-xs peer outline-none bg-[#FAFAFA] mb-[0.3rem] focus:border-[#A8A8A8] border border-inactive_line rounded p-[10px] pl-[8px] "
            : "w-full pr-14 valid:pt-[16px] valid:pb-[4px] transition-all  text-xs peer outline-none bg-[#FAFAFA] border border-inactive_line focus:border-[#A8A8A8] rounded p-[10px] pl-[8px]"
        }
        required={true}
        onChange={(e) => onChange(e.target.value)}
        type={typeCurrent}
      />
      <small
        className={
          id == 1
            ? "arda transition-all text-inactive_text peer-valid:top-[0.16rem] peer-valid:left-[-0.8rem] peer-valid:scale-[82%] text-xs text-left absolute left-[0.6rem] top-[0.68rem]"
            : "ege transition-all text-inactive_text peer-valid:top-[0.16rem] peer-valid:left-[0.20rem] peer-valid:scale-[82%] text-xs text-left absolute left-[0.6rem] top-[0.68rem]"
        }
      >
        {label}
      </small>
      {showBtn ? <button type="button" onClick={() => {
        setShowing(!showing)
        setTypeCurrent(showing ? "password" : "text")
      }} className="absolute top-[0.5rem] right-[0.5rem] text-sm font-semibold hover:text-[#909090]">{!showing ? "Show" : "Hide"}</button> : null}
    </label>
  );
}

export default Input;
