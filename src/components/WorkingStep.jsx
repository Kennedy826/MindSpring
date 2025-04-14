import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/animationVariant'

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
        <div className='absolute inset-0 bg-heroBg bg-opacity-80'> </div>
            <motion.div 
            variants = {fadeIn('up' , 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className=' relative container px-4 mx-auto py-20'>
            <div
            className='text-white text-center mb-20'>
                <h2 className='text-4xl font-bold font-secondary mb-4'>How It Work</h2>
                <p className='text-lg md:w:w-1/2 w-full mx-auto'> Here are the steps on how to get our services</p>
            </div>

            </motion.div>
            
            <motion.div 
            variants = {fadeIn('up' , 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                 <div className='absolute top-0 left-1/2 bg-primary transform -translate-x-1/2 -translate-y-1/2
                  text-white size-14 rounded-full flex items-center justify-center'>1</div>
                 <h3 className='text-lg font-medium mt-8'>Fill the Form </h3>
                 <p className='my-2'>Step 1 description goes here</p>
                </div>

                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                 <div className='absolute top-0 left-1/2 bg-primary transform -translate-x-1/2 -translate-y-1/2
                  text-white size-14 rounded-full flex items-center justify-center'>2</div>
                 <h3 className='text-lg font-medium mt-8'>Get Matched </h3>
                 <p className='my-2'>Step 2 description goes here</p>
                </div>

                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                 <div className='absolute top-0 left-1/2 bg-primary transform -translate-x-1/2 -translate-y-1/2
                  text-white size-14 rounded-full flex items-center justify-center'>3</div>
                 <h3 className='text-lg font-medium mt-8'>Schedule </h3>
                 <p className='my-2'>Step 3 description goes here</p>
                </div>
            </motion.div>

        
    </div>
  )
}

export default WorkingStep