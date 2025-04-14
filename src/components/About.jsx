import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import Thumbnail from '../assets/video-thumbnail.webp'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariant';

const About = () => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const handleVideoPlay=() =>{
    setisVideoPlaying(true)
  }
  const handleCloseVideo=()=>{
    setisVideoPlaying(false)
  }
  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div 
          variants = {fadeIn('up' , 0.1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.7}}
          className="md:w-1/2 w-full">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={Thumbnail}
                  alt="video thumbnail"
                  className="w-full h-auto md:h-[446px] rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
             -translate-y-1/2 bg-primary p-3 rounded-full cursor-pointer shadow-lg"
                >
                  <FaRegCirclePlay className="text-white size-12" />
                </button>
              </div>
            ) : null}
          </motion.div>
          {isVideoPlaying && (
            <div className=' fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center  z-50'>
            <div className="relative w-auto items-center justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8-2WQF3SWwo?si=U0r-DLohREbPMdQB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share"  allowFullScreen className='rounded-lg'></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer">
                x
              </button>
            </div>
            </div>
          )}
          <motion.div 
          variants = {fadeIn('up' , 0.1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.7}}
          className="md:w-1/2 w-full">
            <h1 className="text-4xl font-secondary font-bold mb-4 leading-snug">
              Individual Consult and Therapy
            </h1>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we're kinder to ourselves. Let
              us walk you through the basics in our new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <FaArrowAltCircleRight />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About