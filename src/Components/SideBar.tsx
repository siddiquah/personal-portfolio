import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoDribbble } from "react-icons/io5";
import { Link } from 'react-router-dom';

function SideBar({ props }) {
    return (
        <div className='w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center'>
            <h2 className='-rotate-90 tracking-widest'>{props}</h2>
            <div className='flex flex-col gap-7 mb-10 text-[20px]'>
                <a href="https://github.com/siddiquah" className='text-black'>
                    <IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
                <a href="https://github.com/siddiquah" className='text-black'>
                    <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' />
                </a>
                <a href="https://github.com/siddiquah" className='text-black'><IoLogoDribbble className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
                <a href="https://github.com/siddiquah" className='text-black'><IoLogoYoutube className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
            </div>
        </div>
    )
}

export default SideBar