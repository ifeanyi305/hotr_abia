import React from 'react';
import { Link } from 'react-router-dom';
import testimony from "../../../images/testimony.png";
import prayers from "../../../images/prayers.png";
import ComponentFooter from '../../../components/footer/ComponentFooter';

const Devotion = () => {
  return (
    <div>
      <div className="bg-[#E7FFF1] w-full px-[13%] py-6">
        <h1 className="text-center font-[600] py-[7%] text-[24px] text-[#4B4E49]">We want to hear from you</h1>
        <div className="m-auto">
          <Link to="/devotion/testimony">
            <img src={testimony} alt="testimony" className="m-auto rounded-xl" />
          </Link>
          <div className="my-4">
            <p className="text-[#FA4B4B] font-[600] text-[18px] text-center">Revelation 12:11</p>
            <p className="text-[#4B4E49] text-[14px] text-center">
              And they overcame him by the blood of the Lamb, and by the word of their testimony;
            </p>
          </div>
        </div>
        <div className="m-auto mt-[5%]">
          <Link to="/devotion/prayer_request">
            <img src={prayers} alt="testimony" className="m-auto rounded-xl" />
          </Link>
          <div className="my-4">
            <p className="text-[#99CC5A] font-[600] text-[18px] text-center">James 5:14</p>
            <p className="text-[#4B4E49] text-[14px] text-center">
            Is anyone among you sick? He should call for the elders of the church, 
            and they should pray over him after anointing
             him with olive oil in the name of the Lord.
            </p>
          </div>
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default Devotion;
