import React from 'react'
import Logo from '../assets/metaverseofthings_logo.png';


const products = [
    {
      id: 1,
      name: 'Non-Fungible Tokens (NFTs)',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/9StXr96qlubzk57TmUcAxv6L9E7PHj_T3vlGytGs_4k',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/w8ZcP23A9IAKFGrT-YN3s.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 2,
      name: 'Blockchains and Sidechains',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/HOC6vNzdRfGirae3zuY6UDEgF1EWTi3vNumhB936kTs',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/ei5i171VGpiaqZrLBjIHr.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 3,
      name: 'Traditional Finance vs DeFi',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/89q_BcgSPYyYStmMj-q_f8m1yT_wj1Grpd27KeUVs6c',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/5oRxqPQ-3f__rdIEkK7up.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 4,
      name: 'Decentralized Exchange (DEX)',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/cSR-gZlxvuF2zQQDyniUwuG87qxmdsO3OUAgISOzOh0',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/8h6e7v5ELwfAFcZHhc_rV.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 5,
      name: 'Cryptocurrency Staking',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/PE8fXPoQlXkOOAOZJD-jEFCHW61hIcZTaVA0RmeYdSo',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/7-o9GBtCw3gt6HBdgVbAS.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 6,
      name: 'Initial Decentralized Exchange Offering',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/-SDtOQSCLANLfvXyYYgQxqrAbi4-O_bfLycR091hr5Y',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/eSCvjEvr5r4un7HBr_bqY.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 7,
      name: 'Ethereum Merge',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/8GuoH9LcOIU6t8e-gPpdEe2MTFEv6H8DDGdDuyI76DE',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/vOBIEyYULRWw_lzygSuM0.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
      id: 8,
      name: 'Different Types of DAOs',
      href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/b6wqIbTqSnslQ5-B68HNvFeF4Wuyq7ydf-i9eYjMf8k',
      education: 'web3 concepts',
      imageSrc: 'https://mirror-media.imgix.net/publication-images/4RHlYkRiqAAialaqES8mf.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
      imageAlt: 'web3 concepts',
    },
    {
        id: 9,
        name: 'Shiba Inu',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/iyCUUeL3RTiGCKMZcEfEBMxt-e29XK5DGQV5nW10-QA',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/7Nyhpwtju2NO8jdYmEkQg.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 10,
        name: 'Avalanche',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/G-uHsKfc2DlzvWv7ZLTS-EHSXWE78NldSf0IZLsFgc',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/QygaJvLXwbPipjU4FASyi.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 11,
        name: 'Binance',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/rsOwGNMy-pdVSHixgj3pVVjnOy0fYiJ5a5j_TUh9fcs',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/Of2Oq__4xrRX4ZjZBcGny.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',  },
      {
        id: 12,
        name: 'UniSwap',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/ESIcOPBevWOhmSxeK1TUnFYfic83Q17sDyZbyHjY-20',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/W-ivc8ZfqAcCTj-EnYQWy.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 13,
        name: 'Celsius',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/BQ_Wpe6ifJHtZsXAiFCAXoaxSpq57Dkr_HG7RZH2kOE',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/MRr8t9Xn87Stzue4OOL3p.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 14,
        name: 'Kusama',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/wBgBW-up5LM6UFCOPYyw2oPKUZ8_JPkQBm7h_QlyCYs',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/CmHFKvaDXzC_B1EdixS3R.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 15,
        name: 'Aave',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/5RhuWBifLxE8c4SqBKpvwSCJHAX21dzs2iRYe9BJAXo',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/08wnLlnaabu17j5nwLdTO.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
      {
        id: 16,
        name: 'Kucoin',
        href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/e3ekBjU5NnKr087koz4oaFMnKi3JQO0MTrsNw9c1tRc',
        education: 'web3 projects',
        imageSrc: 'https://mirror-media.imgix.net/publication-images/jhEW9kY3ukKX4zR-fXQg1.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
        imageAlt: 'web3 projects',
      },
    // More products...
  ]
  

  export default function Example() {
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

        <div className='w-full h-100 bg-gradient-to-b from-indigo-900 to-indigo-600'>
            <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-6 min-w-full lg:min-w-screen space-y-6 sm:space-y-0 sm:gap-4">
                            <div class="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
                                <div class="ml-20 w-80">
                                    <h2 class="text-white text-4xl font-extrabold">Education</h2>
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
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/learning" class="list-none  hover:text-indigo-600">Education</a></li>
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/foundation" class="list-none  hover:text-indigo-600">Foundation</a></li>
                                        <li class="py-3 rounded-md border-b-2 hover:bg-slate-50 cursor-pointer"><a href="https://www.metaverseot.xyz/documentation" class="list-none  hover:text-indigo-600">Documentation</a></li>                                
                                        
                                    </div>                    
                            </div>
            </div>
        </div>
  



<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<h2 className="sr-only">Products</h2>

<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
{products.map((product) => (
<a key={product.id} href={product.href} className="group">
  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    <img
      src={product.imageSrc}
      alt={product.imageAlt}
      className="h-full w-full object-cover object-center group-hover:opacity-75"
    />
  </div>
  <h3 className="mt-4 text-lg font-bold text-indigo-400">{product.name}</h3>
  <p className="mt-1 text-sm font-medium text-white">{product.education}</p>
</a>
))}
  </div>
</div>
</div>
</div>



)
}
     
        
