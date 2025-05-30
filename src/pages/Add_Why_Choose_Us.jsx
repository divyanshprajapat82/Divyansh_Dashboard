import React, { useEffect } from "react";
import NavBar from "../common/NavBar";
import $ from "jquery";
import "dropify/dist/js/dropify.min.js";
import "dropify/dist/css/dropify.min.css";

export default function Add_Why_Choose_Us() {
  const center = "Why Choose Us";
  const last = "Add";

  useEffect(() => {
    $(".dropify").dropify({
      messages: {
        default: "Drag and drop",
      },
      tpl: {
        message: `<div class="dropify-message"><span class="file-icon" /> <p class="text-[25px]">{{ default }}</p></div>`,
      },
    });
  });
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="mb-4 max-w-[1000px] m-auto mt-4  border border-[#0000004a] rounded-[5px]">
          <div className="bg-[#F1F5F9] px-4 py-3 border border-[#0000004a] rounded-[5px] flex items-center justify-between flex-wrap">
            <h1 className="text-[20px] font-[600]">Add Why Choose Us</h1>
          </div>
          <form action="" className="p-2">
            <div className="flex lg:flex-nowrap flex-wrap gap-4">
              <div className="lg:w-[40%] w-full">
                <label className="mb-1">
                  <b>Category Image</b>
                </label>
                <input
                  type="file"
                  className="dropify  text-[15px]"
                  data-height="250"
                />
              </div>
              <div className="lg:w-[60%] w-full">
                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Title</b>
                  </label>
                  <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Order</b>
                  </label>
                  <input
                    type="number"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Order"
                    required
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="mb-1">
                    <b>Description</b>
                  </label>
                  {/* <input
                    type="text"
                    className=" border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Enter Order"
                    required
                  /> */}
                  <textarea
                    className="h-[90px] border border-[#0000004a] rounded-[5px] outline-0 px-3 py-1 "
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              className="bg-[#7E22CE] text-[#fff] py-2 px-3 rounded-[8px] font-[500]  cursor-pointer my-4"
              onSubmit={(e) => e.preventDefault()}
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
