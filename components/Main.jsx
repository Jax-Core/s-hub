import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='bg-black max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div >
          <h1 className='py-4 text-gray-700 max-w-[800px]'>
            Get, beautiful setups in mere <span className='text-[#D08770]'> seconds.</span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          A unique tool which allows you to install whole Windows desktop setups easily.
          </p>
          <a href='/'
            class="py-1 px-4 
                  text-2xl font-semibold text-anchorman
                  focus:outline-none rounded
                  bg-blue
                  border-2 border-r-4 border-b-4 border-anchorman
                  "
          >
            Browse
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default Main;
