import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-5xl max-w-[1024px] md:text-[60px] md:leading-[60px] 2xl:leading-[84px] 2xl:text-[84px] text-center">
            Get beautiful setups in mere{" "}
            <span className="text-[#D08770]"> seconds.</span>
          </h1>
          <p className="py-4 pb-5 text-gray-600 sm:max-w-[70%] m-auto">
          Share and import customized Windows setups easily.
          </p>
          <Link href="/">
  
              <button className="
                  text-base font-semibold
                  py-2 px-9
                  rounded-3xl
                  bg-[#ECEFF4]
                  border border-r-4 border-b-4 border-[#2E3440]
                  focus:outline-none md:mt-5 2xl:mt-5"
              >
                Browse
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
