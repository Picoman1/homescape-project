import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div >
      
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>
       
      <div className='my-10 flex flex-10 md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_page_1} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus incidunt necessitatibus velit excepturi esse omnis modi, deleniti eligendi quae et facere officiis magni non tenetur, sit, dignissimos porro blanditiis eaque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic cumque magni magnam! Ratione eaque illo at voluptatibus consequatur. Eveniet quo quidem perferendis sequi nihil earum! Saepe cumque quod minima!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>our mission Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum labore enim obcaecati fuga corrupti nesciunt sapiente veniam numquam deserunt! Accusantium sit consequuntur aliquid excepturi, necessitatibus architecto tempore. Fuga, praesentium!</p>

        </div>
      </div>
      <div className='text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Qulaity Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quam tenetur laboriosam id tempora, voluptate, quibusdam officia consequuntur dolorem suscipit perferendis alias. Laborum perferendis itaque odit tempora autem quod. Repellat!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quam tenetur laboriosam id tempora, voluptate, quibusdam officia consequuntur dolorem suscipit perferendis alias. Laborum perferendis itaque odit tempora autem quod. Repellat!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quam tenetur laboriosam id tempora, voluptate, quibusdam officia consequuntur dolorem suscipit perferendis alias. Laborum perferendis itaque odit tempora autem quod. Repellat!</p>
        </div>

      </div>
      

    </div>
  )
}

export default About
// 1350x2155