import React from 'react'

const Downloadcv = () => {
  return (
    <div id='downloadcv' className='mb-16'>
        <div className="ml-[10%] mt-3 w-[80%] h-[84%] relative rounded-3xl bg-[hsl(358,2%,10%)]">
            <div className="flex justify-center items-center saddamname w-full h-20 text-4xl">
                <div className="bg-red-600 h-8 w-8 rounded-full mr-2"></div>
                <div className="cvname font-normal">Saddam Khan</div>
            </div>
            <div className="flex content-father w-[100%] h-4/5">
                <div className="cv-left w-[50%] p-7 pr-20 pt-24">
                    <span className='text-xl'>Passionate about creating and designing websites with the best engaging interfaces. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas labore, nihil illo dolorum placeat!</span>
                    <br />
                    <button className='bg-black mt-10 p-3 rounded-full w-4/5 ml-4'>Download CV</button>
                </div>
                <div className="flex justify-center right w-[50%] bg-[var(--primary-color)] rounded-br-3xl">
                   <img src="img/about-perfil.png" alt="" className=' w-80' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Downloadcv
