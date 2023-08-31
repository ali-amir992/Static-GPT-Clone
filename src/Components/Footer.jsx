import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#031b34] mt-20'>

      <div className='flex justify-center items-center flex-col pt-14'>
        <h1 className='font-extrabold text-6xl heading-gradient text-center leading-snug w-[53rem] '>Do you want to step in to the future before others</h1>
        <button className='mt-9 w-52 h-16 transition ease-in duration-300 border-white border-2 
          hover:bg-slate-600 hover:border-none '>Request Early Access</button>
      </div>

      <div className='grid grid-cols-4 place-items-center mt-24 pb-12 mx-8'>
        <div className="space-y-3 w-40 mb-24 ">
          <h1 className='font-extrabold text-3xl'>GPT-3</h1>
          <p className='text-xs'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="space-y-8">
          <div>Links</div>
          <div>Overuns</div>
          <div>Social media</div>
          <div>Contact</div>
        </div>

        <ul className="space-y-8">
          <li>Company</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>

        <ul className="space-y-8">
          <li>Get in Touch</li>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li> 085-3002929</li>
          <li>abc@gmail.com</li>
        </ul>




      </div>

    </div>

  )
}

export default Footer