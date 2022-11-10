import React from 'react'



const products = [
  {
    id: 1,
    name: 'Shiba Inu',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/iyCUUeL3RTiGCKMZcEfEBMxt-e29XK5DGQV5nW10-QA',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/7Nyhpwtju2NO8jdYmEkQg.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 2,
    name: 'Avalanche',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/G-uHsKfc2DlzvWv7ZLTS-EHSXWE78NldSf0IZLsFgc',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/QygaJvLXwbPipjU4FASyi.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 3,
    name: 'Binance',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/rsOwGNMy-pdVSHixgj3pVVjnOy0fYiJ5a5j_TUh9fcs',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/Of2Oq__4xrRX4ZjZBcGny.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',  },
  {
    id: 4,
    name: 'UniSwap',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/ESIcOPBevWOhmSxeK1TUnFYfic83Q17sDyZbyHjY-20',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/W-ivc8ZfqAcCTj-EnYQWy.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 5,
    name: 'Celsius',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/BQ_Wpe6ifJHtZsXAiFCAXoaxSpq57Dkr_HG7RZH2kOE',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/MRr8t9Xn87Stzue4OOL3p.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 6,
    name: 'Kusama',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/wBgBW-up5LM6UFCOPYyw2oPKUZ8_JPkQBm7h_QlyCYs',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/CmHFKvaDXzC_B1EdixS3R.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 7,
    name: 'Aave',
    href: 'https://mirror.xyz/0x38034A81D48cBf8D4c4C757856d14492C848015b/5RhuWBifLxE8c4SqBKpvwSCJHAX21dzs2iRYe9BJAXo',
    education: 'web3 projects',
    imageSrc: 'https://mirror-media.imgix.net/publication-images/08wnLlnaabu17j5nwLdTO.jpeg?height=1400&width=2800&h=1400&w=2800&auto=compress',
    imageAlt: 'web3 projects',
  },
  {
    id: 8,
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
    <div className="bg-gradient-to-b from-indigo-900 to-black">

<section class="pt-5 py-10 flex items-center h-full justify-center">
    <div class="mx-auto max-w-[27.5rem]">
      <div class="text-center">
      <p class="mb-8 text-lg font-medium leading-8 text-white">Infrastructure That Supports The World</p>
        <h1 class="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br><span className='text-indigo-600'>of Things</span></h1>
        <p class="mb-2 text-lg font-medium leading-8 text-white">MoT</p>
      </div>

      <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-indigo-400">
                    MoT Blockchain and Web3 Education.{' '}
                    <a href="#" className="font-semibold text-white">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
            </div>
        </div>

        <div className='p-4'> 
               <div className="mt-8 flex gap-x-4 justify-center">
                 <a
                   href="#"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Concepts
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
                 <a
                   href="#"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Projects
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
                 <a
                   href="#"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Tools
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
               </div>

        </div>
