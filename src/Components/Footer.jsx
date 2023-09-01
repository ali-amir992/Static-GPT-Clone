import React from 'react';

const Footer = () => {
  return (
    <div className='w-[100dvw]'>
    <div className='bg-[#031b34] mx-auto mt-8 sm:mt-20 max-w-[1300px] w-[90vw] py-8 sm:py-12'>

      <div className='flex flex-col justify-center items-center px-4 sm:px-0 sm:flex-row sm:pt-14'>
        <h1 className='font-extrabold text-3xl sm:text-6xl heading-gradient text-center sm:text-left leading-snug w-full sm:w-[50%]'>
          Do you want to step into the future before others
        </h1>
        <button className='mt-4 sm:mt-0 w-52 h-14 sm:h-16 transition ease-in duration-300 border-white border-2 hover:bg-slate-600 hover:border-none'>
          Request Early Access
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-0 place-items-center mt-8 sm:mt-24 px-4 sm:px-8 pb-6 sm:pb-12'>
        <div className="space-y-3 text-center sm:text-left">
          <h1 className='font-extrabold text-xl sm:text-3xl'>GPT-3</h1>
          <p className='text-xs sm:text-base'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="space-y-3 text-center sm:text-left">
          <div>Links</div>
          <div>Overuns</div>
          <div>Social media</div>
          <div>Contact</div>
        </div>

        <ul className="space-y-3 text-center sm:text-left">
          <li>Company</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>

        <ul className="space-y-3 text-center sm:text-left">
          <li>Get in Touch</li>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li>085-3002929</li>
          <li>abc@gmail.com</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
