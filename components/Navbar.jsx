import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#fff')

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#121212')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 border-b border-[#232323]"
    >
      <div className="m-auto flex justify-between py-1 px-6 items-center text-white">
        <Link href={'/'}>
          <a
            style={{ color: `${textColor}` }}
            className="flex flex-row gap-1 items-center justify-center"
          >
            <Image
              src={`/../public/assets/Logo.png`}
              width={`48px`}
              height={`48px`}
              alt="Navbar Logo"
            ></Image>
            <div className="self-center">
              <span className="font-extrabold whitespace-nowrap text-3xl">
                S Hub
              </span>
              <span className="ml-1 text-[0.8rem] text-gray-400">
                by JaxCore
              </span>
            </div>
          </a>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Explore</Link>
          </li>
          <li className="p-4">
            <Link href="/">About</Link>
          </li>
          <li className="p-4">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>

        <Link href={'/submit'}>
          <button className="rounded-xl px-3 py-1 m-1 border-b-4 border-r-2 shadow-lg bg-orange-600 border-orange-800 text-white">
            Submit
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
