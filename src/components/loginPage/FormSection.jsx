import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { login } from "../../firebase";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { loginSchema } from "../../validation";

function FormSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);


  const handleSubmit = async (values, actions, e) => {
    await login(values.username, values.password)
    navigate(location.state?.return_url || "/" , {replace:true})
  };

  return (
    <div className=" w-[270px] pt-8">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(e) => { e.preventDefault(); console.log(13);}}
      >
        {({
          values,
          isSubmitting,
          isValid,
          dirty,
          actions
          /* and other goodies */
        }) => (
          <form>
            <div>{JSON.stringify(values, null, 2)}</div>
            <Input
              type="text"
              name="username"
              id={1}
              label="Phone number, username or email"
            />
            <Input type="password" name="password" id={2} label={"Password"} />

            <div className=" p-[1.1rem] pl-1 flex items-center gap-[0.4rem]">
              <input
                className=" w-4 h-4 outline-none accent-white ring-0"
                type="checkbox"
                name=""
                id="save"
              />
              <label className=" text-[12px]" htmlFor="save">
                Save login info
              </label>
            </div>
            <button
              className=" h-8 flex items-center justify-center disabled:bg-[#4CB5F9] text-white w-full font-semibold text-sm rounded-lg bg-[#0095F6] hover:bg-[#1877F2]"
              type="submit"
              onClick={e =>{ e.preventDefault(); handleSubmit(values,actions);}}
              disabled={isSubmitting}
            >
              <span className="-mt-1">Log in</span>
            </button>
          </form>
        )}
      </Formik>

      <div className="flex items-center mt-[0.85rem]">
        <div className="w-full h-[0.7px] bg-inactive_line"></div>
        <div className=" font-semibold text-[0.82rem] px-4 text-inactive_text">
          OR
        </div>
        <div className="w-full h-[0.7px] bg-inactive_line"></div>
      </div>
      <div className="flex flex-col items-center pb-[24px] gap-[1rem] mt-7">
        <a href="#" className=" flex w-fit items-center ">
          <div className=" w-4 h-4 bg-[position:-414px_-259px] bg-[url('https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png')]"></div>
          <div className=" -mt-[2px] text-[#385185] font-semibold text-[14px] pl-2">
            Log in with Facebook
          </div>
        </a>
        <p className=" text-[#00376B] text-[12px]">Forgot password?</p>
      </div>
    </div>
  );
}

export default FormSection;
