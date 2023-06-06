import React, {useState} from 'react'
import letterH from '../assets/clipart-h.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
    <img src={letterH} alt="letter H"style={{width: '50px'}} />
 
 {/*menu*/}

    
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    {/*hamburger*/}
    <div onClick={handleClick} className='md:hidden z-10'>
    {<FaBars/>}
    </div>
{/*mobile menu*/}
<div className={!nav 
? 'hidden' : 
'absolute top-0 left-0 w-full h-screen bg-[#1472ff] '}>
  <div className='flex justify-items-start'> {<FaTimes onClick={handleClick}/>}
  </div>
    <ul className='flex flex-col justify-center items-center' >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
    </ul>
    </div>

    {/*Social icons*/}
    <div className='hidden'>

    </div>
    </div>
    </div>
  )
}

export default Navbar