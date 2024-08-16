import { BsTelegram, BsTwitterX } from "react-icons/bs";

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

            <div className=" foot-box">
            <div className=" flex items-center justify-center ">
          <a href="http://t.me/MEDICARE101" target="_blank" rel="noreferrer" className="   text-white text-5xl  mb-2"> 
        <BsTelegram/>
          </a>
        </div>

              <a href="http://t.me/MEDICARE101" target="_blank"  rel="noreferrer" className="text-white "> Join on Telegram</a>
            </div>
            
          </div>

          <div className=" relative    mx-auto left-0 right-0 ">
            <div className=" flex justify-center items-center flex-col sm:flex-row">
              <div>
                <p className=" text-white text-sm flex items-center gap-2">
                Sponsored by the harvest center of Charlotte   <img src="images/logo.jpeg" alt=""  className=" h-[50px]"/>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
