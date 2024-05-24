import React from 'react';
import logo from "../../images/logo_black.png";

const Footer = () => {
  return (
    <footer className="bg-[#232323] w-full py-6 px-[5%]">
      <p className="text-[#858282] text-center text-[18px] font-sans font-[500] pt-4">&copy; 2024 HOUSE ON THE ROCK, ABA</p>
      <p className="text-[#858282] text-center text-[18px] font-sans font-[500]">ALL RIGHTS RESERVED</p>
      <div className="flex justify-center items-center my-4">
        <img src={logo} alt="logo_img" className="mt-3" />
      </div>
    </footer>
  );
};

export default Footer;
