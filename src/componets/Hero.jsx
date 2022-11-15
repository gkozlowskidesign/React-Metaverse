import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";
import {  BiWifi, BiShieldAlt2, BiReset  } from "react-icons/bi";

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
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">MVoT Systems</p>
                                    <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                                    <span className='text-purple-400'>of Things</span></h1>
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">Get Started</p>      
                                </div>
                            </div>
                        </section>

    
                     
                    </div>
            </div>

            <div className='w-full h-100 p-8 pb-10 mx-auto bg-white'>
            <section className='mt-2 flex flex-col justify-center gap-2'>

                    <div className="mt-10 flex justify-center">
                    <img className="h-96 w-full rounded-xl object-cover lg:w-4/5" alt="smart-city" src="https://images.pexels.com/photos/755405/pexels-photo-755405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="mx-auto max-w-lg">
                         <h1 className="text-3xl mt-10 font-bold text-gray-800 dark:text-black lg:text-4xl">Building Your Next Application with our awesome Blockchain IoT Web3 Components</h1>
                                <button className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-indigo-300 focus:outline-none lg:mx-0 lg:w-auto">Get in Contact!</button>
                    </div>
            
                
            </section>
            </div>


            <div className='w-full h-100 p-8 pb-4 mx-auto bg-gradient-to-b from-indigo-600 to-indigo-800'>
                        <section className='mt-2 flex flex-col justify-center gap-2'>
                            <div class="container mx-auto mb-20">
                                <h1 class="px-8 text-4xl font-semibold capitalize text-right text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Componets</h1>
                                <div class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-4 xl:grid-cols-3 xl:gap-10">
                                
                                  <div className='mx-auto justify-center'>
                                        <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-white dark:text-white">Smart Buildings</h2>
                                        <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                        <BiShieldAlt2 class="p-6 h-full w-full text-white bg-gradient-to-b from-indigo-600 to-black   rounded-lg  object-cover"  alt="MTOT" />
                                        </section>
                                        <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                        <p className="text-md font-medium leading-8 p-4 mx-auto hidden md:block rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting indiviudally 
                                        owned Smart-Devices to buildings we can create safer, more sustainable, and secure communities to become Smart-Buildings. 
                                        Through enablment of incentivized verified contributions created by consensus activities you will boost building longevity 
                                         and community value generation.
                                            </p>      
                                        </section>
                                    </div>
                                   
                                    <div className='mx-auto justify-center'>
                                        <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-white dark:text-white">Smart Infrastructure</h2>
                                        <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                        <BiShieldAlt2 class="p-6 h-full w-full text-white bg-gradient-to-b from-indigo-600 to-black   rounded-lg  object-cover"  alt="MTOT" />
                                        </section>
                                    
                                        <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                        <p className="text-md font-medium leading-8 p-4 mx-auto hidden md:block rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting Smart-Buildings to 
                                        both Smart-Building Infrastructure and Infrastructure-Contracts the building owners may create new proofs via governed community 
                                        consensus boosting satisfaction, business relationships and community value allowing of community based Smart-Infrastructure.
                                        </p>      
                                        </section>
                                    </div>
                                
                                   
                                    <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-white dark:text-white">Smart Maintenance</h2>
                                    <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                    <BiReset class="p-6 h-full w-full  text-white bg-gradient-to-b from-indigo-600 to-black   rounded-lg  object-cover"  alt="MTOT" />
                                    </section>
                                 
                                        <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                        <p className="text-md font-medium leading-8 p-4 mx-auto hidden md:block rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting Smart-Buildings 
                                        and Smart-Infrastrucutre to Maintenance Contracts via verified contributions using our building centric based dApps. 
                                        External companies can build on current relationships with quality control, optimized routing via custom applications built by our team for specified business.</p>
                                        </section>
                                    </div>

                            



                                </div>
                            </div>
                        </section>
            
            </div>


            
            <div className='w-full px-14 h-100 bg-gradient-to-b from-indigo-800 to-black'> 
            <section className='p-6 w-full container mx-auto flex flex-col justify-center gap-10'>
            <h1 class="px-8 text-4xl font-semibold capitalize text-left text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Social</h1>
                   
                            <div class="bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 border-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiMedium className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-2 mb-1 text-xl font-medium text-white">Medium</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://metaverseofthings.medium.com/"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-2 font-bold border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class="bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 border-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiDiscord className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-indigo-700 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-2 mb-1 text-xl font-medium text-white">Discord</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-indigo-900 ring-1  ring-indigo-500 border-2 font-bold border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class="bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 border-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiLinkedin className="shadow  mt-4 ml-4 border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded bg-blue-900 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-2 mb-1 text-xl font-medium text-white">LinkedIn</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-2 font-bold border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class="bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 border-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiTwitter className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-2 mb-1 text-xl font-medium text-white">Twitter</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://twitter.com/metaverseot"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-2 font-bold border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>


                            <div class="mb-40 bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 border-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiInstagram className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-red-500 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-2  mb-1 text-xl font-medium text-white">Instagram</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://www.instagram.com/metaverseofthings/"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-2 font-bold border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>
                        </section>
            </div>

    </div>
   
            
                


             
      
  )
}


export default About
            
            
   
