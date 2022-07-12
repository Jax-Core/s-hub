import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Logo_2.svg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-screen-2xl m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>

          <h2 className='py-4'>About S Hub</h2>

          <p className='py-2 max-w-screen-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ac nunc pharetra, cras egestas platea commodo, fusce amet eleifend. 
          Metus, a, vitae sit pretium nulla non.
          </p>

        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 '>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
