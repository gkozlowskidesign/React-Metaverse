import React from 'react'
import 'flowbite';
const Navigation = () => {
return (
<div class="h-screen w-full flex  bg-black items-center  jusitfy-center mx-auto">
	<aside class="flex flex-col items-center  bg-black text-gray-700  h-full pb-10">
	
{/* Navigation Top Icon */}
		<div class="h-16 flex items-center w-full">
			<a class="w-full mx-auto" href="https://metaverseot.xyz/">
			<img
			class="w-10 mx-auto"
			src="https://github.com/gkozlowskidesign/MetaverseOfThings---REACT-Website/blob/Branch_1-7-2023/MVOT%20LOGO%20copy.png?raw=true"
			alt="MetaverseOfThings Logo" />
			</a>
		</div>
{/* Navigation */}
		<ul className="pl-4">
			
{/* Home Navigation Icon */}
			<li class="ring-2 ring-black hover:ring-white hover:text-white mt-40 rounded-xl">
					<a
					href="/"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" 
					fill="none" viewBox="0 0 24 24" 
					stroke-width="1.5" 
					stroke="currentColor" 
					class="w-6 h-6">
					<path stroke-linecap="round" 
					stroke-linejoin="round" 
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 
					12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
					1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 
					0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
					</a>
			</li>
{/* Dashboard Navigation Icon */}
			<li class="ring-2 ring-black hover:ring-white hover:text-white mt-4 rounded-xl">
					<a
					href="/foundation"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" 
					fill="none"
					viewBox="0 0 24 24" 
					stroke-width="1.5" 
					stroke="currentColor" 
					class="w-6 h-6">
					<path stroke-linecap="round" 
					stroke-linejoin="round" 
					d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 
					2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 
					0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 
					2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 
					2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
					</svg>
					</a>
			</li>
{/* Learning Navigation Icon */}
			<li class="ring-2 ring-black hover:ring-white hover:text-white mt-4 rounded-xl">
					<a
					href="/learning"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" 
					fill="none" 
					viewBox="0 0 24 24" 
					stroke-width="1.5" 
					stroke="currentColor" 
					class="w-6 h-6">
					<path stroke-linecap="round" 
					stroke-linejoin="round" 
					d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 
					20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 
					0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 
					5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 
					0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 
					8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
					</svg>
					</a>
			</li>
{/* Rocket Navigation Icon */}
			<li class="ring-2 ring-black hover:ring-white hover:text-white mt-4 rounded-xl">
					<a
					href="https://mvot-analyitcs.netlify.app/"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" 
					fill="none" 
					viewBox="0 0 24 24" 
					stroke-width="1.5" 
					stroke="currentColor" 
					class="w-6 h-6">
					<path stroke-linecap="round" 
					stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 
					0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 
					0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 
					15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 
					004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
					</svg>
					</a>
			</li>
		</ul>
</aside>
{/* Navigation Title Text */}
		<div class="mx-auto flex flex-col">
			<section className='visible lg:invisible ml-4'>
			<h1 className="mb-2 text-[3rem] font-bold font-extrabold text-transparent text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">
			M<span className='bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300'>VoT</span>
			</h1>
			</section>

			<section className='invisible lg:visible'>
			<h1 className="mb-2 text-[3rem] font-bold font-extrabold text-transparent text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">Metaverse <br></br>
			<span className='bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300'>of Things</span>
			</h1>
			</section>
		</div>
</div>)};
export default Navigation
            
   
   
