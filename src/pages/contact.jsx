import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-[#ffffff]">
      <div className="pt-[90px] bg-[#ffffff] text-[#000009] w-[90vw] lg:w-[60%]">
        <div className="flex flex-col items-center">
          <div className="w-[80vw] text-center">
            <p className="text-[3rem]">Contact Us</p>
            <p className="text-[2rem]">
              If you are inquiring about our services and pricing, Kindly fill
              in the contact form below
            </p>
          </div>
          <form
            className="w-[90%] p-[1rem] border border-[#ffd200] rounded-[10px] my-[1rem] flex flex-col"
            action="https://formsubmit.co/henryekene8@gmail.com"
            method="POST"
          >
            <label className="text-left mt-[0.5rem] text-[1.5rem]">Name</label>
            <input
              type="text"
              name="Name"
              className=" border py-[0.5rem] text-black rounded-[10px] text-[1.5rem] px-[1rem]"
            />
            <label className="text-left mt-[0.5rem] text-[1.5rem]">Email</label>
            <input
              type="text"
              name="Email"
              className=" border py-[0.5rem] text-black rounded-[10px] px-[1rem] text-[1.5rem]"
            />

            <label className="text-left mt-[0.5rem] text-[1.5rem]">
              Enquiry
            </label>
            <textarea
              name="Enquiry"
              className="p-[1rem] text-[1.5rem] text-black border rounded-[10px]"
            />
            <input
              type="submit"
              value="Submit"
              className="font-bold border border-[#ffd200] bg-[#ffd200] rounded-[20px] text-white mt-[2rem] text-[2rem] py-[0.5rem] px-[1rem]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
