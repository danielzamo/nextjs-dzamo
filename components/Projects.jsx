import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import { myProjects } from '../profile';
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#297CFC]'>
          Projects
        </p>
        <h2 className='py-4'>Desarrolado/desplegado</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {
            myProjects.map(({ title, backgroundImg, projectUrl, tech, alt }, index) => (
              <ProjectItem
              title={title}
              backgroundImg={`/${backgroundImg}`}
              projectUrl={`/${projectUrl}`}
              tech={tech}
              alt={alt}
            />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
