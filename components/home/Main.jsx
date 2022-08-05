import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="max-w-5xl leading-8xl text-6xl text-center">
            Download & Share beautiful setups in mere{' '}
            <span className="text-orange-600"> seconds.</span>
          </h1>
          <p className="py-4 pb-5 text-gray-400 m-auto max-w-xl">
            S Hub is the go-to place to discover and showcase your Windows
            environment setup.
          </p>
          <Link href="/">
            <button className="flex flex-row max-w-max ease-in-out duration-300 text-base font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-600/25 px-9 py-2 m-1 text-white bg-gradient-to-tr from-red-600 via-orange-600 to-yellow-500">
              Explore
              <span>
                <FiChevronRight fontSize={`1.5rem`} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main
