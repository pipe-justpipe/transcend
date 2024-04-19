import React from "react";
import Groupphone from "../assets/svgs/groupphone.svg";
import appstore from "../assets/svgs/Mobileappstorebadge.svg";
import playstore from "../assets/svgs/Mobileplaystorebadge.svg";
import logo from "../assets/svgs/whitetranscend.svg";

const Footer = () => {
  return (
<section className="mt-[150px]">
    <div className="flex items-center w-4/5 justify-between mx-auto ">
    <h1 className="text-[48px] leading-[72px] text-[#1C0F30] font-medium">
      Download Transcend app
    </h1>
    <img src={Groupphone} alt="phones" className="mb-[-200px]" />
  </div>
    <div className="bg-[#31135E]">

     
      <div className="w-4/5 mx-auto pt-[50px]">
        <div className="">
          <figure className="flex w-[319px] justify-between">
            <img
              src={playstore}
              alt="app store badge"
              className="w-[135px] h-[40px]"
            />
            <img
              src={appstore}
              alt="app store badge"
              className="w-[135px] h-[40px]"
            />
          </figure>
          <div className="mt-[150px] flex w-[87%] justify-between">
            <div>
              <img src={logo} alt="logo" />
              <p className="w-[415px] text-[16px] leading-[30px] text-[#F6F2FF] mt-[50px]">
                Download TRANSCEND Rider/Driver app from your play store and app
                store, create an account of your choice, schedule your trips and
                enjoy a stress free ride home and to your Office
              </p>
            </div>
            <div className="flex w-[300px] justify-between text-[#ffffff]">
              <div className="flex flex-col gap-[46px]">
                <h4 className="font-[900] text-[18px] leading-[27px] text-[#FEFEFE]">About</h4>
                <div className="flex flex-col gap-[24px] text-[15px] leading-[22.5px]">
                  <span>About Us</span>
                  <span>Features</span>
                  <span>News</span>
                  <span>Careers</span>
                </div>
              </div>
              <div className="flex flex-col gap-[46px]">
                <h4 className="font-[900] text-[18px] leading-[27px] text-[#FEFEFE]">Contact Us</h4>
                <div className="flex flex-col gap-[24px]">
                  <span>Ikeja, Lagos</span>
                  <span>xxx - 12345</span>
                  <span>(480)555-0103</span>
                  <span>Transcend@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
