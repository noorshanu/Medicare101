import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
   <div className=" relative ">
    
     <section className="   pb-2 pt-8  " id="contact">
      <div className=" container-wrapper relative  ">

        <img src=" images/fav.svg" alt=""  className=" text-center h-[150px] mx-auto"/>
      

        <div className=" relative    mx-auto left-0 right-0 ">
          <div className=" flex justify-between items-center flex-col sm:flex-row">
            <div>
             

        

            <p className=" text-black">Copyright  © Humana 2024  All Rights Reserved.</p>
            </div>

            <div className=" ">
          
          

              <div className="  grid sm:grid-cols-4 grid-cols-2 items-center gap-2 sm:gap-6  sm:justify-normal justify-center mx-auto ">
                <a
                  href="#about"
                  className="text-black  text-lg block "
                >
                  About
                </a>
             
             
                <a
                  href="#contact"
                  className="text-black  text-lg "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}

export default Footer;
