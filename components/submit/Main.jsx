import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col gap-[2rem] items-center justify-center">
          <h1 className="text-[60px] max-w-[1024px] 2xl:text-[84px]">
            Ready to share your desktop setup?
          </h1>
          <Link href="/">
            <button
              className="
                  text-2xl font-semibold text-anchorman
                  mt-12 py-2 px-12
                  rounded-3xl
                  bg-[#ECEFF4]
                  border border-r-4 border-b-4 border-[#2E3440]
                  focus:outline-none md:mt-0
                  max-w-max"
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
