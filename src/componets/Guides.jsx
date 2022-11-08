import React from 'react'
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter, SiGithub } from "react-icons/si";

const About = () => {


  return (
    <div name="about" className='w-ful h-100 py-40 bg-gradient-to-b from-black to-indigo-900'>
        
        <div class="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full gap-10">
    
      <div class=" bg-gradient-to-b from-gray-900 to-gray-400  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiGithub className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-gray-700 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">GitHub</h1>
                        <p class="ml-5 hidden md:block text-black">Be first to join our developer community.</p>
                    </div>
                </div>
                <a href="https://github.com/Metaverse-Of-Things"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

        <div class=" bg-gradient-to-b from-purple-400 to-purple-600  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiMedium className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Medium</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on Medium if you want to learn more about Web3 Tools and Blockchain Concepts.</p>
                    </div>
                </div>
                <a href="https://metaverseofthings.medium.com/"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

        <div class=" bg-gradient-to-b from-indigo-500 to-indigo-800  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiDiscord className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-indigo-700 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Discord</h1>
                        <p class="ml-5 hidden md:block text-black">Be first to join our community, its hard to see the vision so our whitelist will be limited.</p>
                    </div>
                </div>
                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

            <div class=" bg-gradient-to-b from-blue-800 to-blue-500  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiLinkedin className="shadow m-2 border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">LinkedIn</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on LinkedIn for Blockchain Career Tips, Cryptocurrency Project Publications and More!</p>
                    </div>
                </div>
                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>


            <div class=" bg-gradient-to-b from-blue-400 to-blue-100  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiTwitter className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Twitter</h1>
                        <p class="ml-5 hidden md:block text-black">Follow us on twitter and interact with us to learn more about the project!</p>
                    </div>
                </div>
                <a href="https://twitter.com/metaverseot"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>


            <div class=" bg-gradient-to-b from-orange-600 to-yellow-400  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiInstagram className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-red-500 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Instagram</h1>
                        <p class="ml-5 hidden md:block text-black">Follow Us on Instagram for Project Updates, Important Blockchain News and More!</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/metaverseofthings/"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>
            
            <br></br>
            <br></br>

       
        </div>
    </div>
  )
}

export default About
