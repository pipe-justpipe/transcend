import React from "react";
import { cardData } from "./cardData";
import mark from "../assets/svgs/Icon.svg";

const Card = () => {
  return (
    <div className="rounded-[18px] flex justify-between w-[80%] mx-auto">
      {cardData.map(
        (
          { amount, duration, title, description, listItems, button },
          index
        ) => (
          <div
            key={index}
            className="w-[377px] h-[580px] rounded-[18px] bg-[#ffffff] pt-[30px] px-[30px]"
          >
            <div className="flex items-center justify-center mb-[40px]">
              <h1 className="text-[32px] leading-[48px] font-medium text-center">
                {amount}
              </h1>
              <h2 className="text-[#BE95FF] text-[24px]">{duration}</h2>
            </div>
            <div className="flex flex-col gap-[27px]">
              <div className="flex flex-col gap-[18px]">
                <h3 className="text-[24px] font-semibold leading-[36px]">
                  {title}
                </h3>
                <p className="w-[256px] text-[18px] leading-[27px] text-[#6B7280]">
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
                    <p className="text-[18px] font-normal leading-[27px] text-[#6B7280]">
                      {" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-[265px] flex items-center justify-center mx-auto text-[#ffffff] py-[16px] px-[20px] rounded-[12px] bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-700 mt-[70px] text-[20px] font-semibold leading-[30px]">{button}</button>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
