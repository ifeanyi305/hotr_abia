import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImg from "../images/hero_image.png";
import horLine from "../images/horLine.png";
import Footer from '../components/footer/Footer';
import { contactInfo } from '../data/data';
import { infoData } from '../data/data';
import { resources } from '../data/data';
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import "./style.css";

const SectionTitle = ({ title, className }) => (
  <p className={`text-[#adacac] font-[400] text-[18px] ${className}`}>{title}</p>
);

const InfoText = ({ text, className }) => (
  <p className={`text-[#adacac] ${className}`}>{text}</p>
);

const Home = () => {
  const boxRef = useRef(null);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);

  const handlePrev = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handleNext = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const box = boxRef.current;
      if (box) {
        setPrevDisabled(box.scrollLeft === 0);
        setNextDisabled(box.scrollLeft + box.clientWidth >= box.scrollWidth);
      }
    };

    const box = boxRef.current;
    if (box) {
      box.addEventListener('scroll', handleScroll);
      return () => {
        box.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <section>
        <img src={heroImg} alt="hero section img" className="w-full" />
        <div className="px-[2px]">
          <p className="mt-[-200px] text-[#23854C] text-center text-[64px] licorice-regular">Welcome Home</p>
        </div>
      </section>
      <section className="bgImage w-full mt-[20%] py-12 px-[10%]">
        <div className="infoCon">
          {infoData.map((data, index) => (
            <div key={index} className="my-8">
              <p className="text-[22px] font-[400] text-white">{data.title}</p>
              <button className="bg-white px-6 py-[4px] text-[#438E5B] text-[17px]">
                {data.btnText === "RECENT SERMONS" ? (
                  <a href={data.link} target="_blank" rel="noreferrer">{data.btnText}</a>
                ) : (<Link to={data.link}>{data.btnText}</Link>)}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#DDDDDD] w-full py-6 px-[10%]">
        <div className="py-6">
          <p className="text-[#515151] text-[23px] font-[500] text-center">
            Business &amp; Leadership Teaching
          </p>
        </div>
        <iframe className="w-full" height="200" src="https://www.youtube.com/embed/B9U-9N3vwSM?si=gL0JpsBNCCah_PaH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="flex justify-center">
          <button type="button" className="bg-[#FA4B4B] text-white px-4 py-[3px] my-4 rounded-lg">
            <a href="https://www.youtube.com/@houseontherockaba4362/videos" target="_blank" rel="noreferrer">WATCH ON YOUTUBE</a>
          </button>
        </div>
      </section>
      <section className="bg-[#fff] w-full py-10 px-[5%]">
        <div>
          <p className="text-[#515151] text-[24px] font-[700] text-center">RESOURCES</p>
          <img src={horLine} alt="horLine" className="mt-[2px] m-auto w-[150px]" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            type="button"
            className={`px-2 py-[4px] border-[#000] bg-gray-400 border-[1px] rounded-[50%] ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            &larr;
          </button>
          <div className="flex gap-4 my-6 swiper-wrapper overflow-x-auto xscrollbar" ref={boxRef}>
            {resources.map((img, index) => (
              <div key={index} className="min-w-[140px] w-full">
                <a href={img.link} target='_blank' rel="noreferrer">
                  <img className="w-full h-[100%]" src={img.img} alt="books_img" />
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            type="button"
            className={`px-2 py-[4px] border-[#000] border-[1px] bg-gray-400 rounded-[50%] ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            &rarr;
          </button>
        </div>
        <p className="text-[19px] text-black text-center font-[500]">For more visit</p>
        <p className="text-[19px] text-[#99CC5A] text-center font-[500]">
          <a
            href="https://annyikebudu.org"
            target="_blank"
            rel="noreferrer"
          >
            https://annyikebudu.org
          </a>
        </p>
      </section>
      <section className="bg-[#99CC5A] w-full py-6 px-[5%]">
        <p className="text-white text-center text-[20px] font-sans font-[500] py-4">WE ARE SOCIAL</p>
        <div className="flex justify-center items-center gap-4">
          <a href="https://web.facebook.com/HouseOnTheRockAba" target="_blank" rel="noreferrer">
            <AiOutlineFacebook className="text-[24px]" />
          </a>
          <a href="https://www.youtube.com/@houseontherockaba4362" target="_blank" rel="noreferrer">
            <CiYoutube className="text-[24px]" />
          </a>
          <a href="https://t.me/hotraba" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="text-[24px]" />
          </a>
          <a href="https://www.instagram.com/hotraba/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-[24px]" />
          </a>
        </div>
      </section>
      <section className="bg-[#313131] w-full py-6 px-[10%]">
        <div>
          <SectionTitle title="CONTACT US" />
          <div className="mb-4">
            <InfoText text={contactInfo.phone} className="text-[14px]" />
            <InfoText text={contactInfo.email} className="text-[14px]" />
          </div>
          <div className="my-8">
            {contactInfo.address.map((line, index) => (
              <InfoText key={index} text={line} className={index === 0 ? "text-[18px] font-[400]" : "text-[14px]"} />
            ))}
          </div>
          <SectionTitle title="SERVICE TIMES" className="text-[19px] font-[600]" />
          <div className="my-4">
            <InfoText text="SUNDAYS" className="text-[18px] font-[400]" />
            {contactInfo.serviceTimes.sundays.map((time, index) => (
              <InfoText key={index} text={time} className="text-[14px]" />
            ))}
          </div>
          <div className="my-4">
            <InfoText text="THURSDAYS" className="text-[18px] font-[400]" />
            {contactInfo.serviceTimes.thursdays.map((time, index) => (
              <InfoText key={index} text={time} className="text-[14px]" />
            ))}
          </div>
          {contactInfo.resources.map((resource, index) => (
            <div key={index} className="my-6">
              <InfoText text={resource.title} className="text-[18px] font-[600]" />
              <a href={resource.link} target="_blank" rel="noreferrer">
                <InfoText text={resource.platform} className="text-[14px]" />
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
