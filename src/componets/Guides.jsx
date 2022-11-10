import React from 'react'
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter, SiGithub } from "react-icons/si";

const About = () => {


  return (
    <div name="about" className='w-ful h-100 py-2 bg-gradient-to-b from-indigo-900 to-black'>
    
      <div className="bg-black">

<section className='pt-10 py-80 flex items-center h-100 justify-center bg-gradient-to-b from-indigo-900 to-black'>
    <div className="mx-auto max-w-[27.5rem]">
      <div className="text-center">
      <div className="pt-2  flex items-center justify-center ">
            <img
            className="h-30"
            src={logo}                    
            alt="MoTeX"
            /> 
            </div>     
            <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX Community</p>
        <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
        <span className='text-indigo-600'>of Things</span></h1>
 <p className="mb-10 text-lg font-medium leading-8 text-white">Future Infrastructure</p>      
</div>
</div>
</section>

    
    
        <div class="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full gap-10">
    
      <div class=" bg-gradient-to-b from-gray-600 to-gray-200  p-6 shadow-lg rounded-2xl flex justify-between items-center">
   
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiGithub className="shadow m-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-gray-700 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">GitHub</h1>
                        <p class="ml-5 hidden md:block text-black">Be first to join our developer community.</p>
                    </div>
                </div>
                <a href="https://github.com/Metaverse-Of-Things"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>

        <div class=" bg-gradient-to-b from-purple-400 to-purple-600  p-6 shadow-lg rounded-2xl  flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiMedium className="shadow m-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Medium</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on Medium if you want to learn more about Web3 Tools and Blockchain Concepts.</p>
                    </div>
                </div>
                <a href="https://metaverseofthings.medium.com/"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>

        <div class=" bg-gradient-to-b from-indigo-500 to-indigo-800  p-6 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiDiscord className="shadow m-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-indigo-700 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Discord</h1>
                        <p class="ml-5 hidden md:block text-black">Be first to join our community, its hard to see the vision so our whitelist will be limited.</p>
                    </div>
                </div>
                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>

            <div class=" bg-gradient-to-b from-blue-800 to-blue-500  p-6 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiLinkedin className="shadow m-4 border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">LinkedIn</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on LinkedIn for Blockchain Career Tips, Cryptocurrency Project Publications and More!</p>
                    </div>
                </div>
                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>


            <div class=" bg-gradient-to-b from-blue-400 to-blue-100  p-6 shadow-lg rounded-2xl flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiTwitter className="shadow m-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Twitter</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on twitter and interact with us to learn more about the project!</p>
                    </div>
                </div>
                <a href="https://twitter.com/metaverseot"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>


            <div class=" bg-gradient-to-b from-orange-600 to-yellow-400  p-6 shadow-lg rounded-2xl  flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiInstagram className="shadow m-4 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-red-500 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Instagram</h1>
                        <p class="ml-5 hidden md:block text-black">Follow Us on Instagram for Project Updates, Important Blockchain News and More!</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/metaverseofthings/"><button class="ml-4 bg-gradient-to-b from-black to-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-4 py-2">Go!</button></a>
            </div>
            
            <br></br>
            <br></br>

       
        </div>
    </div>
  )
}

export default About
