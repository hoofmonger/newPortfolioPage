import React from 'react'
import letterH from '../assets/clipart-h.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-grey-300'>
    <div>
    <img src={letterH} alt="letter H"style={{width: '50px', height: '50px'}} />
    </div>
    </div>
  )
}

export default Navbar