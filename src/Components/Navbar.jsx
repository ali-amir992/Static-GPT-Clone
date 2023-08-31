import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='flex m-6 mt-9 h-[58px] justify-between items-center'>
            <div className='font-bold ml-5 '>
            <NavLink className="home" to={"/"}>GPT-3</NavLink>
            </div>

            <ul className='flex gap-10 mr-12'>
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
                
            <div className='mr-12'>
                <button className='mr-5'>Sign In</button>
                <button className='bg-[#FF4820] h-14 w-36 transition ease-in duration-200 rounded-md
            hover:bg-transparent hover:border-2 hover:border-white'>Sign up</button>
            </div>

        </nav>
    )
}

export default Navbar