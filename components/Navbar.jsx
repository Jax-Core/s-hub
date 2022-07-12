import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState('#ecf0f3');
  const [linkColor] = useState('#4C566A');


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
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a className='flex justify-between items-center mr-auto'>
            <Image
              src={NavLogo}
              alt='/'
              width='64'
              height='64'
              className='cursor-pointer'
            />
            <span className='flex justify-between items-baseline'>
              <span className='px-2 text-4xl font-bold md:flex'>S Hub </span>
              <span className='text-base md:flex'>by JaxCore</span>
            </span>
          </a>
        </Link>
        <div className='mr-auto'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='text-2xl hover:border-b hover:text-anchorman'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-2xl hover:border-b hover:text-anchorman'>
              <Link href='/'>Setups</Link>
            </li>
            <li className='ml-10 text-2xl hover:border-b hover:text-anchorman'>
              <Link href='/'>FAQ</Link>
            </li>
            <li className='ml-10 text-2xl hover:border-b hover:text-anchorman'>
              <Link href='/'>Core</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center items-center flex-shrink-0 ">
          <Link href='/'>
        <a 
            className="py-1 px-4 
                  text-2xl font-semibold text-anchorman
                  focus:outline-none rounded
                  bg-blue
                  border-2 border-r-4 border-b-4 border-anchorman
                  "
          >
            Submit
          </a>
          </Link>
				</div>
      </div>

     
    </div>
  );
};

export default Navbar;
