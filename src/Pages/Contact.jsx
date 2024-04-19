import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <h1 className="text-[#1C0F30] text-[40px] leading-[50px] text-center font-medium mt-[150px]">Contact Us</h1>
      <p className="w-[1164px] text-center mx-auto text-[20px] leading-[30px] text-[#31135E] font-normal mt-[50px] mb-[100px]">
        Have a question, comment, or feedback for us? We’d love to hear from
        you! Our team is dedicated to providing the best possible experience,
        and we're always eager to assist you.
      </p>
      <div className="w-4/5 mx-auto rounded-[50px] border border-solid py-[60px] border-[#BE95FF]">
        <form className="mx-auto flex flex-col gap-[40px]">
          <div className="flex justify-between w-4/5 mx-auto">
            <input
              className="border border-solid border-black border-opacity-25 w-[533.18px] rounded-[12px] px-[20px] py-[16px]"
              placeholder="what is your name? *"
            />
            <input
              className="border border-solid border-black border-opacity-25 w-[533.18px] rounded-[12px] px-[20px] py-[16px]"
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
