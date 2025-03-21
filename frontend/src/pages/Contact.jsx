import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
         <img className='w-full md:max-w-[480px]' src={assets.contact_us} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>street-15<br/>suite 350,Australia</p>
            <p className='text-gray-500'>Tel:(415) 555-0312 <br />Email:homescape@gmail.com</p>
            <p></p>
            <p></p>
         </div>
      </div>


    </div>
  )
}

export default Contact
