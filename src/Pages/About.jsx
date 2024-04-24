import React, { useEffect, useState } from "react";
import AboutDesc from "../Components/AboutDesc";
import mobilesignup from "../assets/svgs/mobilesignup.svg";
import "../App.css";
import Heading from "../Components/Heading";

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
    window.addEventListener('resize', handleResize);

    // Clean up function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    
    <section className="lg:mt-[350px] md:lt-[250px] mt-[100px] w-[80%] mx-auto lg:mb-[200px] md:mb-[150px] mb-[70px]">
      <h1 className="text-center lg:text-[40px] md:text-[30px] text-[23px] font-medium leading-[30px] mb-[50px]" id="demo">
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
          marginBottom={"50px"}
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
          marginBottom={"50px"}
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
          
        />
      </div>
      </div>
    </section>
  );
};

export default About;
