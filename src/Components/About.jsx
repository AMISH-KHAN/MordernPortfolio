import React from 'react'

import { FaHtml5, FaCss3Alt, FaReact,FaBootstrap ,FaNode , FaGitAlt,FaGithub  } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

export default function About() {
  return (
      <>
              <section id="about" className='w-full h-screen '>
              <div className='h-[7rem] bg-black text-white text-3xl flex items-center justify-center'>
                  About
                  </div>
                  <div className=' py-52 px-0 md:px-52 flex justify-center align-middle '>
          <div className='flex gap-20 justify-center align-middle lg:flex-row md:flex-col flex-col w-[80rem] '>
            <div className="relative top-[6rem">
              <div className=' w-56 md:w-[25rem] mx-auto  mb-12 '>
              <img src="./assets/image/mumbai1.jpeg" className='rounded-xl h-[25rem]  md:h-[38rem] object-cover ' width={"100%"}  alt="" />
              </div>
            </div>
            <div className=" w-full md:w-80 text-white">
              <h1  className='text-5xl font-light font-sans mb-4'>Amish khan</h1>
              <h1 className='text-4xl font-semibold font-sans mb-4 text-[#53bf63]'>Web Developer</h1>
              <div className=''> 
          <div>
            <h1 className='text-xl font-light font-sans '>
              Education
            </h1>
            <ul className='before:border-x-2 before:m-2 before:h-[95%] before:contents[""] before:absolute before:border-gray-400 before:-z-10 relative '>
              <li className='before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5'>
                <div className=' w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl'>
                  2022-2025
                </div>
                <div className='  my-8 mx-8 '>
                  <h1 className='text-lg text-[#53bf63] font-sans '>Bachelor of Computer Applications</h1>
                  <h2>Anand Engineering College</h2>
                  
                </div>
              </li>
              <li className='before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5'>
                <div className=' w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl'>
                  2020-2021
                </div>
                <div className='  my-8 mx-8 '>
                  <h1 className='text-lg text-[#53bf63] font-sans '>Senior Secondary Education</h1>
                  <h2>Gayatri Public School</h2>
                  
                </div>
              </li>
              <li className='before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5'>
                <div className=' w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl'>
                  2018-2019
                </div>
                <div className='  my-8 mx-8 '>
                  <h1 className='text-lg text-[#53bf63] font-sans '>Secondary Education</h1>
                  <h2>Gayatri Public School</h2>
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
            </div>
          </div>

                  </div>
                  
        
                  <div className='flex flex-col justify-center'>
          <h1 className='text-6xl font-light font-sans text-center text-white'>My Skills</h1>
          
            <div className="flex  w-9/12 my-12 mx-auto justify-evenly gap-14  md:px-52 align-middle flex-wrap ">
              <div className='text-6xl rounded-3xl text-white shadow-lg shadow-[#53bf63]/50  p-3'>
                <FaHtml5 />
                <p className='text-sm text-center mx-auto'> HTML</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <FaCss3Alt />
                <p className='text-sm text-center mx-auto'> CSS</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <TbBrandJavascript />
                <p className='text-sm text-center mx-auto'> Javascript</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <FaReact />
                <p className='text-sm text-center mx-auto'> React</p>
              </div>
              <div className='text-6xl text-center rounded-3xl text-white shadow-lg shadow-[#53bf63]/50 p-3'>
              <SiTailwindcss />
                <p className='text-sm text-center mx-auto text-white' >Tailwindcss</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <FaBootstrap />
                <p className='text-sm text-center mx-auto'> Bootstrap</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <SiRedux />
                <p className='text-sm text-center mx-auto'> Redux</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <FaNode />
                <p className='text-sm text-center mx-auto'> NodeJs</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <SiExpress />
                <p className='text-sm text-center mx-auto'> Express</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <SiMongodb/>
                <p className='text-sm text-center mx-auto'> MongoDb</p>
            </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              <SiMongoose />
                <p className='text-sm text-center mx-auto'> Mongoose</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              < FaGitAlt  />
                <p className='text-sm text-center mx-auto'> Git</p>
              </div>
              <div className='text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50'>
              < FaGithub  />
                <p className='text-sm text-center mx-auto'> Github</p>
              </div>
            </div>
        </div>
        
  </section>
    </>
  )
}
