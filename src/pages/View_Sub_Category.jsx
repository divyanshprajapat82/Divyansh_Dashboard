import React from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Tablebody from "../common/Tablebody";

export default function View_Sub_Category() {
  const center = "Sub Category";
  const last = "View";
  const linkName = "View Sub Category";
  const firlsCol = "Parent Category Name";
  const middleCol = "Sub Category Name";
  const secoundCol = "Image";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const middleRow = "Men";
  const secoundRow = <img src="images/iso.png" width={40} />;
  const thirdRow = "1";
  const btn = "Deactive";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">
            <Table
              firlsCol={firlsCol}
              middleCol={middleCol}
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />

            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              middleRow={middleRow}
            />
            {/* <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              btn={btn}
            /> */}
          </table>
        </div>
      </div>
    </>
  );
}
