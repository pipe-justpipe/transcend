import React, { useEffect, useState } from "react";
import AboutDesc from "../Components/AboutDesc";
import mobilesignup from "../assets/svgs/mobilesignup.svg";
import story from "../assets/svgs/story.svg";
import vision from "../assets/svgs/vision.svg";
import mission from "../assets/svgs/mission.svg";
import "../App.css";
import Heading from "../Components/Heading";
import Svm from "../Components/Svm";

const About = () => {
  const [style, setStyle] = useState({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(353px, 360px))",
    justifyContent: "space-between",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 899) {
        setStyle({
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          justifyContent: "center",
        });
      } else {
        setStyle({
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(353px, 360px))",
          justifyContent: "space-between",
        });
      }
    };

    // Set the initial style based on the current window width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="lg:mt-[350px] md:lt-[250px] mt-[100px] w-[80%] mx-auto lg:mb-[200px] md:mb-[150px] mb-[70px]"
    >
      <h1
        className="text-center lg:text-[40px] md:text-[30px] text-[23px] font-medium leading-[30px] lg:mb-[50px] md:mb-[40px] mb-[20px]"
        id="demo"
      >
        How <span className="text-[#491D8B]">Transcend</span> App Works
      </h1>
      <div className="about relative flex flex-wrap">
        <div className="background-image"></div>
        {/* <h1></h1> */}
        <div style={style}>
          <AboutDesc
            num="1"
            heading={"Sign In:"}
            text={
              "To start using the app, you first need to sign in using your credentials, either as a driver/Rider such as your email address and password."
            }
            textColor={"#000000"}
            bgColor={"#BE95FF"}
            width={"316px"}
            marginTop={"50px"}
          />
          <AboutDesc
            num="2"
            heading={"Subscribe:"}
            text={
              "Select subscription plan that suits you, such as a monthly or yearly plan. You can choose the plan that suits you best and subscribe to it within the app"
            }
            textColor={"#ffffff"}
            bgColor={"#6929C4"}
            width={"320px"}
            marginTop={"50px"}
          />
          <AboutDesc
            num="4"
            heading={"Enjoy your ride:"}
            text={
              "Once your ride is booked and your driver’s arrives, relax and enjoy your ride. During the ride, you can track your trip's progress and also  rate your drive"
            }
            textColor={"#ffffff"}
            bgColor={"#6929C4"}
            width={"353px"}
            marginTop={"50px"}
          />
          <AboutDesc
            num="3"
            heading={"Payment:"}
            text={
              "After picking a plan, you need to provide payment details such as a credit card, debit card, or digital wallet to pay for the service. The app securely saves your payment information for future rides, so you don't have to enter it every time."
            }
            textColor={"#000000"}
            bgColor={"#BE95FF"}
            width={"327px"}
            marginTop={"50px"}
          />
        </div>
      </div>
      <h1
        className="text-center lg:mt-[270px] md:mt-[100px] mt-[70px] lg:text-[40px] md:text-[30px] text-[23px] font-medium leading-[30px] lg:mb-[50px] md:mb-[40px] mb-[20px]"
        id="demo"
      >
        About <span className="text-[#491D8B]">Transcend</span>
      </h1>
      <p className="lg:text-[20px] md:text-[16px] text-[12px] leading-[40px] lg:mt-[50px] md:mt-[50px] mt-[30px] text-center">
        Transcend is revolutionizing urban mobility in Nigeria, offering a
        seamless and smart commuting experience for millions of Nigerians. With
        a focus on efficiency, affordability, and sustainability, Transcend aims
        to transform the way people move in major cities like in Nigeria and
        Africa.
      </p>
      <div className="flex justify-center">
        <button className="text-center lg:text-[20px] md:text-[16px] text-[12px] mt-[50px] leading-[30px] font-[600] text-[#FFFFFF] w-[256px] lg:py-[16px] lg:px-[20px] md:py-[14px] md:px-[14px] rounded-[12px] bg-gradient-to-br from-purple-600 to-indigo-600">
          Get the App
        </button>
      </div>
      <div className="flex justify-between lg:mt-[100px] md:mt-[70px] mt-[30px] flex-wrap">
        <Svm
          imgSrc={story}
          head="Our Story"
          paragraph="We understand the daily commuting 
          issues faced by Nigerians, That's why 
          Transcend wish to provide innovative 
          solutions to improve commuting case,."
          widt={"388px"}
        />
        <Svm
          imgSrc={vision}
          head="Our Vision"
          paragraph="At Transcend, we envision a future 
          where commuting is stress-free, 
          and accessible to everyone. Commuters
          get  efficient, affordable, and safe travel."
          widt={"405px"}
        />
        <Svm
          imgSrc={mission}
          head="Our Mission"
          paragraph="Our mission is to reduce commute
          time and stress, increase user ado
          ption and engagement, establish 
          brand recognition and user trust."
          widt={"345px"}
        />
      </div>
      <p className="lg:text-[20px] md:text-[16px] text-[12px] leading-[40px] lg:mt-[100px] md:mt-[70px] mt-[30px] text-center text-[#BE95FF]">
        Join us on this journey as we re imagine urban mobility in Nigeria and
        make commuting a more enjoyable and sustainable experience for all.
      </p>
    </section>
  );
};

export default About;
