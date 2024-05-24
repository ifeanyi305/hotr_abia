import React, { useState, useRef } from 'react';
import Footer from '../../../components/footer/Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";

const MembersData = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    email: '',
    whatsapp: '',
    department: '',
    address: '',
    busStop: ''
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
      .sendForm('service_xrm6wbi', 'template_wajaiw5', form.current, {
        publicKey: 'EYufev1ZZjBKgwOh1',
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
            name: '',
            birthday: '',
            email: '',
            whatsapp: '',
            department: '',
            address: '',
            busStop: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const fields = [
    { id: 'name', type: 'text', placeholder: 'Tell Us Your Name', special: true, name: "name" },
    { id: 'birthday', type: 'text', placeholder: 'Birthday', name: "birthday" },
    { id: 'email', type: 'email', placeholder: 'Email', name: "email" },
    { id: 'whatsapp', type: 'number', placeholder: 'WhatsApp Phone Number', name: "whatsapp" },
    { id: 'department', type: 'text', placeholder: 'Department', name: "department" },
    { id: 'address', type: 'text', placeholder: 'Address', name: "address" },
    { id: 'busStop', type: 'text', placeholder: 'Nearby Bus Stop', special: false, name: "busStop" }
  ];
  const handleBackClick = () => {
    navigate(-1);
  };

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
      <div className="bg-[#D3FFE4] w-full py-[5%] px-[7%]">
        <button
          onClick={handleBackClick}
          type="button"
          className="border-[1px] border-black rounded">
          <IoArrowBackOutline />
        </button>
        <div>
          <p className="text-[#5EA078] w-[50%] font-[600] text-[22px]">
            Members data update
          </p>
          <p className="text-[#8C8B8B] text-[20px] font-[400]">Help us to know you better</p>
        </div>
        <div className="mt-[5%] bg-green-100">
          <form className="py-2 w-full max-w-sm" onSubmit={handleSubmit} id="form" ref={form}>
            {fields.map(field => (
              <div className="mb-4" key={field.id}>
                <input
                  className={`shadow bg-white py-4 px-6 appearance-none border rounded w-full text-[#8C8B8B] ${field.special ? "rounded-tl-[20px] rounded-tr-[20px]" : field.special === false ? "rounded-bl-[20px] rounded-br-[20px]" : ""} text-[16px] leading-tight focus:outline-none focus:shadow-outline`}
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  required
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button
                className="text-[#5EA078] bg-[#E7FFF1] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? "loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MembersData;
