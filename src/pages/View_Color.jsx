import React from "react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Table from "../common/Table";
import NavBar from "../common/NavBar";
import Tablebody from "../common/Tablebody";

export default function View_Color() {
  const center = "Color";
  const last = "View";

  const linkName = "View Color";
  const firlsCol = "Color Name";
  const secoundCol = "Code";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";
  const firlsRow = "Red";
  const secoundRow = "#er33rv";
  const thirdRow = "1";
  // const forthRow = "Status";
  // const fiveRow = "Action";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">
            <Table
              firlsCol={firlsCol}
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />
            {/* <tbody>
              <tr className=" hover:bg-[#F9FAFB] cursor-pointer items-center py-4">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th
                  scope="row"
                  className=" py-3 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Red
                </th>
                <td className="p-4"> #er33rv</td>
                <td className="p-4"> 1</td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                    Active
                  </button>
                </td>
                <td className="p-4">
                  {" "}
                  <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                    <FaPen />
                  </button>
                </td>
              </tr>
            </tbody> */}
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              // forthRow={forthRow}
              // fiveRow={fiveRow}
            />
          </table>
        </div>
      </div>
    </>
  );
}
