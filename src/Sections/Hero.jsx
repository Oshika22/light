/** 
 * FileName - Team.jsx
 * FileType - .jsx (React Js file)
 * Lines - 67
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - The Hero of the Home Page
*/

import React, { useState, useEffect } from 'react';
// import DOMPurify from 'dompurify';
import ACM_2D from '../assets/Logos/ACM-2D-model.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/motion';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import _gsap from 'gsap/gsap-core';


// import ACMLogo3D from '../components/ACMLogo3D';

const Hero = () => {
  const {contextSafe} = useGSAP
  var squares = document.querySelector(".squares");
  var topLeft = document.querySelector("#top-left");
  const [TLclutter, setTLclutter] = useState([]);
  const [TRclutter, setTRclutter] = useState([]);
  const [Lclutter, setLclutter] = useState([]);
  const [Rclutter, setRclutter] = useState([]);
  const [BLclutter, setBLclutter] = useState([]);
  const [BRclutter, setBRclutter] = useState([]);

  // creating functions for each direction
  useEffect(() => {
    const generateBoxes = () => {
      let tlBox = [];
      let trBox = [];
      let lBox = [];
      let rBox = [];
      let blBox = [];
      let brBox = [];
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          tlBox.push(<div key={i} className="darkblue float top-left"></div>);
        } else if (i % 3 === 0) {
          tlBox.push(<div key={i} className="lightblue float top-left"></div>);
        } else if (i % 2 === 0) {
          tlBox.push(<div key={i} className="grey float top-left"></div>);
        } else {
          tlBox.push(<div key={i} className="outline_cust float top-left"></div>);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          trBox.push(<div key={i} className="darkblue float top-right"></div>);
        } else if (i % 3 === 0) {
          trBox.push(<div key={i} className="lightblue float top-right"></div>);
        } else if (i % 2 === 0) {
          trBox.push(<div key={i} className="grey float top-right"></div>);
        } else {
          trBox.push(<div key={i} className="outline_cust float top-right"></div>);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          lBox.push(<div key={i} className="darkblue float left"></div>);
        } else if (i % 3 === 0) {
          lBox.push(<div key={i} className="lightblue float left"></div>);
        } else if (i % 2 === 0) {
          lBox.push(<div key={i} className="grey float left"></div>);
        } else {
          lBox.push(<div key={i} className="outline_cust float left"></div>);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          rBox.push(<div key={i} className="darkblue float right"></div>);
        } else if (i % 3 === 0) {
          rBox.push(<div key={i} className="lightblue float right"></div>);
        } else if (i % 2 === 0) {
          rBox.push(<div key={i} className="grey float right"></div>);
        } else {
          rBox.push(<div key={i} className="outline_cust float right"></div>);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          blBox.push(<div key={i} className="darkblue float bottom-left"></div>);
        } else if (i % 3 === 0) {
          blBox.push(<div key={i} className="lightblue float bottom-left"></div>);
        } else if (i % 2 === 0) {
          blBox.push(<div key={i} className="grey float bottom-left"></div>);
        } else {
          blBox.push(<div key={i} className="outline_cust float bottom-left"></div>);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
          brBox.push(<div key={i} className="darkblue float bottom-right"></div>);
        } else if (i % 3 === 0) {
          brBox.push(<div key={i} className="lightblue float bottom-right"></div>);
        } else if (i % 2 === 0) {
          brBox.push(<div key={i} className="grey float bottom-right"></div>);
        } else {
          brBox.push(<div key={i} className="outline_cust bottom-right"></div>);
        }
      }
      setTLclutter(tlBox);
      setTRclutter(trBox);
      setLclutter(lBox);
      setRclutter(rBox);
      setBLclutter(blBox);
      setBRclutter(brBox);
    };
    generateBoxes();
  }, []);
  useEffect(() => {
    if (TLclutter.length > 0) {
      gsap.to(".top-left", {
        x: -500,
        y: -100,
        scale: 1.5,
        opacity: 0,
        duration: 6,
        repeat: -1,
        stagger: 0.4,
        rotate: 720,
        ease: "back.out(1.7)",
      });
    }

    if (TRclutter.length > 0) {
      gsap.to(".top-right", {
        x: 500,
        y: -100,
        scale: 1.5,
        opacity: 0,
        duration: 6,
        repeat: -1,
        stagger: 0.45,
        rotate: 720,
        ease: "back.out(1.7)",
      });
    }
    if (Lclutter.length > 0) {
      gsap.to(".left", {
        x: -500,
        y: 50,
        scale: 1.3,
        opacity: 0,
        duration: 7,
        repeat: -1,
        stagger: 0.55,
        rotate: 720,
        ease: "back.out(1)"
      });
    }
    if (Rclutter.length > 0) {
      gsap.to(".right", {
        x: 500,
        y: 10,
        scale: 1.3,
        opacity: 0,
        duration: 7,
        repeat: -1,
        stagger: 0.55,
        rotate: 720,
        ease: "back.out(1)"
      });
    }
    if (BLclutter.length > 0) {
      gsap.to(".bottom-left", {
        x: -500,
        y: 200,
        scale: 1.5,
        opacity: 0,
        duration: 6,
        repeat: -1,
        stagger: 0.4,
        rotate: 720,
        ease: "back.out(1)",
      });
    }
    if (BRclutter.length > 0) {
      gsap.to(".bottom-right", {
        x: 500,
        y: 200,
        scale: 1.5,
        opacity: 0,
        duration: 6,
        repeat: -1,
        stagger: 0.4,
        rotate: 720,
        ease: "back.out(1)",
      });
    }
    gsap.to(".float-logo", {
      y: 20,
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: "true",
    });
    gsap.to(".float-logo", {
      rotate: 45,
    });
  }, [TLclutter,TRclutter,Lclutter,Rclutter,BLclutter,BRclutter]);
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
          <div className='bg-[#10BED5] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full blue__glow' />
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
            <div className='logo-box'> 
              <img
              src={ACM_2D}
              className='w-[200px] md:w-[250px] img-blue__glow float-logo'
              alt="ACM Logo"
              />
              <div className="flex squares">
                <div id="top-left">{TLclutter}</div>       
                <div id="top-right">{TRclutter}</div>
                <div id="left">{Lclutter}</div>
                <div id="right">{Rclutter}</div>
                <div id="bottom-left">{BLclutter}</div>
                <div id="bottom-right">{BRclutter}</div>
                <div id="bottom"></div>
              </div>
            </div>
            
          
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
              className='text-[#1d1f3f] text-sm md:text-base mt-4 max-w-2xl mx-auto'
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