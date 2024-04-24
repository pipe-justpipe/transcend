import React from "react";
import { cardData } from "./cardData";
import mark from "../assets/svgs/Icon.svg";

const Card = () => {
  return (
    <div className="rounded-[18px] flex flex-wrap justify-between w-[80%] mx-auto">
      {cardData.map(
        (
          { amount, duration, title, description, listItems, button },
          index
        ) => (
          <div
            key={index}
            className="lg:w-[377px] md:w-[290px] w-[250px] h-[580px] rounded-[18px] bg-[#ffffff] pt-[30px] px-[30px] mt-[20px]"
          >
            <div className="flex items-center justify-center mb-[40px]">
              <h1 className="lg:text-[32px] md:text-[25px] text-[18px] leading-[48px] font-medium text-center">
                {amount}
              </h1>
              <h2 className="text-[#BE95FF] lg:text-[24px] md:text-[18px] text-[14px]">{duration}</h2>
            </div>
            <div className="flex flex-col gap-[27px]">
              <div className="flex flex-col gap-[18px]">
                <h3 className="lg:text-[24px] md:text-[18px] text-[14px] font-semibold leading-[36px]">
                  {title}
                </h3>
                <p className="lg:w-[256px] md:w-[200px] w-[180px] lg:text-[18px] md:text-[16px] text-[12px] leading-[27px] text-[#6B7280]">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-[24px] h-[150px]">
                {listItems.map((item, listItemIndex) => (
                  <div
                    key={listItemIndex}
                    className="flex items-center gap-[30px]"
                  >
                    <span className="p-[9.22px] bg-[#A56EFF] w-[30.31px] rounded-[50%] flex items-center justify-center">
                      <img src={mark} alt="Mark" />
                    </span>
                    <p className="lg:text-[18px] md:text-[16px] text-[12px] font-normal leading-[27px] text-[#6B7280]">
                      {" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="lg:w-[265px] md:w-[200px] w-[180px] flex items-center justify-center mx-auto text-[#ffffff] py-[16px] px-[20px] rounded-[12px] bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-700 mt-[70px] lg:text-[20px] md:text-[16px] text-[12px] font-semibold leading-[30px]">{button}</button>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
