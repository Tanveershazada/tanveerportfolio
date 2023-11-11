import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe,  } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from './Card';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      
      <Title title="Features" des="What I Do"/>
      <div className='grid grid-cols-1 gap-6 xl:gap-20 md:grid-cols-2 xl:grid-cols-3'>
       <Card 
       title="Nuxtjs"
       des="Nuxt.js is a powerful framework for building Vue.js applications.
        It simplifies the development process.  "
      
       />
       <Card
        title="Web Development"
        des=" Creating and building websites using programming languages,
         frameworks, and tools for online functionality. "
        icon={<AiFillAppstore/>}
         />
       <Card
        title="ReactJs"
        des="A lightweight JavaScript framework for building user interfaces 
        and single-page applications. "
        icon={<SiProgress/>}
        />
       <Card
        title="Mobile Development"
        des="Creating applications for smartphones and tablets using programming
         languages and frameworks tailored for mobile platforms. "
        icon={<FaMobile/>}
        />
       <Card
        title="UX/UI Design"
        des="Designing intuitive and visually appealing user interfaces that
         enhance the user experience and engagement. "
        icon={<SiAntdesign/>}
        />
       <Card
        title="Deployment"
        des="The process of making a software application available and
         accessible for use on a specific platform or environment. "
        icon={<FaGlobe/>}
        />
      </div>
    </section>
  )
}

export default Features
