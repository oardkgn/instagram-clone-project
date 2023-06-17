import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import Button from "../Button";
import { createUser } from "../../firebase";
import { RegisterSchema } from "../../validation/register-schema";

function RegFormSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (values, actions, e) => {
    let response = await createUser(values);
    if (response) {
      navigate(location.state?.return_url || "/", { replace: true });
    }
  };

  return (
    <div className=" w-[270px] pt-4">
      <Formik
        initialValues={{ email: "", fullname: "", username: "", password: "" }}
        validationSchema={RegisterSchema}
      >
        {({
          values,
          isSubmitting,
          isValid,
          dirty,
          actions,
          /* and other goodies */
        }) => (
          <form className="pb-4">
            <Input
              type="text"
              name="email"
              id={1}
              label="Mobile Number or Email"
            />
            <Input type="text" name="fullname" id={3} label="Full Name" />
            <Input type="text" name="username" id={4} label="Username" />
            <Input type="password" name="password" id={2} label={"Password"} />

            <p className=" text-center my-3 px-1 text-xs text-inactive_text">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <a className=" text-sky-950" href="">
                Learn More
              </a>{" "}
              <br />
              <br /> By signing up, you agree to our{" "}
              <a className=" text-sky-950" href="">
                Terms
              </a>{" "}
              ,{" "}
              <a className=" text-sky-950" href="">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className=" text-sky-950" href="">
                Cookies Policy
              </a>{" "}
              .
            </p>

            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(values, actions);
              }}
              disabled={!dirty || !isValid || isSubmitting}
            >
              <span className="-mt-1">Sign up</span>
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegFormSection;
