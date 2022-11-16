import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import {  BiHive, BiShieldAlt2, BiReset  } from "react-icons/bi";

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
    <section>
                        <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-6 min-w-full lg:min-w-screen space-y-6 sm:space-y-0 sm:gap-4">
                            <div class="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
                                <div class="ml-20 w-80">
                                    <h2 class="text-white text-4xl">MVoT Home</h2>
                                    <p class="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">Detailed Documentation on projects, roadmaps, guides and more.</p>
                                </div>
                            </div>

                            <div class="h-96">
                                <div class="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>

                                <div class="bg-white  rounded-md">
                                    <div class="bg-white rounded-md list-none  text-center mt-8">
                                        <li class="py-3 border-b-2"><a href="https://www.metaverseot.xyz/" class="list-none  hover:text-indigo-600">Home</a></li>
                                        <li class="py-3 border-b-2"><a href="https://www.metaverseot.xyz/" class="list-none  hover:text-indigo-600">Get Started</a></li>
                                        <li class="py-3 border-b-2"><a href="https://www.metaverseot.xyz/foundation" class="list-none  hover:text-indigo-600">Solutions</a></li>
                                        <li class="py-3 border-b-2"><a href="https://www.metaverseot.xyz/foundation" class="list-none  hover:text-indigo-600">Foundation</a></li>
                                        <li class="py-3 border-b-2"><a href="https://www.metaverseot.xyz/foundation" class="list-none  hover:text-indigo-600">Connect</a></li>                                
                                        
                                    </div>
                                </div>                        
                            </div>
                        </div>

                      
            
                    </section>


<div class="bg-white">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-black">Future Infrastructure and Applications</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 1"/>
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 2"/>
            </div>
        </div>
</div>
            
                
         


              <div className='w-full h-100 p-8 pb-4 mx-auto bg-gradient-to-b from-white to-indigo-800'>
                        <section className='mt-2 flex flex-col justify-center gap-2'>
                            <div class="container mx-auto mb-20">
                                <div class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-4 xl:grid-cols-3 xl:gap-10">
                                
                                  <div className='justify-center'>
                                        <h2 class="mt-4 mb-4  text-center text-4xl font-semibold capitalize text-indigo-800">BuildingFi</h2>
                                        <section className='h-48 w-4/5 mx-auto  rounded-lg'> 
                                        <BiHive class="p-6 h-full w-full text-black rounded-lg  object-cover"  alt="MTOT" />
                                        </section>
                                      
                                    </div>
                                   
                                    <div className='justify-center'>
                                        <h2 class="mt-4 mb-4  text-center text-4xl font-semibold capitalize text-indigo-800">InfraHive</h2>
                                        <section className='h-48 w-4/5 mx-auto  rounded-lg   ring-black'> 
                                        <BiShieldAlt2 class="p-6 h-full w-full text-black rounded-lg  object-cover"  alt="MTOT" />
                                        </section>
                                    
                                      
                                    </div>
                                
                                   
                                    <div className='justify-center'>
                                    <h2 class="mt-4 mb-4  text-center text-4xl font-semibold capitalize text-indigo-800">P2PmFi</h2>
                                    <section className='h-48 w-4/5 mx-auto  rounded-lg'> 
                                    <BiReset class="p-6 h-full w-full text-black rounded-lg  object-cover"  alt="MTOT" />
                                    </section>
                                 
                                     
                                    </div>

                            



                                </div>
                            </div>
                        </section>
            
            </div>





            
                      <div className='w-full px-10 h-100 bg-gradient-to-b from-indigo-800 to-black'> 
                            <section className='p-10 w-full container mx-auto flex flex-col justify-center gap-10'>

                            <footer class="relative py-20 flex flex-col items-center overflow-hidden md:py-40">
    <div class="relative z-[1] container m-auto px-6 md:px-12">
        <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div class="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                   

                    <ul class="space-y-8">
                        <li>
                            <a href="https://github.com/Metaverse-Of-Things" class="flex items-center space-x-3 hover:text-indigo-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/metaverseot" class="flex items-center space-x-3 hover:text-indigo-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7" viewBox="0 0 16 16">
<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                                <span>Twitter</span>
                            </a>
                        </li>
                 
                        <li>
                            <a href="https://metaverseofthings.medium.com/" class="flex items-center space-x-3 hover:text-indigo-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                                </svg>
                                <span>Medium</span>
                            </a>
                        </li>
                
                        <li>
                            <a href="https://www.instagram.com/metaverseofthings/" class="flex items-center space-x-3 hover:text-indigo-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div class="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    <span class="block text-gray-300">Future Infratstructure</span>

                    <span class="block text-gray-300">MVoT Systems &copy; 2022</span>

                    <span class="flex justify-between text-white"> 
                        <a href="https://metaverse-of-things.gitbook.io/docs/" class="font-semibold">Terms of Use </a>
                        <a href="https://metaverse-of-things.gitbook.io/docs/" class="font-semibold"> Privacy Policy</a> 
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" class="bg-layers bg-scale w-56 h-56 m-auto blur-xl  rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" class="absolute inset-0 w-full h-full  opacity-80"></div>
                </footer>



                                </section>
                                </div>
            </div>

   
            
                


             
      
  )
}


export default About
            
            
   
