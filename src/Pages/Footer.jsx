import React from "react";
import Groupphone from "../assets/svgs/groupphone.svg";
import appstore from "../assets/svgs/Mobileappstorebadge.svg";
import playstore from "../assets/svgs/Mobileplaystorebadge.svg";
import logo from "../assets/svgs/whitetranscend.svg";

const Footer = () => {
  return (
<section className="mt-[150px]">
    <div className="flex items-center w-4/5 justify-between mx-auto flex-wrap ">
    <h1 className="lg:text-[48px] md:text-[35px] text-[25px]  leading-[72px] text-[#1C0F30] font-medium">
      Download Transcend app
    </h1>
    <img src={Groupphone} alt="phones" className="lg:w-[500px] md:w-[300px] w-[250px] mx-auto lg:mb-[-200px] md:mb-[-150px] mb-[-100px]" />
  </div>
    <div className="bg-[#31135E]">

     
      <div className="w-4/5 mx-auto pt-[50px]">
        <div className="">
          <figure className="flex lg:w-[319px] md:w-[319px] w-[260px] lg:mt-[0px] md:mt-[200px] mt-[200px] justify-between">
            <img
              src={playstore}
              alt="app store badge"
              className="lg:w-[135px] md:w-[135px] w-[100px] h-[40px]"
            />
            <img
              src={appstore}
              alt="app store badge"
              className="lg:w-[135px] md:w-[135px] w-[100px]  h-[40px]"
            />
          </figure>
          <div className="lg:mt-[150px] md:mt-[100px] mt-[70px] flex max-[1024px]:flex-col w-[87%] justify-between">
            <div>
              <img src={logo} alt="logo" className="lg:w-[260px] md:w-[220px] w-[120px]" />
              <p className="lg:w-[415px] md:w-[350px] text-[12px] w-[260px] md:text-[14px] lg:text-[16px] leading-[30px] text-[#F6F2FF] mt-[50px]">
                Download TRANSCEND Rider/Driver app from your play store and app
                store, create an account of your choice, schedule your trips and
                enjoy a stress free ride home and to your Office
              </p>
            </div>
            <div className="flex max-[1024px]:flex-col lg:w-[300px] md:w-[270px] w-[250px] justify-between text-[#ffffff]">
              <div className="flex flex-col gap-[46px]">
                <h4 className="font-[900] leading-[27px] text-[#FEFEFE] mt-[15px] lg:text-[18px] md:text-[16px] text-[14px]">About</h4>
                <div className="flex flex-col  gap-[24px] lg:text-[15px] md:text-[12px] text-[10px] leading-[22.5px]">
                  <span>About Us</span>
                  <span>Features</span>
                  <span>News</span>
                  <span>Careers</span>
                </div>
              </div>
              <div className="flex flex-col gap-[46px]">
                <h4 className="font-[900] lg:text-[18px] md:text-[16px] text-[14px] leading-[27px] text-[#FEFEFE] mt-[15px]">Contact Us</h4>
                <div className="flex flex-col w-4/5 gap-[24px] lg:text-[15px] md:text-[12px] text-[10px]">
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
