import React from 'react';

const AI = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-center items-center'>

        <div className='w-full sm:w-[34rem] h-auto'>
          <img src="/images/AI.png" alt="" />
        </div>

        <div className='w-full sm:w-[30rem] mt-8 sm:mt-32 ml-0 sm:ml-10'>
          <p className='font-medium text-base text-[#71E5FF] text-center sm:text-left'>Request Early Access to Get Started</p>
          <h1 className='font-extrabold text-3xl sm:text-4xl heading-gradient text-center sm:text-left mt-4 sm:mt-5'>The possibilities are beyond your imagination</h1>
          <p className='font-medium text-base leading-7 text-[#81AFDD] text-center sm:text-left mt-4 sm:mt-10'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='font-medium text-base leading-7 text-[#FF8A71] text-center sm:text-left mt-4 sm:mt-10'>Request Early Access to Get Started</p>
        </div>

      </div>

      <div className='flex mx-auto justify-center items-center max-sm:p-2 max-w-[800px] w-[90vw]'>

        <div className='w-full mt-8 sm:mt-32 h-auto rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 justify-between items-center p-3'>

          <div className='ml-4 sm:ml-10'>
            <p className='text-xs sm:text-base text-[#0E0E0E] text-center sm:text-left'>Request Early Access to Get Started</p>
            <p className='text-lg sm:text-2xl text-[#0E0E0E] font-extrabold mt-2 text-center sm:text-left'>Register today & start exploring the endless possibilities.</p>
          </div>

          <div className='mr-4 sm:mr-6 text-center mt-2'>
            <button className=' p-2 sm:h-14 sm:w-48 bg-black transition-all ease-in duration-200
              hover:bg-transparent hover:border-white hover:border-2 rounded-3xl text-center '>Get Started</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AI;
