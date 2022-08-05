import Image from 'next/image'
import React from 'react'

const FAQ = ({ faq }) => {
  return (
    <div className="w-[900px] py-6">
      <div className="flex rounded-lg h-full flex-col">
        <div className="flex flex-col mb-3 gap-3">
          <h2 className="text-3xl font-semibold text-left">{faq.question}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-left">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
