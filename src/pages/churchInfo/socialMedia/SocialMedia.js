import React from 'react';
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { socialImages } from '../../../data/data';
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

const SocialMedia = () => {
  // const getRandomImages = (num, array) => {
  //   const shuffled = array.sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, num);
  // };
  // const [currentImages, setCurrentImages] = useState(getRandomImages(4, socialImages));

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImages(getRandomImages(4, socialImages));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="bgImage w-full py-[10%] px-4">
        <p className="text-center text-[24px] text-white font-[600]">SOCIAL MEDIA</p>
      </div>
      <div className="bg-[#E7FFF1] w-full  py-[5%] px-[7%]">
        <div className="grid grid-cols-2 gap-4 justify-center my-6">
          {socialImages.map((img, index) => (
            <div key={index}>
              <img className="w-full h-[100%] rounded-2xl" src={img.img} alt="social_img" />
            </div>
          ))}
        </div>
        <p className="text-center text-[#8C8B8B] text-[18px] font-[400] my-4">
          Follow our social media handles to stay up to date on our activities
        </p>
        <div className="flex items-center gap-8 justify-center my-6">
          <div>
            <a href="https://web.facebook.com/HouseOnTheRockAba" target="_blank" rel="noreferrer">
              <AiOutlineFacebook className="text-[40px] font-extrabold" />
            </a>
            <a href="https://www.youtube.com/@houseontherockaba4362" target="_blank" rel="noreferrer">
              <CiYoutube className="text-[44px] font-extrabold mt-4" />
            </a>
          </div>
          <div>
            <a href="https://t.me/hotraba" target="_blank" rel="noreferrer">
              <FaTelegramPlane className="text-[40px] font-extrabold" />
            </a>
            <a href="https://www.instagram.com/hotraba/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-[40px] font-extrabold mt-4" />
            </a>
          </div>
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default SocialMedia;