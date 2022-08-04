import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../../public/assets/Logo_2.svg'

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-6 flex flex-col py-[100px] md:flex-row md:items-center md:justify-between"
    >
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold pb-10 text-center md:text-left 2xl:pb-15 2xl:text-6xl">
          About S Hub
        </h2>

        <p className="text-xl text-center py-2 md:text-left md:max-w-screen-sm 2xl:max-w-screen-xl 2xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nunc
          pharetra, cras egestas platea commodo, fusce amet eleifend. Metus, a,
          vitae sit pretium nulla non.
        </p>
      </div>
      <Image
        src={AboutImg}
        width={`300px`}
        height={`300px`}
        className="rounded-xl"
        alt="/"
      />
    </div>
  )
}

export default About
