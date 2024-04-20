import React from "react";
import appstorebadge from "../assets/svgs/Mobileappstorebadge.svg";
import playstorebadge from "../assets/svgs/Mobileplaystorebadge.svg";
import iphone from "../assets/svgs/iphone.svg";
import Heading from "../Components/Heading";
// import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="mt-[50px] w-[80%] mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[40px]">
        <Heading speed={50}>
        Download <span style={{ color: '#000000' }}>App, Schedule </span>Ride<span className="text-black">, Enjoy</span>
      </Heading>
        {/* <Heading speed={50}>
         ""<span style={{ color: '#491D8B' }}>Download</span>
          App, Schedule <span>{{color: "491d8b"}}Ride</span>, Enjoy
      </Heading> */}
          {/* <h1 className="text-[64px] font-medium leading-[96px] w-[488px]" id="demo">
            <span className="text-[#491D8B]">Download</span> App, Schedule{" "}
            <span className="text-[#491D8B]">Ride</span>, Enjoy!
          </h1> */}
          {/* <Heading speed={50}>
        <span style={{ color: '#491D8B' }}>Download</span>  App, Schedule <span style={{ color: '#491D8B' }}>Ride</span>, Enjoy!
      </Heading> */}

          {/* <Heading
        text="Download App, Schedule, Ride, Enjoy"
        speed={50}
        highlights={[
          { text: "Download", color: "#491D8B" },
          { text: "Ride", color: "#FF6347" }
        ]}
      /> */}


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
        <div className="relative">
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[343px] h-[54px] border-[#160328] flex items-center justify-center border rounded-[7px] bg-[#BE95FF] text-center absolute top-[328px] right-[210px]"
          >
            <a
              href="#"
              className=" text-[15px] leading-[19.36px]  text-[#0D0121]"
            >
              Continue as a Driver
            </a>
          </div>
          
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="w-[343px] h-[54px] border-[#160328] flex items-center justify-center border rounded-[7px] bg-[#BE95FF] text-center absolute top-[475px] left-[105px]"
          >
            <a
              href="#"
              className="text-[15px] leading-[19.36px] text-[#0D0121]"
            >
              Continue as a Driver
            </a>
          </div>
          <div
            style={{
              boxShadow: "0px 4px 4px 0px #A56EFF",
              borderRadius: "55px 55px 10px 10px",
            }}
            className="w-[275px] h-[117px] bg-[#ffffff] flex flex-col items-center justify-center absolute top-[650px] left-[125px]"
          >
            <h4 className="text-[16px] leading-[24px] text-center font-semibold">
              Make Every Mile Count.
            </h4>
            <p className="text-[11px] leading-[16.5px] text-center font-normal">
              Ditch the stress and uncertainty. Transcend offers a seamless and
              elevated way to navigate your daily work travel.
            </p>
          </div>
          {/* <Link className="bg-#D4BBFF">Continue as a Driver</Link> */}

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
