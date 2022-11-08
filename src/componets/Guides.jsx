import React from 'react'
import Mirror from "../assets/Mirror.png"
import { SiDiscord, SiInstagram, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";

const About = () => {


  return (
    <div name="about" className='w-ful h-100 py-40 bg-gradient-to-b from-black to-indigo-900'>
        
        <div class="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full gap-10">

        <div class=" bg-gradient-to-b from-purple-600 to-purple-400  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiMedium className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-black text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Follow Us On Medium</h1>
                        <p class="ml-5 text-black">Follow us on Medium if you want to learn more about Web3 Tools and Blockchain Concepts.</p>
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
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Join the Discord Community!</h1>
                        <p class="ml-5 text-black">Be first to join our community, its hard to see the vision so our whitelist will be limited.</p>
                    </div>
                </div>
                <a href="https://discord.gg/BPqsEMdjDW"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

            <div class=" bg-gradient-to-b from-blue-800 to-blue-500  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiLinkedin className="shadow  m-2  border-2 sm:w-12 sm:h-12  w-14 h-14 p-2 rounded text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">LinkedIn</h1>
                        <p class="ml-5 text-black">Follow us on LinkedIn for Blockchain Career Tips, Cryptocurrency Project Publications and More!</p>
                    </div>
                </div>
                <a href="https://www.linkedin.com/company/metaverse-of-things/?viewAsMember=true"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

            <div class=" bg-gradient-to-b from-blue-500 to-blue-300  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                    <img src={Mirror} alt="Mirror.xyz" className="shadow m-2 border-2 sm:w-12 sm:h-12 w-40 h-14 rounded bg-blue-200 text-white" aria-hidden="true" />                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Subscribe and collect our NFTs!</h1>
                        <p class="ml-5 text-black">Learn about Web3 Tools, Blockchain Concepts and Cryptocurrency Projects.</p>
                    </div>
                </div>
                <a href="https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b"><button class="ml-4 bg-indigo-900 border-2 hover:opacity-75 text-white rounded-full px-6 py-3">Go!</button></a>
            </div>

            <div class=" bg-gradient-to-b from-blue-400 to-blue-100  p-6 shadow-lg rounded-lg flex justify-between items-center">
                <div class="flex">
                    <div class="-my-2 hidden md:block">
                        <SiTwitter className="shadow m-2 border-2 sm:w-12 sm:h-12 w-14 h-14 p-2 rounded bg-blue-400 text-white" aria-hidden="true" />
                        </div>
                    <div>
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Follow Us On Twitter!</h1>
                        <p class="ml-5 text-black">Follow us on twitter and interact with us to learn more about the project!</p>
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
                        <h1 class="ml-5 mb-3 text-xl font-medium text-white">Follow Us on Instagram!</h1>
                        <p class="ml-5 text-black">Follow Us on Instagram for Project Updates, Important Blockchain News and More!</p>
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
