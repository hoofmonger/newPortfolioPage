import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GraphQL from '../assets/GraphQL_Logo.svg.png'
import SQL from '../assets/sql-logo.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import MongoDB from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#707525]'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#7b81f2]  py-4'>
                    Experience
                </p>
                <p className='py-6'>
                    These are my primary technologies
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML5 logo" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills