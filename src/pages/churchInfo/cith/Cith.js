import React from 'react';
import bible from "../../../images/read_bible.png";
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { Link } from 'react-router-dom';

const Cith = () => {
  return (
    <div>
      <div className="bg-[#E7FFF1] w-full  py-[5%] px-[7%]">
        <div className="mb-4">
          <img src={bible} alt="read_bible" />
        </div>
        <p className="text-[#5EA078] font-[500] text-[20px] text-center">
          We would like to know about you, so we could reach out to you
        </p>
        <div className="flex justify-center">
          <button type="button" className="bg-[#5EA078] mt-4 text-white px-6 py-2 rounded-xl font-[600] text-[20px] text-center">
            <Link to="/church_in_the_home/updpate_data">Update your data</Link>
          </button>
        </div>
      </div>
      <div className="bottom-0 fixed w-full">
        <ComponentFooter />
      </div>
    </div>
  );
};

export default Cith;
