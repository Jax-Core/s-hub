import Image from 'next/image'
import React from 'react'

const Highlight = ({ highlight }) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="flex rounded-lg h-full p-8 flex-col">
        <div className="flex flex-col items-center mb-3 gap-3">
          <Image
            src={highlight.image}
            width={`50px`}
            height={`50px`}
            alt="Highlight Icon"
          />
          <h2 className="text-lg title-font font-medium 2xl:text-4xl">
            {highlight.title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-center 2xl:text-2xl ">
            {highlight.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Highlight
