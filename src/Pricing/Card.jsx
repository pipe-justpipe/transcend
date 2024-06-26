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
            className="lg:w-[377px] md:w-[290px] mx-auto w-[250px] lg:h-[580px] md:h-[540px] h-[490px] rounded-[18px] bg-[#ffffff] pt-[30px] lg:px-[30px] md:px-[20px] px-[15px] lg:mt-[20px] md:mt-[16px] mt-[14px]"
          >
            <div className="flex items-center justify-center lg:mb-[40px] md:mb-[30px] mb-[20px]">
              <h1 className="lg:text-[32px] md:text-[25px] text-[18px] leading-[48px] font-medium text-center">
                {amount}
              </h1>
              <h2 className="text-[#BE95FF] lg:text-[24px] md:text-[18px] text-[14px]">{duration}</h2>
            </div>
            <div className="flex flex-col lg:gap-[27px] md:gap-[20px] gap-[15px]">
              <div className="flex flex-col lg:gap-[18px] md:gap-[14px] gap-[12px] ">
                <h3 className="lg:text-[24px] md:text-[18px] text-[14px] font-semibold leading-[36px]">
                  {title}
                </h3>
                <p className="lg:w-[256px] md:w-[200px] w-[180px] lg:text-[18px] md:text-[16px] text-[12px] leading-[27px] text-[#6B7280]">
                  {description}
                </p>
              </div>
              <div className="flex flex-col lg:gap-[24px] md:gap-[20px] gap-[16px] lg:h-[150px] md:h-[140px] h-[140px]">
                {listItems.map((item, listItemIndex) => (
                  <div
                    key={listItemIndex}
                    className="flex items-center lg:gap-[30px] md:gap-[20px] gap-[14px]"
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

            <button className="lg:w-[265px] md:w-[200px] w-[180px] flex items-center justify-center mx-auto text-[#ffffff] py-[16px] px-[20px] rounded-[12px] bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-700 lg:mt-[70px] md:mt-[70px] mt-[50px] lg:text-[20px] md:text-[16px] text-[12px] font-semibold leading-[30px]">{button}</button>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
