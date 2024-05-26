import React, { useState, useRef } from 'react';
import greenLadyPraising from "../../../images/green_lady_praying.png";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Prayer = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    user_whatsapp: '',
    user_prayerReq: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm('service_gizr1g2', 'template_l3uha2o', form.current, {
        publicKey: 'Afv1quRobLzRf3668',
      })
      .then(
        () => {
          toast.success('Prayer Request sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsLoading(false);
          setFormData({
            user_name: '',
            user_whatsapp: '',
            user_prayerReq: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const fields = [
    { id: 'user_name', type: 'text', placeholder: 'Tell Us Your Name', name: "user_name", special: true },
    { id: 'user_whatsapp', type: 'number', placeholder: 'WhatsApp Phone Number', name: "user_whatsapp", },
    { id: 'user_prayerReq', type: 'text', placeholder: 'Let us pray with you', name: "user_prayerReq", special: false }
  ];

  return (
    <div>
      <div className="px-6">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <div className="w-full">
        <img src={greenLadyPraising} className="w-full" alt="redLadyPraising" />
      </div>
      <button
        onClick={handleBackClick}
        type="button"
        className="absolute border-[1px] border-black rounded top-[22%] left-[16%]">
        <IoArrowBackOutline />
      </button>
      <div className="bg-[#20923F] w-full pb-4 px-[6%]">
        <form className="py-2 w-full max-w-[80%] m-auto mt-[-6%]" id="form" ref={form} onSubmit={handleSubmit}>
          {fields.map(field => (
            <div className="mb-4" key={field.id}>
              {field.id === 'user_prayerReq' ? (
                <textarea
                  className="shadow bg-white py-4 px-6 appearance-none border rounded-xl w-full text-[#8C8B8B] text-[16px] leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  value={formData[field.id]}
                  onChange={handleChange}
                  rows="6"
                />
              ) : (
                <input
                  className={`shadow bg-white py-4 px-6 appearance-none border rounded-xl w-full text-[#8C8B8B] text-[16px] leading-tight focus:outline-none focus:shadow-outline`}
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  required
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              className="text-[#fff] bg-[#20923F] border-[1px] border-white font-bold py-[2px] px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div className="my-4 w-[80%] m-auto">
          <p className="text-[#fff] font-[600] text-[18px] text-center">Matthew 18:19-20</p>
          <p className="text-[#fff] text-[14px] text-center">
            “Also, I tell you that if two of you on earth agree about something and pray for it,
            it will be done for you by my Father in heaven.
            This is true because if two or three people come together in my name, I am there with them.”
          </p>
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default Prayer;
