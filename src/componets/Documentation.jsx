import React from 'react'
import logo from '../assets/metaverseofthings_logo.png';


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


     <div className='w-full h-100 p-8 pb-10 mx-auto bg-white'>
            <section className='mt-2 flex flex-col justify-center gap-2'>

                    <div className="mt-10 flex justify-center">
                    <img className="h-96 w-4/5 rounded-xl object-cover lg:w-3/5" alt="smart-city" src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="mx-auto max-w-lg text-center">
                         <h1 className="text-3xl mt-10 p-6 font-bold text-gray-800 dark:text-black lg:text-4xl">Building Your Next Application with Blockchain, IoT, and Web3 Components</h1>
                                <button className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-indigo-300 focus:outline-none lg:mx-0 lg:w-auto">Get in Contact!</button>
                    </div>
<div class="flex flex-wrap">
            <iframe className='mb-40' src="https://metaverse-of-things.gitbook.io/introduction/" name="iframe_a" scrolling="no" height="2800rem" width="100%" title="Iframe Example"></iframe>
    </div>

</div>
            
                
         
  )
}

export default Documentation
