import React, { useState } from 'react';
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";

const MembersData = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    email: '',
    whatsapp: '',
    department: '',
    address: '',
    busStop: '',
    occupation: '',
    loveToJoinDepartment: '',
    inDepartment: false,
  });
  const { name, birthday, email, whatsapp,
    department, address, busStop, occupation,
    loveToJoinDepartment, inDepartment } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !birthday || !email || !whatsapp || !address || !busStop) {
      toast.error('Fill in required fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/virtuo_expert/google_sheets/KrDLBUOtZXxCYqGD?tabId=Sheet1!C15", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name, birthday, email, whatsapp,
          department, address, busStop, occupation, loveToJoinDepartment,
          inDepartment]])
      }
      );
      await response.json();
      if (response.status === 200) {
        toast.success('Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.log(response);
      setIsLoading(false);
      setFormData({
        name: '',
        birthday: '',
        email: '',
        whatsapp: '',
        department: '',
        address: '',
        busStop: '',
        occupation: '',
        loveToJoinDepartment: '',
        inDepartment: '',
      });
    } catch (error) {
      toast.error('An error occured, try refreshing', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const fields = [
    { id: 'name', type: 'text', placeholder: 'Tell Us Your Name', special: true, name: "name" },
    { id: 'birthday', type: 'date', placeholder: 'Birthday', name: "birthday", label: "Your Birthday" },
    { id: 'email', type: 'email', placeholder: 'Email', name: "email" },
    { id: 'whatsapp', type: 'number', placeholder: 'WhatsApp Phone Number', name: "whatsapp" },
    { id: 'department', type: 'text', placeholder: 'Department', name: "department" },
    { id: 'inDepartment', type: 'checkbox', name: 'inDepartment' },
    { id: 'loveToJoinDepartment', type: 'text', name: 'loveToJoinDepartment' },
    { id: 'occupation', type: 'text', placeholder: 'Occupation', name: "occupation" },
    { id: 'address', type: 'text', placeholder: 'Address', name: "address" },
    { id: 'busStop', type: 'text', placeholder: 'Nearby Bus Stop', special: false, name: "busStop" },
  ];
  const departmentOptions = [
    "Technical",
    "Media",
    "Ushering Board",
    "Protocol",
    "Follow up",
    "Evangelism",
    "Prison ministry (An outreach arm)",
    "Rock kids zone",
    "Benevolence",
    "House keeping",
    "Vessels of Glory",
    "Rock Theatre",
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
          <p className="text-[#5EA078] font-[600] text-[22px]">
            Membership Data Update
          </p>
          <p className="text-[#8C8B8B] text-[20px] font-[400]">Help us to know you better</p>
        </div>
        <div className="mt-[5%] bg-green-100">
          <form className="py-2 w-full max-w-sm" onSubmit={handleSubmit} id="form">
            {fields.map(field => (
              <div className="mb-4" key={field.id}>
                <p className="pl-6 text-[#9CA3AF]">{field.label}</p>
                {field.name !== "department" ? (
                  <input
                    className={`shadow bg-white py-4 px-6 appearance-none border rounded w-full text-[#8C8B8B]
                     ${field.special ? "rounded-tl-[20px] rounded-tr-[20px]" :
                        field.special === false ? "rounded-bl-[20px] rounded-br-[20px]" :
                          field.name === "loveToJoinDepartment" ? "hidden" :
                            field.name === "inDepartment" ? "hidden" : ""}
                         text-[16px] leading-tight focus:outline-none focus:shadow-outline`}
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                ) : (
                  <div>
                    <label className="pl-6 text-[#9CA3AF]">
                      Are you currently in a department?
                      <input
                        type="checkbox"
                        name="inDepartment"
                        className="ml-2"
                        checked={formData.inDepartment}
                        onChange={handleChange}
                      />
                    </label>
                    <select
                      className="shadow bg-white py-4 px-6 appearance-none border rounded w-full text-[#8C8B8B] text-[16px] leading-tight focus:outline-none focus:shadow-outline"
                      name={formData.inDepartment ? "department" : "loveToJoinDepartment"}
                      id={formData.inDepartment ? "department" : "loveToJoinDepartment"}
                      value={formData.inDepartment ? formData.department : formData.loveToJoinDepartment}
                      onChange={handleChange}
                    >
                      <option value="">
                        {formData.inDepartment ? "Select your current department" : "Select a department you'd love to join"}
                      </option>
                      {departmentOptions.map((department, index) => (
                        <option key={index} value={formData.inDepartment ? department : `I'd Love To Join ${department}`}>
                          {department}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button
                className="text-[#5EA078] bg-[#fff] border-[1px] border-[#E7FFF1] font-bold py-[3px] px-6 rounded-lg shadow-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? "loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default MembersData;
