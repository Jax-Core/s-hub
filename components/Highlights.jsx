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

      <div class="flex flex-wrap -m-2">
        <div class="p-4 md:w-1/3">
          <div className="flex rounded-3xl h-full shadow-[0px_4px_20px_3px_#D8DEE9] p-8 flex-col">
          <div className='m-auto'>
                <Image src={Dashboard} width='96px' height='96px' alt='/' />
              </div>
            <div className="flex items-center justify-center mb-3">
              <h2 className="text-3xl title-font font-semibold">Large variety of setups</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                We're no strangers to love
                You know the rules and so do I (do I)
                A full commitment's what I'm thinking of
                You wouldn't get this from any other guy</p>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="flex rounded-3xl h-full shadow-[0px_8px_20px_3px_#D8DEE9] p-8 flex-col">
          <div className='m-auto'>
                <Image src={Download} width='96px' height='96px' alt='/' />
              </div>
            <div className="flex items-center justify-center mb-3">
              <h2 className="text-3xl title-font font-semibold">Simple Instllation</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
              I just wanna tell you how I'm feeling
              Gotta make you understand
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="flex rounded-3xl h-full shadow-[0px_8px_20px_3px_#D8DEE9] p-8 flex-col">
          <div className='m-auto'>
                <Image src={Send} width='96px' height='96px' alt='/' />
              </div>
            <div className="flex items-center justify-center mb-3">
              <h2 className="text-3xl title-font font-semibold">Open Submissions</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Never gonna give you up
                Never gonna let you down
                Never gonna run around and desert you
                Never gonna make you cry
                Never gonna say goodbye
                Never gonna tell a lie and hurt you
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
