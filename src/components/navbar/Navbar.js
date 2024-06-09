import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logoWhite from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'HOME', href: '/' },
    // { name: 'EVENTS', href: '/announcements' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PRAYER', href: '/prayer_request' },
    { name: 'TESTIMONY', href: '/testimony' },
    { name: 'GIVE', href: '/partner', special: true },
    { name: 'CITH CENTERS', href: '/church_in_the_home' },
    { name: 'MEMBER UPDATE', href: 'church_in_the_home/updpate_data' },
    { name: 'WE ARE SOCIAL', href: '/socials' },
  ];

  return (
    <div className="bg-[#E7FFF1] z-50 w-full sticky top-0 flex justify-between gap-[5%] items-center px-4 py-4">
      <div>
        <Link to="/">
          <img src={logoWhite} alt="hotr_logo" className="" />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {menuItems.map((menu, index) => (
          <ul key={index}>
            <Link to={menu.href} onClick={() => setIsOpen(false)} key={index}>
              <li className="font-[600] my-6 text-[#777777] hover:text-[#99CC5A]">{menu.name}</li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="md:hidden">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<IoCloseSharp className="text-[#99CC5A] text-[25px]" />)
            : (<GiHamburgerMenu className="text-[#99CC5A] text-[25px]" />)
          }
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#222329] text-white transform overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src={logoWhite} alt="hotr_logo" className="w-[150px]" />
          <button
            className="text-xl"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseSharp className="text-[#99CC5A] text-[25px]" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <Link to={item.href} onClick={() => setIsOpen(false)} key={index}>
                <li key={index} className={`px-4 py-2 font-[600] my-6 hover:bg-gray-700 ${item.special ? 'bg-[#23854C] w-fit px-2 mx-2 text-white font-[600]' : 'text-[#777777]'}`}>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
