import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { ChromePicker } from "react-color";

export default function Add_Color() {
  const [color, setColor] = useState("#000");

  const center = "Color";
  const last = "Add";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 mb-4 border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Colors</h1>
          </div>
          <form action="" className="p-2">
            <div className="flex flex-col mt-2">
              <label className="mb-1">
                <b>Color Name</b>
              </label>
              <input
                type="text"
                className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                placeholder="Enter Color Name"
                required
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="mb-1">
                <b>Color Picker</b>
              </label>
              <div className="flex items-center gap-4 mt-2 p-2">
                <ChromePicker
                  color={color}
                  onChangeComplete={(color) => setColor(color.hex)}
                />
                <div
                  className="w-[40px] h-[40px] rounded-[8px]"
                  style={{ backgroundColor: `${color}` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1">
                <b>Order</b>
              </label>
              <input
                type="text"
                className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                placeholder="Enter Order"
                required
              />
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-10 mx-2"
              onSubmit={(e) => e.preventDefault()}
            >
              Add Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
