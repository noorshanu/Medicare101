import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-t-4 border-[#092f88]  py-1  w-full z-40 shadow-xl  ">
      <div className="max-w-6xl mx-auto  flex justify-between items-center   px-4 py-1 ">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <h1 className=" text-[#092f88] text-4xl font-bold">Medicare<span className="text-[#c9112d]">101</span></h1> */}
        <img src="images/logo.jpeg" alt=""  className=" h-[60px]"/>

          
        </a>

        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <a href="/" className="text-[#092f88]  font-bold text-lg px-3 py-2">Home</a>
          <a href="#about" className="text-[#092f88] font-bold text-lg px-3 py-2">About</a>
         
         
          {/* <a href="/contact" className="text-[#092f88] font-bold text-lg px-3 py-2">Contact Us</a> */}
        </div>

        {/* Wallet Connect button */}
     


        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className=" text-green-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-black rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4"
          >
            <a href="/" className="text-white font-bold text-lg block px-3 py-2">Home</a>
          
            {/* <a href="/contact" className="text-white font-bold text-lg block px-3 py-2">contact</a> */}
            
            
         
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
