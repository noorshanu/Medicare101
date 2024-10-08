import HeroSlider from "./HeroSlider";


function Hero() {
  return (
    <section className="  bg-[#092f88] ">
      <div className=" container-wrapper   overflow-hidden relative">

        <div className=" flex flex-col sm:flex-row justify-between py-4  items-center sm:py-12">

          <div className=" w-full sm:w-1/2" data-aos="zoom-in-right" data-aos-duration="1500">
          <p className=" py-4 text-sm  mt-[1%] font-semibold text-white">Welcome to Medicare101</p>
            <h1 className="text-[#fff] text-2xl sm:text-4xl font-semibold  mb-1 ">
            Turning 65 Soon ?  <br /> 
            </h1>
            <h1 className="text-[#e73636] text-2xl sm:text-4xl font-medium  mb-1 ">
            Recently Retired  ?  <br /> 
            </h1>
            <h1 className="text-[#fff] text-2xl sm:text-4xl  mb-3 ">
            Confused  About Medicare? <br /> 
            </h1>

            <p  className=" mt-2 sm:mt-8 text-lg text-white">
            We understand that navigating Medicare can be overwhelming, <br /> especially if you're new to it. That's why we're here to help!
            </p>


          <p className=" text-white font-bold  mt-4">Join us clicking the link below,  than select  “join with browser” <br /> to access the seminar</p>
           <div className=" w-[135px]">
           <a href="https://humana.zoom.us/j/91914088518?pwd=sH96F3AraLxf4o64UT7PRvxZxshFaJ.1" target="_blank"  rel="noreferrer" className=" bg-[#1e86ff] px-2 py-2 
           text-xl font-semibold text-white rounded-full my-4 
           shadow-lg flex items-center gap-2"> <img src="images/icon.png" alt="" className="h-[40px] shadow-2xl"  /> Join us</a>
           </div>
           
          </div>

          <div className=" w-full sm:w-1/2" data-aos="zoom-in-right" data-aos-duration="1500" >

          {/* <img src=" images/hero.webp" alt=""  className=" rounded-lg" data-aos="zoom-in-right" data-aos-duration="1500"/> */}

          <HeroSlider/>

          </div>

        </div>

        
    
      </div>
    </section>
  );
}

export default Hero;
