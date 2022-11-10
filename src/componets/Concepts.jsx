import React from 'react'



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
                    <a href="https://metaverseofthings.medium.com/" className="font-semibold text-white">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
            </div>
        </div>

        <div className='p-4'> 
               <div className="mt-8 flex gap-x-4 justify-center">
                  <a
                   href="https://www.metaverseot.xyz/Concepts"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Concepts
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
                 <a
                   href="https://www.metaverseot.xyz/Projects"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Projects
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
                 <a
                   href="https://www.metaverseot.xyz/Projects"
                   className="inline-block rounded-lg bg-indigo-900 px-5 py-3.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-400 hover:ring-indigo-700"
                 >
                   Tools
                   <span className="text-indigo-200" aria-hidden="true"></span>
                 </a>
               </div>
        </div>
    </div>
  </section>



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
  )
}
