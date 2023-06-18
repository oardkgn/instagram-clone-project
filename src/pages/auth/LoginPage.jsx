import Footer from "../../components/Footer";
import FormSection from "../../components/loginPage/FormSection";
import ScreenShotSlide from "../../components/loginPage/ScreenShotSlide";
import { Link } from "react-router-dom";

function LoginPage() {


  return (
    <div className=" pb-36 relative ">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className=" flex justify-center md:gap-8 w-full h-[628px]">
          {/* login image slide section  */}
          <div className="hidden md:block">
            <ScreenShotSlide />
          </div>
          {/* login section */}
          <div className=" w-[350px] flex flex-col">
            <div className="flex md:border border-inactive_line justify-center flex-col pt-12 px-10 items-center">
              <div className=' w-44 h-14 bg-[url("https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png")] bg-left-top bg-[length:176px_186px]'></div>
              <FormSection />
            </div>
            <div className=" flex p-5 gap-1 mt-[0.53rem] text-sm md:border justify-center items-center border-inactive_line">
              <p>Don't have an account?</p>
              <Link to={"/auth/register"} className=" text-[#5295F6] font-semibold" href="">
                Sign up
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
      </div>
      {/* footer section */}

     <Footer />
    </div>
  );
}

export default LoginPage;
