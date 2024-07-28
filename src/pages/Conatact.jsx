import Footer from "../components/Footer";
import { BiMailSend } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { MdAddIcCall } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
function Conatact() {
  return (
    <div className=" relative overflow-x-hidden">
      <section className="wrapper">
        <div className=" hero-main ">
          <Navbar />
        </div>

        <div className=" contact py-8 bg-[#ececec]">
          <div className=" container-wrapper">

            <h1 className=" text-center font-bold text-3xl mb-4 ">If any Queries? Contact me here! </h1>
            <div className=" flex flex-col justify-center gap-4 items-center">
              <div className=" w-full  ">
                <img
                  src="images/owner.jpeg"
                  alt=""
                  className=" h-[400px] w-auto mx-auto rounded-2xl border-2  shadow-2xl"
                />
              </div>

              <div className=" flex flex-col sm:flex-row  justify-center gap-2 sm:gap-8">
                <div className=" foot-box">
                <BiMailSend className=" text-[38px] text-white text-center flex justify-center items-center mx-auto mb-2" />

                  <p className="text-white "> Jpaquette@Humana.com</p>
                </div>

                <div className=" foot-box">
                <MdAddIcCall   className=" text-[38px] text-white text-center flex justify-center items-center mx-auto mb-2"/>

                  <p className="text-white "> Call: 704-460-7756 </p>
                </div>

                <div className=" foot-box">
                <FaGlobeAmericas className=" text-[38px] text-white text-center flex justify-center items-center mx-auto mb-2" />
                  <p className="text-white "> Address: Belmont, NC</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center flex-col items-center gap-4 border-green-500 border-2 rounded-xl py-8 bg-[#097cbf]">

                <div>
                <h1 className="text-[#fff] text-2xl sm:text-4xl font-semibold  mb-1 text-center ">
            Are You Turning 65 Soon  or  Recently Retired  Feeling  <br />  Confused  About Medicare? <br /> 
            </h1>
        
      
            <h1 className=" text-center text-xl sm:text-3xl font-semibold text-[#fffefe] py-6 px-2 ">
          {" "}
          Join us every Friday at 1 PM for a concise  <br /> and informative 30-minute
          Medicare 101 seminar.
        </h1>

        <div className=" flex justify-center">
           <button className=" bg-[#1e86ff] hover px-4  text-xl font-semibold text-white rounded-full my-2 mx-auto flex gap-2 items-center shadow-2xl"> <img src="images/icon.png" alt="" className=" h-[40px] shadow-2xl" /> Join us</button>
           </div>
                </div>

            </div>
          </div>
        </div>

   
          <Footer />
    
      </section>
    </div>
  );
}

export default Conatact;
