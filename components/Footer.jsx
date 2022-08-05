import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6">
      <div className="flex items-center gap-1 flex-row justify-between">
        <Link href={'/'}>
          <a className="flex flex-row gap-1 items-center justify-center mr-auto">
            <Image
              src={`/assets/JaxCore_Logo.png`}
              width={`25px`}
              height={`25px`}
              alt="Navbar Logo"
            ></Image>
            <div className="self-center">
              <span className="text-xl font-semibold whitespace-nowrap">
                JaxCore
              </span>
            </div>
          </a>
        </Link>

        <span className="text-sm text-gray-400">
          © 2022{' '}
          <a href="#" target={`_blank`} className="hover:underline">
            S-Hub™
          </a>
          . All Rights Reserved.
        </span>

        <div className="flex ml-auto divide-x divide-gray-500">
          <Link href="https://github.com/Jax-Core/S-Hub">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="pr-3 text-gray-400 hover:text-white ease-in-out duration-300"
            >
              <FiGithub fontSize={`1.25rem`} />
            </a>
          </Link>

          <Link href="https://discord.gg/JmgehPSDD6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="pl-3 text-gray-400 hover:text-white ease-in-out duration-300"
            >
              <FaDiscord fontSize={`1.25rem`} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
