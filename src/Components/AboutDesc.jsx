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
    <section >
      <div style={{ marginBottom }} className="flex flex-col gap-[20px]">
        <div>
          <h1
            style={{ backgroundColor: bgColor, padding: "20px", width: "75px" }}
            className={`text-white text-[40px] font-bold leading-[30px]`}
          >
            {num}
          </h1>
          <h3 className={`text-${textColor} text-[24px] leading-[30px]`}>
            {heading}
          </h3>
        </div>
        <p className="text-[16px] leading-[30px]" style={{ width }}>
          {text}
        </p>
      </div>
    </section>
  );
};
export default AboutDesc;
