import { div } from 'framer-motion/client'
import React from 'react'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import review1 from '../assets/review1.webp'
import review2 from '../assets/review2.webp'

const Testimonials = () => {
  const  testimonials =[
    {
      name: 'Jane Doe',
      location: 'New York, NY',
      review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
      image: review1,
    },
    {
      name: 'John Smith',
      location: 'Los Angeles, CA',
      review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
      image: review2,
    },
  ]
  return (
    <div id='testimonials' className='bg-[#f7f8fc] py-12'>
      <div className='container'>
      <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'> What Our Clients Say</h2>
          <p className='text-medium mb-12 md:w-1/2 mx-auto'>Hear about what our 
          satistifed customers say about how our services positively impacted their lives and well-being</p>
        </div>
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {
            testimonials.map((testimonial, index) =>(
              <div key={index} className='relative bg-white text-center rounded-lg p-6 flex-1'> 
                 <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                 <IoChatbubbleEllipsesSharp className='size-12 text-primary'/>
                  </div>
                  <div className='flex flex-col space-y-3 mb-4'>
                    <p className='text-lg font-medium  mb-2'>{testimonial.review}</p>
                    <div className='flex gap-1'>
                      <img src={testimonial.image} alt="" className='size-16 rounded-full object-cover mr-4'/>
                    </div>
                    <div>
                      <h3 className='font-semibold'>{testimonial.name}</h3>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials