import React, { useState } from 'react';
import bible from "../../../images/read_bible.png";
import ComponentFooter from '../../../components/footer/ComponentFooter';
import { cithData } from '../../../data/data';

const Cith = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(cithData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = cithData.filter((item) =>
      item.location.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="bg-[#E7FFF1] w-full  py-[5%] px-[7%]">
        <div className="">
          <div className="mb-4 flex justify-center">
            <img src={bible} alt="read_bible" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search by location"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 my-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="overflow-x-auto mx-auto">
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="w-1/6 px-4 py-2">S/N</th>
                <th className="w-1/2 px-4 py-2">CITH LOCATION</th>
                <th className="w-1/4 px-4 py-2">CITH LEADER</th>
                <th className="w-1/4 px-4 py-2">CONTACT NUMBER(S)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`bg-white border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                >
                  <td className="px-[6px] border py-[4px]">{index + 1}</td>
                  <td className="px-[6px] border py-[4px]">{item.location}</td>
                  <td className="px-[6px] border py-[4px]">{item.leader}</td>
                  <td className="px-[6px] border py-[4px]">{item.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">
        <ComponentFooter />
      </div>
    </div>
  );
};

export default Cith;
