import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import {BiWifi, BiShieldAlt2, BiReset  } from "react-icons/bi";

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


            <div className='w-full h-100 p-8 pb-4 mx-auto bg-gradient-to-b from-indigo-600 to-indigo-800'>
                        <section className='mt-2 flex flex-col justify-center gap-2'>
                            <div class="container mx-auto mb-20">
                                <h1 class="px-8 text-4xl font-semibold capitalize text-right text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Industries</h1>
                                <div class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-4 xl:grid-cols-3 xl:gap-10">
                                
                                <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Buildings</h2>
                                    <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                    <BiWifi class="p-6 h-full w-full text-white bg-gradient-to-b from-indigo-600 to-black  rounded-lg  object-cover"  alt="MTOT" />
                                    </section>
                                    <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                            <p className="text-md font-medium leading-8 p-4 mx-auto rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting indiviudally 
                                            owned Smart-Devices to buildings we can create safer, more sustainable, and secure communities to become Smart-Buildings. 
                                            Through enablment of incentivized verified contributions created by consensus activities you will boost building longevity 
                                            and community value generation.
                                            </p>      
                                        </section>
                                    </div>
                                   
                                    <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Infrastructure</h2>
                                    <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                        <BiShieldAlt2 class="p-6 h-full w-full text-white bg-gradient-to-b from-indigo-600 to-black   rounded-lg  object-cover"  alt="MTOT" />
                                        </section>
                                    <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                        <p className="text-md font-medium leading-8 p-4 mx-auto rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting Smart-Buildings to 
                                        both Smart-Building Infrastructure and Infrastructure-Contracts the building owners may create new proofs via governed community 
                                        consensus boosting satisfaction, business relationships and community value allowing of community based Smart-Infrastructure.
                                        </p>      
                                        
                                        </section>
                                    </div>
                                
                                   
                                    <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Maintenance</h2>
                                    <section className='h-48 w-4/5 mx-auto  rounded-lg  ring-1 ring-black'> 
                                    <BiReset class="p-6 h-full w-full  text-white bg-gradient-to-b from-indigo-600 to-black   rounded-lg  object-cover"  alt="MTOT" />
                                    </section>
                                 
                                        <section className='mt-4 h-3/6 w-4/5 mx-auto'>
                                        <p className="text-md font-medium leading-8 p-4 mx-auto rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 ring-1 ring-black text-white shadow-2xl">Connecting Smart-Buildings 
                                        and Smart-Infrastrucutre to Maintenance Contracts via verified contributions using our building centric based dApps. 
                                        External companies can build on current relationships with quality control, optimized routing via custom applications built by our team for specified business.</p>
                                        </section>
                                    </div>

                            



                                </div>
                            </div>
                        </section>
            
            </div>

    </div>
   
            
                


             
      
  )
}


export default About
