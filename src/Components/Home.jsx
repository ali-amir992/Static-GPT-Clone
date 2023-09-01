import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='mt-16 sm:mt-32 p-4 sm:p-0'>

      <div className='flex flex-col-reverse sm:flex-row sm:pl-8 max-h-[700px]'>
        <div className='w-full sm:w-[55%] ml-4 sm:ml-10 leading-tight text-center sm:text-left'>
          <h1 className='text-4xl sm:text-6xl font-extrabold heading-gradient mb-4 mr-4 sm:mr-0 sm:mb-6 sm:leading-tight '>
            Let's Build Something amazing with GPT-3 OpenAI
          </h1>

          <p className='text-[#81AFDD] text-md sm:text-xl leading-tight max-w-lg  mr-5 sm:mr-0'>
            Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>

          <input
            type="text"
            placeholder='Your Email Address'
            className='h-14 sm:h-20 mt-4 sm:mt-5 w-[90%] sm:w-[28rem] rounded-md bg-[#052D56] placeholder:pl-3  sm:pl-5 text-md sm:text-lg'
          />
          <button className='h-14 sm:h-[4.97rem] bg-[#FF4820] w-[90%] sm:w-[170px] mt-3 sm:mt-0'>
            Get Started
          </button>

          <div className='flex items-center mt-4 sm:mt-7'>
            <div className='h-7 sm:h-9 w-32 sm:w-44'>
              <img src="/images/Group.png" alt="" />
            </div>
            <p className='text-xs sm:text-sm ml-2 sm:ml-4 mr-4 sm:mr-0 my-4'>
              1,600 people requested access a visit in the last 24 hours
            </p>
          </div>
        </div>

       
        <div className='w-[250px]  max-sm:self-center sm:w-[47rem] '>
          <img className='w-full' src="/images/HomeImage.png" alt="" />
        </div>
      </div>
      

      <div className='flex justify-center items-center w-full mt-20 sm:mt-16'>
        <img src="/images/companies.png" alt="" />
      </div>

    </div>
  );
};

export default Home;
