import React from "react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Table from "../common/Table";
import NavBar from "../common/NavBar";
import Tablebody from "../common/Tablebody";

export default function View_Country() {
  const center = "Location";
  const last = "View";
  const linkName = "View Country";
  const firlsCol = "Country Name";
  const secoundCol = "";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const secoundRow = "";
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
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
            />
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              btn={btn}
            />
          </table>
        </div>
      </div>
    </>
  );
}
