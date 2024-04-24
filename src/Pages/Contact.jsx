import React from "react";
import Heading from "../Components/Heading";

const Contact = () => {
  return (
    <section id="contact" className="mt-[150px]">
          {/* <Heading speed={50}>
           Contact Us
  
      </Heading> */}
      <h1 className="text-[#1C0F30] lg:text-[40px] md:text-[30px] text-[25px]  leading-[50px] text-center font-medium " id="demo">Contact Us</h1>

      <p className="w-[1164px] max-[1180px]:w-4/5 text-center mx-auto lg:text-[20px] md:text-[16px] text-[12px] leading-[30px] text-[#31135E] font-normal mt-[50px] mb-[40px] md:mb-[70px] lg:mb-[100px]">
        Have a question, comment, or feedback for us? We’d love to hear from
        you! Our team is dedicated to providing the best possible experience,
        and we're always eager to assist you.
      </p>
      <div className="w-4/5 mx-auto rounded-[50px] border border-solid py-[60px] border-[#BE95FF]">
        <form className="mx-auto flex flex-col gap-[40px]">
          <div className="flex flex-wrap gap-[20px] justify-between w-4/5 mx-auto">
            <input
              className="border border-solid border-black border-opacity-25 lg:w-[480.18px] md:w-[380px] w-[200px] mx-auto rounded-[12px] px-[20px] py-[16px]"
              placeholder="what is your name? *"
            />
            <input
              className="border border-solid border-black border-opacity-25 lg:w-[480.18px] md:w-[380px] w-[200px] mx-auto rounded-[12px] px-[20px] py-[16px]"
              placeholder="Email Address"
            />
          </div>{" "}
          <textarea className="border-2 border-solid border-[#642AC3] w-4/5 mx-auto h-[212px] flex justify-center rounded-[12px] " />
        </form>
      </div>
    </section>
  );
};

export default Contact;
