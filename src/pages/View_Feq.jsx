import React from "react";
import NavBar from "../common/NavBar";
import TableHeader from "../common/TableHeader";
import Table from "../common/Table";
import Tablebody from "../common/Tablebody";
import { FaPen } from "react-icons/fa";

export default function View_Feq() {
  const center = "Faq";
  const last = "View";
  const linkName = "View Faqs";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="mb-4 max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">
            <thead className=" overflow-hidden">
              <tr className=" bg-[#F9FAFB] text-[15px]">
                <th scope="col" className="p-3 w-0">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="py-3 px-6">
                  Question
                </th>
                <th scope="col" className="p-3 w-[40%]">
                  Answer
                </th>
                <th scope="col" className="p-3 w-[8%]">
                  Order
                </th>
                <th scope="col" className="p-3 w-[11%]">
                  Status
                </th>
                <th scope="col" className="p-3 w-[6%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th scope="row" className=" py-3 px-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </th>
                <td className="p-4">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae adipisci explicabo molestias possimus quidem
                  obcaecati deserunt vel, officiis, nobis facilis earum quaerat
                  aut esse consequuntur ab praesentium eius suscipit natus!{" "}
                </td>
                <td className="p-4"> 1</td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                    Active
                  </button>
                </td>
                {/* )} */}
                <td className="p-4">
                  {" "}
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                    <FaPen />
                  </button>
                </td>
              </tr>
              <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th scope="row" className=" py-3 px-6">
                  Neil Sims
                </th>
                <td className="p-4">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae adipisci explicabo molestias possimus quidem
                  obcaecati deserunt vel, officiis, nobis facilis earum quaerat
                  aut esse consequuntur ab praesentium eius suscipit natus!{" "}
                </td>
                <td className="p-4"> 1</td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                    Active
                  </button>
                </td>
                {/* )} */}
                <td className="p-4">
                  {" "}
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                    <FaPen />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
