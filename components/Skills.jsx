import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
/*
import Css from '../public/assets/skills/css.png';

const mySkills = [
  {alt: 'Sitio web de Bash', img:'/../public/assets/skills/bash.png',name:'Bash', href:'https://www.gnu.org/software/bash/', target:'_blank', rel:'noreferrer'},
  {alt: 'Sitio web de CSS', img:'../public/assets/skills/css.png',name:'CSS', href:'https://www.w3.org/Style/CSS/Overview.en.html', target:'_blank', rel:'noreferrer'},
  ];
*/

import { mySkills } from "../profile.js";

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
                <img src={`/${img}`} alt="caso de uso 1" className="" />

              {/* ---
import Image from 'next/image'
              const Example = () => (
                    <div className="grid-element">
                      <Image
                        src="/example.png"
                        layout="fill"
                        sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                      />
                    </div>
              )
              ---
              */}


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
