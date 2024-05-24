import React from 'react';
import Footer from '../../../components/footer/Footer';
import { event } from '../../../data/data';

const Announcements = () => {
  return (
    <div>
      <div className="bg-[#3A845D] w-full py-[10%] px-4">
        <p className="text-center text-[24px] text-white font-[600]">Announcements</p>
      </div>
      <div className="bg-[#E7FFF1] w-full  py-[5%] px-[7%]">
        <div className="grid grid-cols-2 gap-2 justify-center my-6">
          {event.map((img, index) => (
            <div key={index}>
              <img className="w-full h-[100%]" src={img.img} alt="social_img" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Announcements;
