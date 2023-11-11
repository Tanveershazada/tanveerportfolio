import React from 'react'
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from '../../assest/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
     <div className='flex items-center justify-center text-center'>
     <Title
      title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
      des="My Projects"
      />
     </div>
     <div className='grid grid-cols-1 gap-6 md-grid-cols-2 xl:grid-cols-3 xl:gap-14'>
        <ProjectsCard
        title="SOCIAL MEDIA CLONE"
        des=" A recreated version of a social networking platform, mimicking its features
         and functionality for online social interactions."
        src={projectOne}
        />
        <ProjectsCard
        title="E-commerce Website"
        des="  A replicated version of an online shopping platform, providing similar features and 
        functionalities for buying and selling products."
        src={projectTwo}
        />
        <ProjectsCard
        title="Chating App"
        des="A replicated version of a messaging application, offering similar features and
         functionality for communication purposes."
        src={projectThree}
        />
        <ProjectsCard
        title="Chating App"
        des=" A replicated version of a messaging application, 
        offering similar features and functionality for communication purposes."
        src={projectThree}
        />
        <ProjectsCard
        title="SOCIAL MEDIA CLONE"
        des="A recreated version of a social networking platform, mimicking its features
         and functionality for online social interactions."
        src={projectOne}
        />
        <ProjectsCard
        title="E-commerce Website"
        des=" A replicated version of an online shopping platform, providing similar features and
         functionalities for buying and selling products."
        src={projectTwo}
        />
     </div>
    </section>
  )
}

export default Projects
