

function Hero() {
  return (
    <section className="   ">
      <div className=" container-wrapper   overflow-hidden relative">

        <div className=" flex justify-between  pb-8">

          <div className=" w-full sm:w-1/2" data-aos="zoom-in-right" data-aos-duration="1500">
          <p className=" py-4 text-sm  mt-[10%] font-semibold">Welcome to Medicare101</p>
            <h1 className="text-[#6e9832] text-4xl  mb-1 ">
            Are You Turning 65 Soon  or <br /> 
            </h1>
            <h1 className="text-[#6e9832] text-4xl  mb-1 ">
            Recently Retired  Feeling  <br /> 
            </h1>
            <h1 className="text-[#6e9832] text-4xl  mb-3 ">
            Confused  About Medicare? <br /> 
            </h1>

            <p  className=" mt-8 text-lg">
            We understand that navigating Medicare can be overwhelming, <br /> especially if you're new to it. That's why we're here to help!
            </p>

            <button className=" bg-[#602166] px-4 py-2 text-xl font-semibold text-white rounded-md my-4"> Join us</button>
          </div>

          <div className=" w-full sm:w-1/2" >

          <img src=" images/hero.webp" alt=""  className=" rounded-b-lg" data-aos="zoom-in-right" data-aos-duration="1500"/>

          </div>

        </div>

        
    
      </div>
    </section>
  );
}

export default Hero;
