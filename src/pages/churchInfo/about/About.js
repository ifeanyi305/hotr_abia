import React from 'react';
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { aboutInfo } from '../../../data/data';

const About = () => {
  return (
    <div>
      <div className="py-[8%] bg-[#E7FFF1] h-svh">
        <div>
          {aboutInfo.map((about, index) => (
            <div key={about.id} className={`px-[6%] py-6 ${index % 2 === 1 ? 'bg-white' : 'bg-transparent'}`}>
              <p className={`${index % 2 === 1 ? 'text-[#858282]' : 'text-[#07923F]'} text-[20px] font-extrabold`}>{about.title}</p>
              <p className="text-[13px] text-[#858282]">{about.desc}</p>
              <ul className={`${index % 2 === 1 ? 'list-[square] px-4' : ''}`}>
                <li className="text-[13px] text-[#858282]">{about.list1}</li>
                <li className="text-[13px] text-[#858282]">{about.list2}</li>
                <li className="text-[13px] text-[#858282]">{about.list3}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <ComponentFooter />
    </div>
  );
};

export default About;
