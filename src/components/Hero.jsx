import HeroSlider from "./HeroSlider";


function Hero() {
  return (
    <section className="  bg-[#097cbf] ">
      <div className=" container-wrapper   overflow-hidden relative">

        <div className=" flex justify-between py-4  sm:py-12">

          <div className=" w-full sm:w-1/2" data-aos="zoom-in-right" data-aos-duration="1500">
          <p className=" py-4 text-sm  mt-[10%] font-semibold text-white">Welcome to Medicare101</p>
            <h1 className="text-[#fff] text-4xl font-semibold  mb-1 ">
            Are You Turning 65 Soon  or <br /> 
            </h1>
            <h1 className="text-[#88ce4a] text-4xl font-medium  mb-1 ">
            Recently Retired  Feeling  <br /> 
            </h1>
            <h1 className="text-[#fff] text-4xl  mb-3 ">
            Confused  About Medicare? <br /> 
            </h1>

            <p  className=" mt-8 text-lg text-white">
            We understand that navigating Medicare can be overwhelming, <br /> especially if you're new to it. That's why we're here to help!
            </p>

            <button className=" bg-[#88ce4a] px-12 py-2 text-xl font-semibold text-white rounded-full my-4 shadow-lg"> Join us</button>
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
