/** 
 * FileName - Team.jsx
 * FileType - .jsx (React Js file)
 * Lines - 67
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Hero of the Home Page
*/

import React from 'react';
import ACM_3D from '../assets/Logos/ACM-3D-Model.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';
// import ACMLogo3D from '../components/ACMLogo3D';

const Hero = () => {
  return (
    <div id='Home' className='w-full h-full max-w-[1440px] mx-auto p-4 pt-10 relative mt-24'>
      <div className='absolute w-[600px] h-[600px] blue__gradient translate-x-[-50%] translate-y-[40%]' />
      
      <div className='flex'>
        {/* Decorative Element on the Left */}
        <motion.div
          variants={fadeIn('down', 50, 1)}
          initial="hidden"
          whileInView="show"
          className='flex flex-col justify-start items-center mr-6 md:mr-8 lg:mr-10'
        >
          <div className='bg-[#272A57] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full blue__glow' />
          <div className='bg-gradient-to-b from-[#10BED5] w-[7px] md:w-[9px] h-[600px] sm:h-[500px] mt-[-2px]' />
        </motion.div>

        {/* Main Content */}
        <div className='flex flex-col items-center flex-grow'>
          {/* Centered Logo */}
          <motion.div
            variants={fadeIn('down', 100, 1)}
            initial="hidden"
            whileInView="show"
            className='mb-8'
          >
            <img
              src={ACM_3D}
              className='w-[300px] md:w-[400px] img-blue__glow'
              alt="ACM Logo"
            />
          </motion.div>

          {/* Text Content */}
          <div className='text-center'>
            <motion.h1
              variants={fadeIn('left', 100, 1)}
              initial="hidden"
              whileInView="show"
              className='text-[#272A57] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase blue-text__glow'
            >
              We are MUJ ACM<br className='md:hidden'/> Student Chapter
            </motion.h1>
            <motion.p
              variants={fadeIn('left', 50, 1, 0.5)}
              initial="hidden"
              whileInView="show"
              className='text-[#000000] text-sm md:text-base mt-4 max-w-2xl mx-auto'
            >
              We the ACM Student Chapter are a dynamic community of tech enthusiasts driven by a shared passion to explore the multifaceted world of computing. Here, we believe that teamwork is not just a concept, it's the essence that propels us towards greatness. With a focus on nurturing talent and promoting learning, the ACM S chapter provides a platform for students to dive into technical challenges, engage in collaborative projects, and interact with industry professionals. Through a spectrum of workshops, hackathons and networking events, the ACM S chapter empowers students to refine their skills.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;