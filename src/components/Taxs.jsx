import React from "react";

function Taxs() {
  return (
    <section className="bg-[#0f131cee] pt-[2%] pb-[5%]  relative ">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className=" container-wrapper rounded-2xl  box-s2  "
      >
        <div className=" flex justify-between gap-4 items-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-4 justify-evenly w-full sm:w-1/2">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream txts " id="logo">
                LP Burning
              </h5>
              <p className="font-normal text-purple-300  text-center">
                LP LOCKED
              </p>
            </a>

            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream txts " id="logo">
                No Taxes
              </h5>
              <p className="font-normal text-purple-300 text-center">
                0% BUY / 0% SELL
              </p>
            </a>

            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream txts " id="logo">
                Contract
              </h5>
              <p className="font-normal text-purple-300 text-center">
                Mint REVOKED
              </p>
            </a>

            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream  txts" id="logo">
                Fair Launch
              </h5>
              <p className="font-normal text-purple-300 text-center">
                NO PRE-SALES
              </p>
            </a>
          </div>

          <div className="sm:w-1/2 w-full">
            <img
              src="images/mon.png"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" h-[450px] zoom-in-out-box"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <div>
          <p className=" text-center text-yellow-300 mt-4">
            $PUPE UTILITY TOKEN - SOLANA CHAIN{" "}
          </p>

          <h1 className=" text-xl sm:text-5xl font-bold font-dream text-center text-white py-2 txts" id="logo">
            Total Supply 1.000.000.000
          </h1>
          <p className="text-center text-yellow-300 mt-4">
            Contract Adress: 84LSrwyBiU7agZ9oBVVRt783fP8jZssGDVmVXr4r5eez
          </p>
        </div>
      </div>
    </section>
  );
}

export default Taxs;
