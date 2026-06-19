import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-cente justify-between mx-4 py-3 lg:mx-44'>
        {/** Logo Image */}
        <Link to="/"><img className='w-32 sm:w-44' src={assets.logo}></img></Link>


        {/** Get Started button */}
        <button className='bg-zinc-800 text-white  hover:scale-105 transition-all duration-500 flex items-center gap-4 py-2 px-4 sm:px-8 sm:py-3 rounded-full cursor-pointer '
        >Get started <img className='w-3 sm:w-4' src={assets.arrow_icon}></img></button>

    </div>
  )
}

export default Navbar