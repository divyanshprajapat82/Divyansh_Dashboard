import React from "react";
import { FaFilter } from "react-icons/fa";

export default function TableHeader({ linkName }) {
  return (
    <>
      <div className="bg-[#F1F5F9] p-4 py-5 flex items-center justify-between flex-wrap">
        <h1 className="text-[25px] font-[600]">{linkName}</h1>
        <div>
          <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[8px] cursor-pointer">
            <FaFilter />
          </button>
          <button className="bg-[#15803ce9] hover:bg-[#15803D] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
            Change Status
          </button>
          <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
            Detele
          </button>
        </div>
      </div>
    </>
  );
}
