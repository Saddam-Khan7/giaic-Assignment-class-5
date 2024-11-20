import React from 'react'

const Servicess = () => {
  return (
    <div id='service' className='mb-16'>
        <div className="ml-[10%] mt-3 w-[80%] h-[84%] relative rounded-3xl">
            <div className="service-name flex justify-center pb-10 text-4xl cvname">
                <span>SERVICES I OFFER</span>
            </div>
            <div className="flex gap-4 justify-center contect-service">
                <article className="services__card">
                  <div className="services__icon flex justify-center p-8">

                    <img src="/coding.png" alt="" className='text-white' />
                     
                  </div>

                  <h3 className="services__name">Web Development</h3>
                  <p className="services__description">
                  We create functional, responsive websites tailored to your needs, ensuring seamless performance and user experience.
                  </p>
                </article>

                <article className="services__card">
                  <div className="services__icon flex justify-center p-8">

                    <img src="/illustration.png" alt="" className='text-white' />
                     
                  </div>

                  <h3 className="services__name">Web Design</h3>
                  <p className="services__description">
                  We craft visually appealing, user-friendly designs to enhance your website's aesthetics and user engagement.
                  </p>
                </article>

                <article className="services__card">
                  <div className="services__icon flex justify-center p-8">

                    <img src="/Ad-pop-up.png" alt="" className='text-white' />
                     
                  </div>

                  <h3 className="services__name">Seo (Web Pages)</h3>
                  <p className="services__description">
                  Optimize your web pages for higher search rankings, increased traffic for your web, and improved online visibility effectively.
                  </p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Servicess
