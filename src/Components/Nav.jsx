import React, { useState } from "react";
import TranscendLogo from "../assets/svgs/transcendlogo.svg";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between mt-12 lg:w-4/5 md:w-[90%] w-[90%] mx-auto">
      <img
        src={TranscendLogo}
        alt="logo"
        className="lg:w-[224px] lg:h-[56px] md:w-[180px] md:h-[38px] w-[150px] h-[28px]"
      />
      <div className="flex items-center gap-6">
        <ul
          className={`hidden md:flex text-[#1C0F30] text-lg leading-[30px] font-medium gap-6`}
        >
          <Link to={"#home"}>Home</Link>
          <Link to={"#about"}>About</Link>
          <Link to={"#pricing"}>Pricing</Link>
          <Link to={"#contact"}>Contact</Link>
        </ul>
        {!isOpen && (
      <Link to={"#contact"} className="py-3 px-6 text-sm text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md">
      Get the App
      </Link>
        )}
        <div className="md:hidden flex flex-col items-center gap-6">
          {!isOpen ? (
            <div
              className="text-2xl flex flex-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776;
            </div>
          ) : (
            <div className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
              &#10006;
            </div>
          )}
          {isOpen && (
            <div className="flex flex-col border border-[#1C0F30] px-[20px] py-[16px] rounded-[12px]">
              <ul className="text-[#1C0F30] text-lg leading-[30px] font-medium flex flex-col">
                <Link to={"#home"}>Home</Link>
                <Link to={"#about"}>About</Link>
                <Link to={"#pricing"}>Pricing</Link>
                <Link to={"#contact"}>Contact</Link>
              </ul>
              <Link to={"#contact"} className="py-3 px-6 text-sm text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md">
                Get the App
                </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
