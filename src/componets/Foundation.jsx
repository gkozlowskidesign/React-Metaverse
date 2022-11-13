
import React from 'react'
import logo from '../assets/metaverseofthings_logo.png';


export default function Example() {
  return (
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
            <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX Education</p>
        <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
        <span className='text-indigo-600'>of Things</span></h1>
 <p className="mb-10 text-lg font-medium leading-8 text-white">Future Infrastructure</p>      
</div>
         <div className='p-4'> 
               <div className="mt-8 flex gap-x-4 justify-center">
                 <a
                  href="https://www.metaverseot.xyz/projects"
                  className="inline-block rounded-lg bg-violet-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-200 active:bg-violet-900">
                  Projects
                 </a>
                 <a
                   href="https://www.metaverseot.xyz/concepts"
                   className="inline-block rounded-lg bg-violet-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-200 hover:bg-violet-900">
                   Concepts
                  </a>
                 <a
                   href="https://www.metaverseot.xyz/"
                   className="inline-block rounded-lg bg-violet-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-200 hover:bg-violet-900">
                   Systems
                 </a>
               </div>
        </div>
    </div>
  </section>




    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        
      </div>
    </div>
  )
}
