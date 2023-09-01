import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='text-center' >
           <div className='flex flex-col md:flex-row m-6 mt-9 h-full gap-y-5 md:h-[58px] w-[90vw] max-w-[1280px] justify-between items-center  py-2'> 

            <div className='font-bold text-center md:ml-5 '>
            <NavLink className="home" to={"/"}>GPT-3</NavLink>
            </div>

            <ul className='flex flex-col justify-center items-center md:flex-row gap-y-6 md:gap-10 md:mr-12'>
                <li className='cursor-pointer'>
                    <NavLink className="home" to={"/"}>Home</NavLink>
                </li>
                <li className='cursor-pointer'>
                    <NavLink to={"/GptPage"}>What is GPT?</NavLink>
                </li>
                <li className='cursor-pointer'>
                    <NavLink to={"/AiPage"}>OpenAI</NavLink>
                </li>
                <li className='cursor-pointer'>
                    <NavLink to={"/CaseStudiesPage"}>CaseStudies</NavLink>
                </li>
                {/* <li className='cursor-pointer'>
                    <NavLink to={"/"}>Libraries</NavLink>
                </li> */}
            </ul>
                
            <div className='md:mr-12 flex flex-col gap-y-3 justify-center items-center md:flex-row '>
                <button className='md:mr-5 block'>Sign In</button>
                <button className='bg-[#FF4820] block h-14 w-36 transition ease-in duration-200 rounded-md
            hover:bg-transparent hover:border-2 hover:border-white'>Sign up</button>
            </div>

</div>
        </nav>
    )
}

export default Navbar