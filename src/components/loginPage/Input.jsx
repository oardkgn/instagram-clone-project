import React, { useEffect, useRef, useState } from "react";
import {useField} from "formik";
import classNames from "classnames";

function Input({ type, label, id, ...props }) {

  const [field, meta, helpers] = useField(props)
  const [showing, setShowing] = useState(false);

  const [typeCurrent, setTypeCurrent] = useState(type);



  function moveCursorToEnd(e) {
    setTimeout(function(){
        const input = document.querySelector(`#input${id}`);
        input.selectionStart = input.selectionEnd = input.value.length;
        input.focus();
    }, 0)
}

  return (
    <label className="block relative" htmlFor={`input${id}`}>
      <input
        id={`input${id}`}
        className={classNames({
          "px-2 outline-none text-xs border mb-1 border-inactive_line rounded bg-transparent w-full h-[38px]": true,
          "pt-[12px]": field.value,
        })} {...field} {...props}
        type={typeCurrent}
      />
      <small
        className={classNames({
          "absolute left-[10px] cursor-text pointer-events-none text-gray-400 transition-all": true,
          "text-xs top-3": !field.value,
          "text-[10px] top-[3px] left-[7px]": field.value
        })}
      >
        {label}
      </small>
      {type === 'password' && field.value ? (
        <button
          type="button"
          onClick={() => {
            moveCursorToEnd();
            setShowing(!showing);
            setTypeCurrent(showing ? "password" : "text");
          }}
          className="absolute top-[0.5rem] right-[0.5rem] text-sm font-semibold hover:text-[#909090]"
        >
          {!showing ? "Show" : "Hide"}
        </button>
      ) : null}
    </label>
  );
}

export default Input;
