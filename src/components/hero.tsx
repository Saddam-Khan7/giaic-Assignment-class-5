import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='h-[100%]'>
      <div className="flex ml-[10%] mt-3 w-[80%] h-[84%] rounded-3xl bg-[var(--primary-color)]">
        <div className="ml-[10%] hero-right w-[40%]">
          <h2 className='text-5xl gap-y-3  font-bold leading-[55px] '>I am <br/>Saddam Khan</h2>
          <div className="pt-3">
            <p>Transforming Digital Presence with Innovative Web Solutions: Elevating User Experience, Driving Growth, and Delivering Excellence with Strategic Design and Advanced Functionality.! </p>
            <button className='bg-[black] hover:bg-red-600 hover:border border transition-all p-2 rounded-xl text-lg mt-5 w-2/4' >More info</button>
          </div>
        </div>
        <div className="left w-[50%] pt-10">
          
          <img className="lg:ml-48" src="img/home-perfil.png" alt="" width={300} height={300}  />

        </div>
      </div>
    </div>
  )
}

export default Hero
