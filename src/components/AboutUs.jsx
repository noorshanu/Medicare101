

function AboutUs() {
  return (
    <section
      className="   relative overflow-hidden "
      id="about"
      data-aos="zoom-in-right" data-aos-duration="1500"
    >
      <div className=" container-wrapper ">
        <h1 className=" text-center text-xl sm:text-3xl font-semibold text-[#000000] py-6 px-2 ">
          {" "}
          Join us every Friday at 1 PM for a concise  <br /> and informative 30-minute
          Medicare 101 seminar.
        </h1>

        <div className=" flex justify-between flex-col-reverse sm:flex-row gap-8 border-2 rounded-base border-[#1e86ff] p-2 ">
          <div className=" w-full sm:w-1/2">
            <img src="images/about.jpeg" alt="" className=" h-auto sm:h-[650px] w-full" />
          </div>

          <div className=" w-full sm:w-1/2">
            <h2 className=" text-2xl py-2 font-bold text-center text-[#1e86ff] ">
              During this seminar, we will cover
            </h2>
            <ul className="list-disc pl-5 mt-4">
              <li className="">
                <p className=" text-xl mb-2">
                  Explain the Basics: Learn the essentials of Medicare,
                  including what it covers  and how it works.
                </p>
              </li>
              <li>
              <p className=" text-xl mb-2">
                  Explore Your Benefits: Discover the no-cost benefits you are
                  entitled to as part of Medicare.
                </p>
              </li>
              <li>
              <p className=" text-xl mb-2">
                  Interactive Q&A: Have your questions answered by our
                  knowledgeable experts in a live Q&A session.
                </p>
              </li>
              <li>
              <p className=" text-xl mb-2">
                  Prize Giveaway: Participate in our Q&A session for a chance to
                  win exciting prizes!
                </p>
              </li>
            </ul>

           <img src="images/zoom.png" alt="" className=" h-auto sm:h-[250px] mx-auto" />

           <div className=" flex justify-center">
           <button className=" bg-[#1e86ff] hover px-4  text-xl font-semibold text-white rounded-full my-4 mx-auto flex gap-2 items-center shadow-2xl"> <img src="images/icon.png" alt="" className=" h-[40px] shadow-2xl" /> Join us</button>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
