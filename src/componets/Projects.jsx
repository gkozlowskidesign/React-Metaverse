import React from 'react'
import Logo from '../assets/metaverseofthings_logo.png';




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

