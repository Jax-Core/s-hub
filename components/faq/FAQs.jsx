import Image from 'next/image'
import React from 'react'
import { data } from './data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen divide-y divide-gray-500">
      <h2 className="font-bold pb-5 text-left text-5xl ">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col pt-5 divide-y divide-gray-500">
        {data.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  )
}

export default FAQs
