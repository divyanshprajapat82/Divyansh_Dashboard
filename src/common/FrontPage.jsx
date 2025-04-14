import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";

export default function FrontPage() {
  // const [signIn, setSignIn] = useState(false);

  const navigate = useNavigate();
  const SignInButton = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <>
      <div className="bg-[#F9FAFB]">
        <div className=" max-w-[400px] m-auto">
          <div className=" h-[100vh] flex flex-col justify-center">
            <div className="flex justify-center mb-2">
              <img src="images/wscube-tech-logo-2.svg" alt="" />
            </div>
            <div className="bg-[#fff] p-4 shadow-md rounded-[10px] w-full">
              <h1 className="text-[20px] font-[700]">
                Sign in to your account
              </h1>
              <form onSubmit={SignInButton}>
                <div className="flex flex-col mt-2">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="p-2 border border-[#00000034] bg-[#F9FAFB] rounded-[6px] mt-1"
                    placeholder="Enter Email"
                    required
                    // onChange={(e) => setSignIn(console.log(e.target.value))}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="">Password</label>
                  <input
                    type="Password"
                    className="p-2 border border-[#00000034] bg-[#F9FAFB] rounded-[6px] mt-1"
                    placeholder="Enter Password"
                    required
                    // onChange={(e) => setSignIn(console.log(e.target.value))}
                  />
                </div>

                {/* <Link to={`${signIn == "" ? "/" : "/dashboard"}`}> */}
                <button className="bg-[#2563EB] text-[#fff] py-2 px-3 rounded-[8px] text-[15px] font-[500]  cursor-pointer mt-2 w-full">
                  {/* Add Category */}
                  Sign In
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
