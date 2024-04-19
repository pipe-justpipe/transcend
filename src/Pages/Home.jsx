import React from "react";
import appstorebadge from "../assets/svgs/Mobileappstorebadge.svg";
import playstorebadge from "../assets/svgs/Mobileplaystorebadge.svg";
import iphone from "../assets/svgs/iphone.svg";
// import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="mt-[50px] w-[80%] mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-[64px] font-medium leading-[96px] w-[488px]">
            <span className="text-[#491D8B]">Download</span> App, Schedule{" "}
            <span className="text-[#491D8B]">Ride</span>, Enjoy!
          </h1>
          <p className="text-[16px] leading-[30px] font-normal text-[#1C0F30] w-[494px]">
            Download TRANSCEND Rider/Driver app from your play store and app
            store, create an account of your choice, schedule your trips and
            enjoy a stress free ride home and to your Office
          </p>
          <figure className="flex w-[319px] justify-between">
            <img
              src={playstorebadge}
              alt="play store badge"
              className="w-[135px] h-[40px]"
            />
            <img
              src={appstorebadge}
              alt="app store badge"
              className="w-[135px] h-[40px]"
            />
          </figure>
        </div>
        {/* <Link className="bg-#D4BBFF">Continue as a Driver</Link> */}
        
        
        <figure>
          <img src={iphone} alt="map" />
        </figure>
      </div>

      {/* <Link to={"https://www.google.com"}></Link> */}
    </section>
  );
};

export default Home;
