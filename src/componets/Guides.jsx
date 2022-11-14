import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";

const About = () => {


  return (
    <div>
            <div name="about" className='w-full h-100 bg-gradient-to-b from-indigo-900 to-indigo-400'>
        
                    <div class="w-full h-full max-w-screen-lg p-8 mx-auto flex flex-col justify-center gap-10 ">
                        <section className='pt-10 py-80 flex items-center h-100 justify-center'>
                            <div className="mx-auto max-w-[27.5rem]">
                                <div className="text-center">
                                    <div className="pt-2  flex items-center justify-center ">
                                        <img className="h-30" src={Logo} alt="MoTeX"/> 
                                    </div>     
                                    <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX Education</p>
                                    <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                                    <span className='text-indigo-600'>of Things</span></h1>
                                    <p className="mb-10 text-lg font-medium leading-8 text-white">Future Infrastructure</p>      
                                </div>
                            </div>
                        </section>

    
                     
                    </div>
            </div>


            <div className='w-full h-100 p-8 pb-14 mx-auto bg-gradient-to-b from-indigo-400 to-white'>
                        <section className='mt-2 flex flex-col justify-center gap-2'>
                            <div class="container mx-auto mb-20">
                                <h1 class="px-8 text-3xl font-semibold capitalize  text-white lg:text-4xl">Industries</h1>
                                <div class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 xl:mt-4 xl:grid-cols-2 xl:gap-2">
                                    <div className='mx-auto justify-center'>
                                        <img class="h-96 w-76 rounded-lg bg-black object-cover" src="https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MTOT" />
                                            <h2 class="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-black">XYZ</h2>
                                      
                                    </div>
                                    <div className='mx-auto justify-center'>
                                        <img class="h-96 w-76 rounded-lg  bg-black object-cover" src="https://images.pexels.com/photos/4966809/pexels-photo-4966809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="MTOT" />
                                            <h2 class="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-black">XYZ</h2>
                                   
                                    </div>
                                

                                </div>
                            </div>
                        </section>
            
            </div>


            
            <div className='w-full h-100 max-w-screen-lg p-8 mx-auto mb-20 bg-white'> 
                        <section className='flex flex-col justify-center  gap-10'>
                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiMedium className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Medium</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://metaverseofthings.medium.com/"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiDiscord className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-indigo-700 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Discord</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiLinkedin className="shadow  mt-4 ml-4 border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded bg-blue-900 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">LinkedIn</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>

                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiTwitter className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Twitter</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://twitter.com/metaverseot"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>


                            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-5 shadow-lg rounded-2xl flex justify-between items-center">
                                <div class="flex">
                                    <div class="-my-2 hidden md:block">
                                        <SiInstagram className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-red-500 text-white" aria-hidden="true" />
                                        </div>
                                    <div>
                                        <h1 class="ml-5  mb-3 text-xl font-medium text-white">Instagram</h1>
                                        <p class="ml-5 text-white hidden md:block">Follow us on all platforms!</p>
                                    </div>
                                </div>
                                <a href="https://www.instagram.com/metaverseofthings/"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
                            </div>
                        </section>
            </div>
<div className='w-full h-100 bg-white'>
    <section class="shadow-lg rounded-2xl">
      <div class=" bg-indigo-800 rounded-2xl container mx-auto max-w-6xl px-6 py-10">
          <h1 class="text-center text-4xl font-semibold text-gray-800 dark:text-white">Frequently asked questions</h1>

          <div class="mt-12 space-y-8">

              <div class="rounded-lg border-2 border-indigo-400 dark:border-indigo-400">
                  <button class="flex w-full items-center justify-between p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>
                  <span class="rounded-full bg-gray-200 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                      </svg>
                  </span>
                  </button>
                  <hr class="border-gray-200 dark:border-gray-700" />
                  <p class="p-8 text-sm text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?</p>
              </div>

              <div class="rounded-lg border-2 border-indigo-400 dark:border-indigo-400">
                  <button class="flex w-full items-center justify-between p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

                  <span class="rounded-full bg-black text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                  </span>
                  </button>
              </div>

              <div class="rounded-lg border-2 border-indigo-400 dark:border-indigo-400">
                  <button class="flex w-full items-center justify-between p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

                  <span class="rounded-full bg-black text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                  </span>
                  </button>
              </div>

              <div class="rounded-lg border-2 border-indigo-400 dark:border-indigo-400">
                  <button class="flex w-full items-center justify-between p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

                  <span class="rounded-full bg-black text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                  </span>
                  </button>
              </div>

              <div class="rounded-lg border-2 border-indigo-400 dark:border-indigo-400">
                  <button class="flex w-full items-center justify-between p-8">
                  <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

                  <span class="rounded-full bg-black text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                  </span>
                  </button>
              </div>
          </div>
      </div>
</section>   

            </div>

    </div>
   
            
                


             
      
  )
}


export default About
