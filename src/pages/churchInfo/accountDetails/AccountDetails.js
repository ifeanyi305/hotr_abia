import React from 'react';
import ComponentFooter from '../../../components/footer/ComponentFooter';
import gtBank from "../../../images/gtbank.png";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountDetails = () => {
  const accountDetails = [
    {
      acc_num: "0650438993",
      text: "Mission & Benevolence",
    },
    {
      acc_num: "0041065182",
      text: "Offering & Tithe",
    },
    {
      acc_num: "0177445818",
      text: "Project offering",
    },
  ];

  const handleCopy = (acc_num) => {
    navigator.clipboard.writeText(acc_num)
      .then(() => {
        toast.success(`Account number ${acc_num} copied to clipboard`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div>
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
      <div className="w-full bgImage py-[10%] px-4">
        <p className="text-center text-[24px] text-white font-[600]">ACCOUNT DETAILS</p>
      </div>
      <div className="bg-[#E7FFF1] w-full  py-[5%] px-[7%]">
        <div className="bg-white p-6">
          <p className="text-[#23854c] text-center pb-6">House On The Rock Aba</p>
          <img src={gtBank} alt="gt_bank_logo" className="m-auto my-4" />
          {accountDetails.map((detail, index) => (
            <div className="bg-[#F6F6F6] rounded-2xl p-4 my-4">
              <div className="flex items-center gap-4 justify-between">
                <div>
                  <p className="text-[#23854c] font-extrabold font-sans text-[24px]">{detail.acc_num}</p>
                  <p className="text-[#8C8B8B] text-[18px] font-[400]">{detail.text}</p>
                </div>
                <div>
                  <button type="button" onClick={() => handleCopy(detail.acc_num)}>
                    <IoCopyOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center my-4 text-[#8C8B8B] text-[20px] font-[400]">Thank You For Your Support</p>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default AccountDetails;
