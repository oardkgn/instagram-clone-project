import FormSection from "../components/loginPage/FormSection";
import ScreenShotSlide from "../components/loginPage/ScreenShotSlide";

function LoginPage() {
  return (
  
    <div className=" ">
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
      {/* footer section */}

      <div className=" flex justify-center pb-16 px-8">
        <ul className=" flex max-w-[860px] justify-center gap-x-4 gap-y-3 md:gap-y-5 text-xs text-inactive_text whitespace-nowrap flex-wrap">
          <li><a className="hover:underline" href="">Meta</a></li>
          <li><a className="hover:underline" href="">About</a></li>
          <li><a className="hover:underline" href="">Blog</a></li>
          <li><a className="hover:underline" href="">Jobs</a></li>
          <li><a className="hover:underline" href="">Help</a></li>
          <li><a className="hover:underline" href="">API</a></li>
          <li><a className="hover:underline" href="">Privacy</a></li>
          <li><a className="hover:underline" href="">Terms</a></li>
          <li><a className="hover:underline" href="">Top Accounts</a></li>
          <li><a className="hover:underline" href="">Locations</a></li>
          <li><a className="hover:underline" href="">Instagram Lite</a></li>
          <li><a className="hover:underline" href="">Contact Uploading & Non-Users</a></li>
          <li><a className="hover:underline" href="">Meta Verified</a></li>
          <li><a className="hover:underline" href="">English</a></li>
          <li>© 2023 Instagram from Meta</li>
        </ul>
      </div>
    </div>
  );
}

export default LoginPage;
