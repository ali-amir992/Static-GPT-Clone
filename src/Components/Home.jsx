import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (

    <div className='mt-32'>

      <div className='flex justify-center pl-8 max-h-[700px] '>
        <div className=' max-w-[55%] ml-10 leading-tight'>
          <h1 className='text-6xl font-extrabold heading-gradient'>Let's Build Something
            amazing with GPT-3
            OpenAI
          </h1>

          <p className='text-[#81AFDD] my-4 text-xl leading-tight max-w-lg'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>

          <input type="text"
            placeholder='Your Email Address'
            className='h-20 mt-5  w-[28rem] rounded-md bg-[#052D56] placeholder:pl-5 text-lg   '
          />
          <button className='h-[4.97rem]  bg-[#FF4820] w-[170px] -ml-1'>Get Started</button>


          <div className='flex items-center mt-7 '>
            <div className='h-9 w-44'>
              <img src="/images/Group.png" alt="" />
            </div>
            <p className='text-sm ml-4'>1,600 people requested access a visit in last 24 hours</p>
          </div>

        </div>
        <div className='h-[44rem] w-[47rem] relative'>
          <img className='absolute -top-16' src="/images/HomeImage.png" alt="" />
        </div>
      </div>


      <div className='flex justify-center items-center' >
        <img src="/images/companies.png" alt="" />
      </div>



    </div>
  )
}

export default Home