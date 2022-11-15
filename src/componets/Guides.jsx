import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";

const About = () => {


  return (
    <div>
            <div name="about" className='w-full h-100 bg-gradient-to-b from-indigo-900 to-indigo-600'>
        
                    <div class="w-full h-full  max-w-screen-lg p-6 mx-auto flex flex-col justify-center gap-2 ">
                        <section className='pt-10 py-40 flex items-center h-100 justify-center'>
                            <div className="mx-auto max-w-[27.5rem]">
                                <div className="text-center">
                                    <div className="pt-2  flex items-center justify-center ">
                                        <img className="h-30" src={Logo} alt="MoTeX"/> 
                                    </div>     
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX Education</p>
                                    <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                                    <span className='text-purple-400'>of Things</span></h1>
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">Future Infrastructure</p>      
                                </div>
                            </div>
                        </section>

    
                     
                    </div>
            </div>


            <div className='w-full h-100 p-8 pb-4 mx-auto bg-gradient-to-b from-indigo-600 to-indigo-900'>
                        <section className='mt-2 flex flex-col justify-center gap-2'>
                            <div class="container mx-auto mb-20">
                                <h1 class="px-8 text-4xl font-semibold capitalize text-right text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Industries</h1>
                                <div class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-4 xl:grid-cols-3 xl:gap-10">
                                
                                <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4 text-left text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Buildings</h2>
                                    <img class="h-96 w-full  rounded-lg  bg-black ring-2 ring-black object-cover" src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="MTOT" />
                                         
                                            <section className='mt-4 text-left'>
                                            <p className="mb-10 text-lg font-medium leading-8 p-2 text-white">Connecting indiviudally owned Smart-Devices to buildings we can create safer, more sustainable, and secure communities to become Smart-Buildings. Through enablment of incentivized verified contributions created by consensus activities you will boost building longevity and community value generation.</p>      
                                        </section>
                                    </div>
                                   
                                    <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-left text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Infrastructure</h2>
                                    <img class="h-96 w-full  rounded-lg  bg-black ring-2 ring-black object-cover" src="https://images.pexels.com/photos/6476775/pexels-photo-6476775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="MTOT" />
                                            <section className='mt-4 text-left'>
                                        <p className="mb-10 text-lg font-medium leading-8 p-2 text-white">Connecting Smart-Buildings to both Building-Infrastructure and Infrastructure-Contracts the building owners may create new proofs via governed community consensus boosting satisfaction, business relationships and community value allowing of community based Smart-Infrastructure.</p>      
                                        </section>
                                    </div>
                                
                                   
                                    <div className='mx-auto justify-center'>
                                    <h2 class="mt-4 mb-4  text-left text-2xl font-semibold capitalize text-gray-800 dark:text-white">Smart Maintenance</h2>
                                    <img class="h-96 w-full rounded-lg bg-black ring-2 ring-black object-cover" src="https://images.pexels.com/photos/2186572/pexels-photo-2186572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="MTOT" />
                                        <section className='mt-4 text-left'>
                                        <p className="mb-10 text-lg font-medium leading-8 p-2 text-white">Connecting Smart-Buildings and Smart-Infrastrucutre to Maintenance Contracts via verified contributions using building based dApps. External companies can build on relationships with their routes while using custom applications built by our team for optimized business operations.</p>
                                        </section>
                                    </div>

                            



                                </div>
                            </div>
                        </section>
            
            </div>


            
            <div className='w-full px-14 h-100 bg-gradient-to-b from-indigo-900 to-black'> 
            <section className=' w-full container mx-auto flex flex-col justify-center gap-10'>
            <h1 class="px-8 text-4xl font-semibold capitalize text-left text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Social</h1>
                   
                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 border-2 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
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

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 border-2 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
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

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 border-2 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
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

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 border-2 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
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


                            <div class="mb-40 bg-gradient-to-b from-black to-indigo-700 ring-1 border-2 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
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




             <section class="min-h-screen bg-gradient-to-b from-black via-indigo-800 to-white">
    <div class="container mx-auto flex min-h-screen flex-col px-6 py-12">
        <div class="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div class="text-white lg:mx-6 lg:w-1/2">
        <h1 class="px-8 text-4xl font-semibold capitalize text-right text-purple-400 lg:text-5xl"><span className="text-white">MVoT </span>Contact</h1>
  
        </div>

        <div class="mt-8 lg:mx-6 lg:w-1/2">
            <div class="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-black lg:max-w-xl">
            <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

            <form class="mt-6">
                <div class="flex-1">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                <input type="text" placeholder="John Doe" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-indigo-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div class="mt-6 flex-1">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input type="email" placeholder="johndoe@example.com" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-indigo-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div class="mt-6 w-full">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-indigo-900 dark:text-gray-300 dark:focus:border-blue-300 md:h-48" placeholder="Message"></textarea>
                </div>

                <button class="mt-6 w-full transform rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>




           

    </div>
   
            
                


             
      
  )
}


export default About
