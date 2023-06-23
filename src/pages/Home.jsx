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
      <div className=" w-full flex justify-center pt-11">
        <div className=" w-[630px] mr-20">
          <Stories />
          <Posts />
        </div>
        <div className=" w-[320px]">
          <SuggestsPanel />
        </div>
      </div>
    </>
  );
}

export default Home;
