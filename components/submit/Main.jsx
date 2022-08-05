import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-[url('https://github.com/Jax-Core/S-Hub/blob/d2df29f4bfbf00a12b9fb45fdd4b7648405b0008/public/assets/submitBG.png')]"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col gap-[2rem] items-center justify-center">
          <h1 className="text-5xl text-[#2E3440] max-w-[1024px] md:text-[60px] md:leading-[60px] 2xl:leading-[84px] 2xl:text-[84px] text-center">
            Ready to share your desktop setup?
          </h1>
          <Link href="/">
            <button
              className="
                  text-base font-semibold
                  py-2 px-9
                  rounded-3xl
                  bg-[#ECEFF4]
                  border border-r-4 border-b-4 border-[#2E3440]
                  focus:outline-none md:mt-5 2xl:mt-5 2xl:text-2xl"
            >
              Let&apos;s go
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main
