import React from 'react'
import Logo from '../assets/metaverseofthings_logo.png';


const Documentation = () => {
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
                                    <h2 class="text-white text-4xl font-extrabold">MVoT Documentation</h2>
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
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/" class="list-none  hover:text-indigo-600">Get Started</a></li>
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/learning" class="list-none  hover:text-indigo-600">Web3 Learning</a></li>
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/foundation" class="list-none  hover:text-indigo-600">Foundation</a></li>
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/documentation" class="list-none  hover:text-indigo-600">Documentation</a></li>                                
                                        
                                    </div>
                                </div>                        
                            </div>
                        </div>

                      
            
                    </section>


     <div className='w-full h-100 p-2 pb-10 mx-auto bg-white'>
            <section className='mt-2 flex flex-col justify-center gap-2'>
                  <div className="flex flex-wrap">
                    <iframe className='mb-2' src="https://metaverse-of-things.gitbook.io/introduction/" name="iframe_a" scrolling="no" height="2800rem" width="100%" title="Iframe Example"></iframe>
                    </div>
            </section>
    </div>
</div>
      
  )
}

export default Documentation
