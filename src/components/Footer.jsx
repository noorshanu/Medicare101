
function Footer() {
  return (
    <div className=" bg-[#141f23] relative ">
      <section className="   pb-2 pt-8   " id="contact">
        <div className=" container-wrapper relative  ">
          <div className=" flex flex-col sm:flex-row justify-evenly items-center">
            <div className=" w-full sm:w-1/2">
            <h1 className=" text-[#092f88] text-4xl font-bold text-center py-2 sm:text-start">Medicare<span className="text-[#c9112d]">101</span></h1>
              
            </div>

            {/* <div className=" foot-box">
            <MdAddIcCall   className=" text-[38px] text-white text-center flex justify-center items-center mx-auto mb-2"/>

                  <p className="text-white "> Call: 704-460-7756 </p>
            </div> */}

            <div className=" foot-box">
             <img src="images/icon.png" alt=""  className=" mx-auto h-[50px] mb-2"/>

              <a href="https://humana.zoom.us/j/91914088518?pwd=sH96F3AraLxf4o64UT7PRvxZxshFaJ.1" target="_blank"  rel="noreferrer" className="text-white "> Join on Zoom meeting</a>
            </div>
          </div>

          <div className=" relative    mx-auto left-0 right-0 ">
            <div className=" flex justify-between items-center flex-col sm:flex-row">
              <div>
                <p className=" text-white text-sm">
                  Copyright © Humana 2024 All Rights Reserved.
                </p>
              </div>

              <div className=" ">
                <div className="  grid sm:grid-cols-4 grid-cols-2 items-center gap-2 sm:gap-6  sm:justify-normal justify-center mx-auto ">
                  <a href="#about" className="text-white  text-sm block ">
                    About
                  </a>

                  <a href="/contact" className="text-white  text-sm ">
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
