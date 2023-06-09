import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#707525] text-4xl sm:text-7xl font-bold'>Hi, my name is</p>
        <h1 className='text-[#420a73] text-4xl sm:text-7xl font-extrabold'>James Hoofard</h1>
        <h2 className='text-[#7b81f2] text-3xl sm:text-5xl font-semibold'>I'm a Full Stack Developer,</h2>
        <p className='text-[#f2ec7b] py-4 max-w-[600px] text-2xl'>I make web applications using a variety of tools. 
          Please browse my porfolio to see if I'm a good fit for your project!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-[#2986cc] hover:border-[#2986cc]'>
            View Work <span className='group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight className='ml-2'/>
              </span> 
              </button>
        </div>
      </div>

    </div>
  )
}

export default Home