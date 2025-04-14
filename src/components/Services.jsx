import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariant';


const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div 
                variants = {fadeIn('up' , 0.1)}
                 initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
        className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Here are the services we offer. You can book a session with us. We
            are here to help you.
          </p>
        </motion.div>
        {/* services tabs */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList 
                    variants = {fadeIn('up' , 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
            className='flex flex-wrap justify-between items-center md:gap-2 gap-1'>
              <Tab>Couple Counselling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div 
              variants = {fadeIn('down' , 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8 mt-8'>   
              <div className='md:w-1/2 bg-white rounded-lg p-12 mb-4'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Couple Counselling</h3>
                <p className='mb-8'>Couple counseling helps partners communicate better, resolve conflicts, and strengthen their relationship.</p>
                <h4 className='text-xl text-black font-medium mb-4'>Benefits</h4>
                <ul className='md:w-full list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
                </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div 
              variants = {fadeIn('down' , 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8 mt-8'>   
              <div className='md:w-1/2 bg-white rounded-lg p-12 mb-4'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                <p className='mb-8'>Parenting skills involve nurturing, guiding, and supporting a child's growth. Effective parenting fosters discipline, empathy, and communication.
                   Strong skills help create a loving and secure environment for children.</p>
                <h4 className='text-xl text-black font-medium mb-4'>Benefits</h4>
                <ul className='md:w-full list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg2} alt="" className='w-full md:w-auto h-auto rounded-2xl object-cover' />
                </div>
                </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div 
              variants = {fadeIn('down' , 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8 mt-8'>   
              <div className='md:w-1/2 bg-white rounded-lg p-12 mb-4'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                <p className='mb-8'>Feeling stuck is a state of frustration and uncertainty, hindering progress. It can stem from fear, doubt, or lack of direction. 
                  Overcoming it requires self-reflection, new perspectives, and action.</p>
                <h4 className='text-xl text-black font-medium mb-4'>Benefits</h4>
                <ul className='md:w-full list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
                </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div 
              variants = {fadeIn('down' , 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8 mt-8'>   
              <div className='md:w-1/2 bg-white rounded-lg p-12 mb-4'>
                <h3 className='text-2xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                <p className='mb-8'>Self-confidence is believing in your abilities and worth. It empowers you to take risks, face challenges, and grow. 
                  Building it requires self-acceptance and positive action.</p>
                <h4 className='text-xl text-black font-medium mb-4'>Benefits</h4>
                <ul className='md:w-full list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
                </motion.div>
            </TabPanel>
           
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Services