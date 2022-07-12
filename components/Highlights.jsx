import Image from 'next/image';
import React from 'react';
import Dashboard from '../public/assets/Dashboard.svg';
import Download from '../public/assets/Download.svg'
import Send from '../public/assets/Send.svg';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2'>
      <div className='max-w-screen-2xl mx-auto flex flex-col justify-center h-full'>

        <h2 className='py-6 text-6xl font-bold pb-20'>Main Highlights</h2>
        <div className='grid grid-cols-3 gap-8'>
          
        <div className='p-6 shadow-lg rounded-xl'>
            <div className='grid grid-rows-2 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Dashboard} width='96px' height='96px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-3xl font-semibold py-2'>Large variety of setups</span>
                <span className='text-xl'>Short description goes here</span>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl'>
            <div className='grid grid-rows-2 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Download} width='96px' height='96px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-3xl font-semibold py-2'>Large variety of setups</span>
                <span className='text-xl'>Short description goes here.</span>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl '>
            <div className='grid grid-rows-2 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Send} width='96px' height='96px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-3xl font-semibold py-2'>Large variety of setups</span>
                <span className='text-xl'>Short description goes here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
