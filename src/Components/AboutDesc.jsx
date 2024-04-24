import React from "react";

const AboutDesc = ({
  num,
  heading,
  text,
  textColor,
  bgColor,
  width,
  marginBottom,
  position,
}) => {
  return (
    <section className="w-fit">
      <div style={{ marginBottom }} className="flex flex-col gap-[20px] relative w-fit">
        <div>
          <h1
            style={{ backgroundColor: bgColor, padding: "20px", width: "75px", color: textColor }}
            className={`text-${textColor} lg:text-[40px] md:text-[30px] text-[25px] font-bold leading-[30px]`}
          >
            {num}
          </h1>
          <h3 className="lg:text-[24px] md:text-[20px] text-[16px] leading-[30px]">
            {heading}
          </h3>
        </div>
        <p className={`lg:text-[16px] leading-[30px] md:text-[14px] text-[12px] max-[899px]:w-[100%]`}>
          {text}
        </p>
      </div>
    </section>
  );
};
export default AboutDesc;
