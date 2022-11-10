import logo from '../assets/metaverseofthings_logo.png';
export default function Example() {
    return (
        
  <section className='pt-28 py-80 flex items-center h-100 justify-center bg-gradient-to-b from-indigo-900 to-black'>
    <div className="mx-auto max-w-[27.5rem]">
      <div className="text-center">
      <div className="pt-2  flex items-center justify-center ">
            <img
            className="h-30"
            src={logo}                    
            alt="MoTeX"
            /> 
            </div>     
            <p className="mb-2 text-lg font-medium leading-8 text-white">MoTeX</p>
        <h1 className="mt-2 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">Metaverse <br></br>
        <span className='text-indigo-600'>of Things</span></h1>
        <p className="mb-10 text-lg font-medium leading-8 text-white">Future Infrastructure</p>
      </div>
    </div>
  </section>

    )
}


