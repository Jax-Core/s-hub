import Image from 'next/image'
import React from 'react'
import { data } from './data'
import Highlight from './Highlight'

const Highlights = () => {
  return (
    <section className="w-full p-6 min-h-screen">
      <div className=" mx-auto flex flex-col justify-center h-full">
        <h2 className="font-bold pb-10 text-left pb-10 text-5xl text-center">
          Discover, Download, and Share.
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
