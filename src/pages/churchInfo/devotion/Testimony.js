import React, { useState, useRef } from 'react';
import redLadyPraising from "../../../images/red_lady_praying.png";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentFooter from '../../../components/footer/ComponentFooter';

const Testimony = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_whatsapp: '',
    user_testimony: '',
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
          toast.success('Testimony sent', {
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
            user_testimony: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const fields = [
    { id: 'user_name', type: 'text', placeholder: 'Tell Us Your Name', name: "user_name", special: true },
    { id: 'user_whatsapp', type: 'number', placeholder: 'WhatsApp Phone Number', name: "user_whatsapp", },
    { id: 'user_testimony', type: 'text', placeholder: 'Share your testimony with us', name: "user_testimony", special: false }
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
        <img src={redLadyPraising} className="w-full" alt="redLadyPraising" />
      </div>
      <div className="bg-[#FEECEC] w-full pb-4 px-[6%]">
        <form className="py-2 w-full max-w-[80%] m-auto mt-[-6%]" id="form" ref={form} onSubmit={handleSubmit}>
          {fields.map(field => (
            <div className="mb-4" key={field.id}>
              {field.id === 'user_testimony' ? (
                <textarea
                  className="shadow bg-white py-4 px-6 appearance-none border rounded-xl w-full text-[#8C8B8B] text-[16px] leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  name={field.name}
                  required
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
              className="text-[#FA4B4B] bg-[#fff] border-[1px] border-[#FEECEC] font-bold py-[2px] px-6 rounded-lg shadow-2xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div className="my-4 w-[80%] m-auto">
          <p className="text-[#4B4E49] font-[600] text-[18px] text-center">2 Timothy 1:8</p>
          <p className="text-[#4B4E49] text-[14px] text-center">
            Therefore do not be ashamed of the testimony about our Lord,
            nor of me his prisoner, but share in suffering for the gospel by the power of God
          </p>
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default Testimony;
