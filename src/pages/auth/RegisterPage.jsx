import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { AiFillFacebook } from "react-icons/ai";
import Divider from "../../components/Divider";
import RegFormSection from "../../components/loginPage/RegFormSection";
import Footer from "../../components/Footer";

function RegisterPage() {
  return (
    <div className="pt-12">
      <div className="w-full h-screen  flex items-center justify-center">
        <div className=" w-[350px] flex flex-col">
          <div className="flex md:border px-10 border-inactive_line justify-center flex-col pt-12 pb-6">
            <div className='  self-center w-44 h-14 bg-[url("https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png")] bg-left-top bg-[length:176px_186px]'></div>
            <p className=" text-center pt-2 pb-4 font-semibold text-inactive_text text-[17px] ">
              Sign up to see photos and videos from your friends.
            </p>
            <Button>
              <span className="text-[20px] block py-2 mr-1">
                <AiFillFacebook />
              </span>
              Log in with Facebook
            </Button>
            <Divider />
            <RegFormSection />
          </div>
          <div className=" flex p-6 gap-1 mt-[0.53rem] text-sm md:border justify-center items-center border-inactive_line">
            <p>Have an account?</p>
            <Link
              to={"/auth/login"}
              className=" text-[#5295F6] font-semibold"
              href=""
            >
              Log in
            </Link>
          </div>
          <div className=" mt-4">
            <p className=" text-sm text-center">Get the app.</p>
            <div className="flex justify-center gap-2 mt-4">
              <button className=" w-[134px] h-[40px]">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  alt=""
                />
              </button>
              <button className=" w-[110px] h-[40px]">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
