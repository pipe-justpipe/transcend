import React from "react";
import appstorebadge from "../assets/svgs/Mobileappstorebadge.svg";
import playstorebadge from "../assets/svgs/Mobileplaystorebadge.svg";
import iphone from "../assets/svgs/phonelinks.svg";
import Heading from "../Components/Heading";
// import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="mt-[50px] w-[80%] mx-auto">
      
      <div className="flex flex-row justify-between max-[1024px]:flex-col max-[1024px]:gap-[50px]">
        <div className="flex flex-col gap-[40px]">
          <Heading speed={50}>
            Download <span style={{ color: "#000000" }}>App, Schedule </span>
            Ride<span className="text-black">, Enjoy</span>
          </Heading>
  
          <p className="lg:text-[16px] leading-[30px] font-normal text-[#1C0F30] w-[260px] lg:mx-0 mx-auto  md:mx-0 text-[12px] lg:w-[494px] md:w-[370px] md:text-[14px]">
            Download TRANSCEND Rider/Driver app from your play store and app
            store, create an account of your choice, schedule your trips and
            enjoy a stress free ride home and to your Office
          </p>
          <figure className="flex lg:mx-o md:mx-0 mx-auto lg:w-[319px] md:w-[319px] w-[260px] justify-between">
            <img
              src={playstorebadge}
              alt="play store badge"
              className="lg:w-[135px] md:w-[135px] w-[110px]  h-[40px]"
            />
            <img
              src={appstorebadge}
              alt="app store badge"
              className="lg:w-[135px] md:w-[135px] w-[110px]  h-[40px]"
            />
          </figure>
        </div>
        <div className="relative">
          <figure>
            <img src={iphone} alt="map" />
          </figure>
        </div>
      </div>

      {/* <Link to={"https://www.google.com"}></Link> */}
    </section>
  );
};

export default Home;
