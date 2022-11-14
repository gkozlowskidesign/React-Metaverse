import React from 'react'
import Logo from "../assets/metaverseofthings_logo.png"
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";

const About = () => {


  return (
    <div name="about" className='w-full h-100 py-2 bg-gradient-to-b from-indigo-900 to-black'>
        
    <div class="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full gap-10">
    
    
    
    <section className='pt-10 py-80 flex items-center h-100 justify-center'>
    <div className="mx-auto max-w-[27.5rem]">
      <div className="text-center">
      <div className="pt-2  flex items-center justify-center ">
            <img
            className="h-30"
            src={Logo}                    
            alt="MoTeX"
            /> 
            </div>     
            <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX Education</p>
        <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
        <span className='text-indigo-600'>of Things</span></h1>
 <p className="mb-10 text-lg font-medium leading-8 text-white">Future Infrastructure</p>      
</div>
</div>
</section>

    
    <section>
    <h1 class="px-8 text-3xl font-bold text-gray-800 dark:text-indigo-500 lg:text-4xl">Get Started</h1>
    <div class="mt-2 flex justify-center">
    <img class="h-96 w-full rounded-xl ring-1 ring-indigo-700 object-cover lg:w-12/12" src="https://www.solanaecosystemapp.com/src/img/index/hero-wide.jpg" alt="background" />
    </div>
    <div class="container mb-10 mx-auto text-right px-9">
    </div>
    </section>
   


    <section>
    <div class="container mx-auto mb-20">
        <h1 class="px-8 text-3xl font-semibold capitalize  text-gray-800 dark:text-indigo-500 lg:text-4xl">Target Industries</h1>
        <div class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mt-4 xl:grid-cols-3 xl:gap-5">
        <div>
            <img class="h-86 w-full rounded-lg bg-black ring-1 ring-indigo-700 object-cover" src="https://www.metaverseot.xyz/static/media/metaverseofthings_logo.ecd19f48919fdc4997a9.png" alt="MTOT" />
            <h2 class="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Social</h2>
            <section className='mt-4 text-center'>
            <button class="mt-1 rounded-lg bg-gradient-to-b from-black to-indigo-900 ring-1 ring-indigo-500 px-6 py-4 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Visit Page</button>

            </section>
        </div>

        <div>
        <img class="h-86 w-full rounded-lg  bg-black ring-1 ring-indigo-700 object-cover" src="https://www.metaverseot.xyz/static/media/metaverseofthings_logo.ecd19f48919fdc4997a9.png" alt="MTOT" />
            <h2 class="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Industrial</h2>
            <section className='mt-4 text-center'>
            <button class="mt-1 rounded-lg bg-gradient-to-b from-black to-indigo-900 ring-1 ring-indigo-500 px-6 py-4 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Visit Page</button>

            </section>
        </div>

        <div>
        <img class="h-86 w-full rounded-lg  bg-black ring-1 ring-indigo-700 object-cover" src="https://www.metaverseot.xyz/static/media/metaverseofthings_logo.ecd19f48919fdc4997a9.png" alt="MTOT" />
            <h2 class="mt-4 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white">Data</h2>
            <section className='mt-4 text-center'>
            <button class="mt-1 rounded-lg bg-gradient-to-b from-black to-indigo-900 ring-1 ring-indigo-500 px-6 py-4 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Visit Page</button>

            </section>
        </div>
        </div>
    </div>
    </section>

    <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-3 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiMedium className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Medium</h1>
                        <p class="ml-5 text-black">Follow us on Medium if you want to learn more about Web3 Tools and Blockchain Concepts.</p>
                    </div>
                </div>
                <a href="https://metaverseofthings.medium.com/"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
            </div>

            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-3 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiDiscord className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-indigo-700 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Discord</h1>
                        <p class="ml-5 text-black">Be first to join our community, its hard to see the vision so our whitelist will be limited.</p>
                    </div>
                </div>
                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
            </div>

            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-3 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiLinkedin className="shadow  mt-4 ml-4 border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded bg-blue-900 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">LinkedIn</h1>
                        <p class="ml-5 text-black">Follow us on LinkedIn for Blockchain Career Tips, Cryptocurrency Project Publications and More!</p>
                    </div>
                </div>
                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-indigo-900 ring-1 ring-indigo-500 border-1 border-indigo-300 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
            </div>

            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-3 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiTwitter className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Twitter</h1>
                        <p class="ml-5 text-black">Follow us on twitter and interact with us to learn more about the project!</p>
                    </div>
                </div>
                <a href="https://twitter.com/metaverseot"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
            </div>


            <div class=" bg-gradient-to-b from-black to-indigo-700 ring-1 ring-indigo-800 p-3 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiInstagram className="shadow mt-4 ml-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-red-500 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5  mb-3 text-xl font-medium text-white">Instagram</h1>
                        <p class="ml-5 text-black">Follow Us on Instagram for Project Updates, Important Blockchain News and More!</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/metaverseofthings/"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-2">Follow</button></a>
            </div>
            
            <br></br>
            <br></br>






    <section class="bg-indigo-800 shadow-lg rounded-2xl">
    <div class="container mx-auto max-w-4xl px-6 py-10">
        <h1 class="text-center text-4xl font-semibold text-gray-800 dark:text-white">Frequently asked questions</h1>

        <div class="mt-12 space-y-8">
        <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
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

        <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
            <button class="flex w-full items-center justify-between p-8">
            <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

            <span class="rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </span>
            </button>
        </div>

        <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
            <button class="flex w-full items-center justify-between p-8">
            <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

            <span class="rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </span>
            </button>
        </div>

        <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
            <button class="flex w-full items-center justify-between p-8">
            <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

            <span class="rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </span>
            </button>
        </div>

        <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
            <button class="flex w-full items-center justify-between p-8">
            <h1 class="font-semibold text-gray-700 dark:text-white">What is the Metaverse of Things?</h1>

            <span class="rounded-full bg-blue-500 text-white">
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
