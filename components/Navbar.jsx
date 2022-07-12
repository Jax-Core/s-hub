import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState("#ffff");
  const [linkColor] = useState("#4C566A");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href='/'>
              <Image src={NavLogo} alt='Nav Logo'></Image>
            </Link>
            <span className="flex flex-row ml-1 items-baseline gap-1">
              <span className="text-3xl font-bold">S Hub</span>
              <span className="text-base">by JaxCore</span>

            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
            <a className="mr-10">Home</a>
            <a className="mr-10">Setup</a>
            <a className="mr-10">FAQ</a>
            <a className="mr-10">Core</a>
          </nav>
          <Link href='/'>
            <button className="
                    text-2xl font-semibold text-anchorman
                    rounded-3xl
                    bg-[#ECEFF4]
                    border-2 border-r-4 border-b-4 border-anchorman
                    py-1 px-5 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
            >
              Submit
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
