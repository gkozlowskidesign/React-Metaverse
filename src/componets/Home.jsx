import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import {  BiHive, BiShieldAlt2, BiReset, BiBrain } from "react-icons/bi";

const About = () => {


  return (
    <div>
            <div name="about" className='w-full h-100 bg-gradient-to-b from-indigo-900 to-indigo-600'>
        
                    <div class="w-full h-full  max-w-screen-lg p-6 mx-auto flex flex-col justify-center gap-2 ">
                        <section className='pt-10 py-40 flex items-center h-100 justify-center'>
                            <div className="mx-auto max-w-[27.5rem]">
                                <div className="text-center">
                                    <div className="pt-2  flex items-center justify-center ">
                                        <img className="h-30" src={Logo} alt="MVoT"/> 
                                    </div>     
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">MVoT Home</p>
                                    <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                                    <span className='text-purple-400'>of Things</span></h1>
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">Get Started</p>      
                                </div>
                            </div>
                        </section> 
                    </div>
            </div>


                    <div class="bg-white">
                            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black">Future Infrastructure and Applications</h2>
                                    <p class="mb-4">We are at a pivtol moment in history where IoT is actually making a difference in both business and personal life operations.
                                    We believe the industrial industries which support essential function within our cities is the most forefront for how IoT will play a role in Society.</p>
                                    <p>Machines will not replace employees but they will make these essential functions easier through automation, safety, security and connectivity allowing for more consistant optimziations that align with what the business and societal needs. 
                                    Development of our base-level IoT software has already begun and we will deliver value for everyone before moving to more centrialized projects.</p><br></br>
                                    <p>Our team is made up of strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                                </div>
                                <div class="grid grid-cols-2 gap-4 mt-8">
                                    
                                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="office content 2"/>
                                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="office content 2"/>
                                    
                                </div>
                            </div>
                    </div>
                    <div class="container mx-auto p-2 px-4">

 
                        <div class="flex flex-wrap">
                            <div class="w-full items-center justify-center md:w-11/12 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6 gap-6">
                                <div class="relative flex flex-col mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 rounded-md">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-400">
                                        <BiHive class="w-8 h-8" alt="MTOT" />  
                                        </div>
                                        <h6 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black">MVoT Hive</h6>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 rounded-md">
                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-400">
                                        <BiShieldAlt2 class="w-8 h-8" alt="MTOT" />              
                                        </div>
                                            <h6 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black">MVoT Sheild</h6>
                                    </div>
                                </div>
                             </div>
                             <div class="w-full md:w-11/12 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-4 lg:px-6 gap-6 mb-20">
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 rounded-md">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-400">
                                    <BiReset class="w-8 h-8" alt="MTOT" />  
                                    </div>
                                    <h6 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black">MVoT Governance</h6>

                                    </div>
                                </div>
                                
                                <div class="relative flex flex-col min-w-0 mt-4 mb-5">
                                    <div class="px-4 py-5 flex-auto ring-2 rounded-md">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-400">
                                    <BiBrain class="w-8 h-8" alt="MTOT" />  
                                    </div>
                                    <h6 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black">MVoT Educate</h6>

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                     
            </div>

   
            
                

    
                 


  )
}



export default About
            
   
