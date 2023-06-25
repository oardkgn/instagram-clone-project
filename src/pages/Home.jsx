import React from "react";
import { Helmet } from "react-helmet";
import Stories from "./home/Stories";
import SuggestsPanel from "./home/SuggestsPanel";
import Posts from "./home/Posts";

function Home() {
  return (
    <>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <div className=" w-full flex justify-center pt-6  mobileForm:pt-11">
        <div className=" w-full px-4 mobileForm:px-0 mobileForm:w-[630px] mr-0 showSuggests:mr-16">
          <Stories />
          <Posts />
        </div>
        <div className=" w-[320px] hidden showSuggests:block">
          <SuggestsPanel />
        </div>
      </div>
    </>
  );
}

export default Home;
