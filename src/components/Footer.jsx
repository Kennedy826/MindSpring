import React from 'react'
import footerImg from '../assets/footer-logo.svg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-12 bg-gray-300 px-8'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
           <div className='space-y-6 mr-14'>
            <div className='flex items-center space-x-2'>
                <img src={footerImg} alt="footer img" className='w-32 h-auto'/>

            </div>
            <p>Welcome to a great place for relieving yourself</p>
            <div className='flex space-x-4'>
                <a href='#' className='bg-gray-200 text-primary rounded-full size-10 flex items-center 
                justify-center hover:bg-primary hover:text-white'> 
                    <FaFacebook  className='text-xl'/>
                </a>
                <a href='#' className='bg-gray-200 text-primary rounded-full size-10 flex items-center 
                justify-center hover:bg-primary hover:text-white'> 
                    <FaTwitter  className='text-xl'/>
                </a>
                <a href='#' className='bg-gray-200 text-primary rounded-full size-10 flex items-center 
                justify-center hover:bg-primary hover:text-white'> 
                    <FaInstagram  className='text-xl'/>
                </a>
                <a href='#' className='bg-gray-200 text-primary rounded-full size-10 flex items-center 
                justify-center hover:bg-primary hover:text-white'> 
                    <FaLinkedin className='text-xl'/>
                </a>
            </div>
           </div>
           <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'> Quick Links</h3>
            <ul className='spce-y-3'>
                <li>
                    <a href="#home" className='hover:underline text-gray-700'>Home</a>
                </li>
                <li>
                    <a href="#about" className='hover:underline text-gray-700'>About Us</a>
                </li>
                <li>
                    <a href="#services" className='hover:underline text-gray-700'>Services</a>
                </li>
                <li>
                    <a href="#contact" className='hover:underline text-gray-700'>Contact Us</a>
                </li>
            </ul>
           </div>
           <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'> Support</h3>
            <ul className='spce-y-3'>
                <li>
                    <a href="#" className='hover:underline text-gray-700'>FAQ</a>
                </li>
                <li>
                    <a href="#" className='hover:underline text-gray-700'>Terms of Service</a>
                </li>
                <li>
                    <a href="#" className='hover:underline text-gray-700'>Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className='hover:underline text-gray-700'>Support Center</a>
                </li>
            </ul>
           </div>
           <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'> Contact Info</h3>
            <ul className='spce-y-3'>
                <li className='flex items-center gap-2'>
                   <FaMapMarkedAlt className='text-primary'/>
                   <p className='text-gray-700'>Mboya Street, Nairobi, Kenya</p>
                </li>
                <li className='flex items-center gap-2'>
                   <FaPhone className='text-primary'/>
                   <p className='text-gray-700'>758 465 2973</p>
                </li>
                <li className='flex items-center gap-2'>
                   <FaEnvelope className='text-primary'/>
                   <p className='text-gray-700'>infor@kendline.com</p>
                </li>
                
            </ul>
           </div>
        </div>
    </div>
  )
}

export default Footer