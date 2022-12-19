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
                      <p className="mb-2 text-lg font-medium leading-8 text-white">MVoT Documentation</p>
                      <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
                      <span className='text-purple-400'>of Things</span></h1>
                      <p className="mb-2 text-lg font-medium leading-8 text-white">Get Started</p>      
                  </div>
                </div>
               </section>  
             </div>
        </div>



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
