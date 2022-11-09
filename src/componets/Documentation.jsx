import React from 'react'

const Documentation = () => {
  return (
<section class="mb-10 bg-black text-gray-600 body-font">
    
  <section class="pt-4 pb-10 py-2 flex items-center h-full justify-center  bg-gradient-to-b from-indigo-900 to-black">
    <div class="mx-auto max-w-[30rem]">
      <div class="text-center">
          <br></br><br></br>
        <p class="mb-8 text-lg font-medium leading-8 text-indigo-600/95">Introducing the future of Web3 Management</p>
        <h1 class="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br><span className='text-indigo-600'>of Things</span></h1>
      </div>
    </div>
  </section>
 
    <div class="flex flex-wrap">
            <iframe className='mb-40' src="https://metaverse-of-things.gitbook.io/introduction/" name="iframe_a" scrolling="no" height="2800rem" width="100%" title="Iframe Example"></iframe>
    </div>

</section>
  )
}

export default Documentation
