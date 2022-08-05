import Image from 'next/image'
import React from 'react'

const Highlight = ({ highlight }) => {
  return (
    <div className="p-4 w-1/3 ">
      <div className="flex rounded-lg h-full p-8 flex-col">
        <div className="flex flex-col items-center mb-3 gap-3">
          <span
            className={`w-20 h-20 inline-flex items-center justify-center ${highlight.background} ${highlight.color} mb-5 flex-shrink-0 p-4 rounded-full`}
          >
            {highlight.image}
          </span>
          <h2 className="text-lg title-font">{highlight.title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-center">
            {highlight.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Highlight
