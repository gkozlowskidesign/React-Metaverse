import React from 'react'
const Hero = () => {
return (
<div>
    <div name="about" className='w-full h-100 bg-black'>
         <div class="w-full h-full  max-w-screen-lg p-20 mx-auto flex flex-col justify-center gap-2 ">
            <section className='py-16 flex items-center h-100 justify-center'>
                <div className="mx-auto max-w-[27.5rem]">
                <div className="text-center">
                <h1 className="mt-20 mb-2 text-[4rem] font-bold leading-[4rem]font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300">Metaverse <br></br>
                <span className='bg-clip-text bg-gradient-to-r from-purple-700 to-pink-300'>of Things</span></h1>
                <h3 className="mb-2 text-[1rem] font-bold leading-8 text-white">Explore the Destination of Discovery!</h3>      
                </div>
                </div>
            </section> 
        </div>
    </div>
</div>
)};
export default Hero
