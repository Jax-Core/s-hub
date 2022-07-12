import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="bg-black max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className=" text-[84px] max-w-[1024px]">
            Get, beautiful setups in mere{" "}
            <span className="text-[#D08770]"> seconds.</span>
          </h1>
          <p className="py-4 pb-5 text-gray-600 sm:max-w-[70%] m-auto">
            A unique tool which allows you to install whole Windows desktop
            setups easily.
          </p>
          <Link href="/">
  
              <button className="
                  text-2xl font-semibold text-anchorman
                  mt-12 py-2 px-12
                  rounded-3xl
                  bg-[#ECEFF4]
                  border-2 border-r-4 border-b-4 border-anchorman
                  focus:outline-none md:mt-0"
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
