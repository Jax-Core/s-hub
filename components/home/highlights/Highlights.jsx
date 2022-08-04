import Image from 'next/image'
import React from 'react'
import { data } from './data'
import Highlight from './Highlight'

const Highlights = () => {
  return (
    <section className="w-full p-6">
      <div className=" mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold pb-10 text-center md:text-left 2xl:pb-20 2xl:text-6xl">
          Main Highlights
        </h2>
        <div className="flex flex-wrap -m-4">
          {data.map((highlight) => (
            <Highlight key={highlight.id} highlight={highlight} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
