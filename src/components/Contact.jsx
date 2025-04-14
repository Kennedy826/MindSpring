import React, { useState } from 'react'
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const Contact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[country, setCountry] = useState("");
    const[phone, setPhone] = useState("");
    const[message, setMessage] = useState("");
    const[showModal, setShowModal] = useState(false);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            name,
            email,
            phone,
            country,
            message

        }
        if(!data){
            alert("Please fill all the fields")
            return;
        }
        setShowModal(true);
}
const closeModal=()=>{
    setShowModal(false)
    setName("")
    setEmail("")
    setCountry("")
    setPhone("")
}
  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8 ' id='contact'>
        <div className='container mx-auto'> 
            <div className=' flex flex-col-1 md:w-4/5 mx-auto grid-cols-1 items-center md:grid-cols-2 md:gap-12 gap-8'> 
            {/* left side */}
            <div className='space-y-8'>
                <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make Appointement</h2>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-start text-white gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#fffff1af] p-3'>
                    <FaUserAlt className=' text-primary'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>24 Hours Services </h3>
                        <p>Visit us anytime</p>
                    </div>
                </div>
                <div className='flex items-start text-white gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#fffff1af] p-3'>
                    <FaEnvelope className=' text-primary'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Expert Therapist </h3>
                        <p>Visit us anytime</p>
                    </div>
                </div>
                <div className='flex items-start text-white gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#fffff1af] p-3'>
                    <FaPhoneAlt className=' text-primary'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>High Quality Core </h3>
                        <p>Visit us anytime</p>
                    </div>
                </div>
                <div className='flex items-start text-white gap-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#fffff1af] p-3'>
                    <FaGlobe className=' text-primary'/>
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Trusted Clinic </h3>
                        <p>Visit us anytime</p>
                    </div>
                 </div>
               </div>
            </div>
            {/* right side */}
            <div className='space-y-8 p-8 bg-white shadow-xl rounded-md w-auto'>
                <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                <form onClick={handleSubmit}>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input onChange={e=>setName(e.target.value)}
                        type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-primary shadow mb-4' />
                        <input onChange={e=>setEmail(e.target.value)}
                        type="text" placeholder='Email Address' className='w-full p-4 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-primary shadow mb-4' />                    
                    </div>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input onChange={e=>setPhone(e.target.value)} 
                        type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-primary shadow mb-4' />
                        <input onChange={e=>setCountry(e.target.value)}
                        type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2
                         focus:ring-primary shadow mb-4' />                    
                    </div>
                    <textarea  onChange={e=>setMessage(e.target.value)}
                    rows="5"
                    placeholder='Write your message...' className='w-full p-4 rounded-md focus: outline none 
                    focus:ring-2 focus:ring-primary shadow'></textarea>
                     <button type='Submit' className='w-full p-3 bg-primary
                      text-white rounded-md hover:bg-primary/90'> Send Message</button>
                </form>
            </div>

            </div>
        </div>
        {
            showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-blackbg-opacity-90'>
                    <div className='bg-white p-8 rounded-md shadow-lg'>
                        <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                        <p>Thank you, {name}, for submitting your query.</p>
                        <button onClick={closeModal}
                        className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact