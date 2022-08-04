import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#4C566A')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 border-b"
    >
      <div className="m-auto flex justify-between py-1 px-6 items-center text-white">
        <Link href={'/'}>
          <a
            style={{ color: `${textColor}` }}
            className="flex flex-row gap-1 items-center justify-center"
          >
            <Image
              src={`/../public/assets/navLogo.png`}
              width={`48px`}
              height={`48px`}
              alt="Navbar Logo"
            ></Image>
            <div className="self-center">
              <span className="text-[#4C566A] text-2xl font-extrabold whitespace-nowrap md:text-3xl">
                S Hub
              </span>
              <span className="text-sm ml-1 md:text-base">by JaxCore</span>
            </div>
          </a>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/setups">Setups</Link>
          </li>
          <li className="p-4">
            <Link href="/">FAQ</Link>
          </li>
          <li className="p-4">
            <Link href="/">Core</Link>
          </li>
        </ul>

        <button className="hidden sm:flex text-[#4C566A] font-semibold py-1 px-2 border border-[#4C566A] border-b-4 border-r-4 rounded rounded-xl ">
          <Link href={'/submit'}>Submit</Link>
        </button>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute text-[#4C566A] top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute text-[#4C566A] top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/setups">Setups</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/faq">FAQ</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/core">Core</Link>
            </li>
            <button className="text-[#4C566A] mt-4 text-2xl font-semibold py-2 px-4 border border-[#4C566A] rounded rounded-xl ">
              Submit
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
