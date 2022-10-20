import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { mySkills } from '../profile';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#297CFC]'>
          Experiencia
        </p>
        <h2 className='py-4'>En que puedo trabajar</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Skills Paint  */}
          {mySkills.map(({ name, img, rel, href, target, alt }, i) => (
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' key={i}>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={img} width='64px' height='64px' alt={alt} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{name}</h3>
                  
          

                </div>
              </div>
            </div>

          ))}
          {/* END: Skills Paint  */}
        </div>
      </div>
    </div>



  );
};

export default Skills;
