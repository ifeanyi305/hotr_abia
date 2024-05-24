import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logoWhite from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'EVENTS', href: '/announcements' },
    { name: 'CITH', href: '/church_in_the_home' },
    { name: 'LIVESTREAM', href: 'https://web.facebook.com/HouseOnTheRockAba', special: true },
    { name: 'GIVE', href: '/partner', special: true },
    { name: 'TESTIMONY/ PRAYER', href: '/devotion' },
    { name: 'WE ARE SOCIAL', href: '/socials' },
  ];

  return (
    <div className="bg-[#E7FFF1] w-full sticky top-0 flex justify-center gap-[5%] items-center px-4 py-4">
      <div>
        <Link to="/">
          <img src={logoWhite} alt="hotr_logo" className="" />
        </Link>
      </div>
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<IoCloseSharp className="text-[#99CC5A]" />)
            : (<GiHamburgerMenu className="text-[#99CC5A]" />)
          }
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl">Menu</h2>
          <button
            className="text-xl"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseSharp className="text-[#99CC5A]" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <Link to={item.href} onClick={() => setIsOpen(false)} key={index}>
                <li key={index} className={`px-4 py-2 my-4 hover:bg-gray-700 ${item.special ? 'bg-[#23854C] w-[50%] px-2 mx-2' : ''}`}>
                  {item.name}
                </li>
                <hr />
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
