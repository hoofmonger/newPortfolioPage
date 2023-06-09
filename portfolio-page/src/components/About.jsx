import React from 'react'
import suitPicture from '../assets/suitPicture.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-rows-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#7b81f2] text-[#f2ec7b]'>
                        About
                    </p>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                        
                        <div>
                            <img className='' src={suitPicture} alt="picture of me, James, in a blue suit" />
                        </div>
                        <div>
                            <p className='py-4 sm:text-right text-xl text-[#7b81f2]'>
                                I am passionate about building excellent software that improves the lives of those around me. 
                                I specialize in creating software for clients ranging from indivuals and small businesses all the way to large enterprise corporations.
                                What would you do if you had an enthusiastic sofware engineer at your fingertips?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About