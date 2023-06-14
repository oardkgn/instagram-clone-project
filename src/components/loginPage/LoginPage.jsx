
import FormSection from "./FormSection";
import ScreenShotSlide from "./ScreenShotSlide";




function LoginPage() {

  return (
    <div>
      <div className=" flex justify-center gap-8 w-full mt-[2.8rem] h-[628px]">
        {/* login image slide section  */}

        <ScreenShotSlide />

        {/* login section */}

        <div className=" w-[350px] grid">
          <div className="flex border border-inactive_line justify-center flex-col pt-9 items-center">
            <div className=' w-44 h-14 bg-[url("https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png")] bg-left-top bg-[length:176px_186px]'></div>
            <FormSection />
          </div>

          <div className=" flex p-[0.6rem] gap-1 mt-[0.53rem] text-sm border justify-center items-center border-inactive_line">
            <p>Don't have an account?</p>
            <a className=" text-[#5295F6] font-semibold" href="">
              Sign up
            </a>
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
  );
}

export default LoginPage;
