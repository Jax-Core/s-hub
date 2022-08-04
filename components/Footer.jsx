import Link from "next/link";
import React from "react";
import Image from "next/image"
import { FiGithub } from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'

const Footer = () => {
  return (

<footer className="p-4 sm:p-6">

   
    <div className="flex flex-col items-center gap-1 md:flex-row md:justify-between">
    <Link href={"/"}>
          <a className="flex flex-row gap-1 items-center justify-center">
            <Image src={`/../public/assets/navLogo.png`} width={`48px`} height={`48px`}></Image>
          <div className="self-center">
            <span className="text-[#4C566A] text-2xl font-extrabold whitespace-nowrap md:text-3xl">S Hub</span>
            <span className="text-sm ml-1 md:text-base">by JaxCore</span>
          </div>
          </a>
        </Link>
        
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">S-Hub™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
           
            <a href="#" className="text-gray-500 flex flex-row items-center justify-center gap-1 hover:underline">
                <FiGithub fontSize={`1.25rem`}/>
                <span className="text-base font-semibold">Github</span>
            </a>
            <a href="#" className="text-gray-500 flex flex-row items-center justify-center gap-1 hover:underline">
                <FaDiscord fontSize={`1.5rem`}/>
                <span className="text-base font-semibold">Discord</span>
            </a>
            
        </div>
    </div>
</footer>

  );
};

export default Footer;
