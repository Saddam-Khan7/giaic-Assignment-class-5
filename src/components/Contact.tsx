import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='mb-16'>
        <div className="ml-[10%] mt-3 w-[80%] h-[84%] relative rounded-3xl">
            <div className='service-name flex justify-center pb-10 text-4xl cvname'>
                <h1>Contact Me</h1>
            </div>
            <form action="">
                <div className='w-[100%] justify-between flex'>
                    <input className='w-[48%] bg-[hsl(358,2%,10%)] p-3 text-xl rounded-3xl text-black' type="text" placeholder='Name' name="" id="" />
                    <input className='w-[48%] bg-[hsl(358,2%,10%)] p-3 text-xl rounded-3xl text-black' type="email" placeholder='Email' name="" id="" />
                </div>
                <textarea className='bg-[hsl(358,2%,10%)] w-full mt-5 p-3 text-xl rounded-3xl text-black' placeholder='Message' cols={40} rows={7} name="" id=""></textarea>
                <div className="flex justify-center">
                    <input className='w-1/6 bg-[hsl(358,2%,10%)] transition p-2.5 hover:bg-[hsl(358,80%,49%)] cursor-pointer border-2 rounded-3xl mt-4' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
