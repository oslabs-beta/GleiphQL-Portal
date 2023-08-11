import { ReactElement, FC, useState } from 'react';
import monitoringGif from '../../images/dashboard-gif.gif';
import apolloGif from '../../images/apollo-server-gif.gif';
import { FcMoneyTransfer, FcPaid, FcBullish } from 'react-icons/fc';
import { Element } from 'react-scroll';
import { Slide, Fade } from 'react-awesome-reveal';


const FeaturesSection = () => {
  
  return (
    <>
      <Element name='features'>
        <div className='featuresSection-bg flex flex-col justify-center items-center px-5 py-10'>
            <Slide>
              <h2 data-cy='features-title' className='text-5xl font-extrabold mb-10'>Features</h2>
            </Slide>
          <div>
            <Fade delay={1e3} cascade damping={1e-1}>
              <section className='p-4 lg:p-8  text-gray-100 rounded-md'>
                <div className='container mx-auto space-y-12'>
                  <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
                    <img src={monitoringGif} alt='' className='h-[360px] w-[640] bg-gray-500 aspect-video border-solid border-2 border-neutral-900' />
                    <div className='flex flex-col justify-center flex-1 p-6  text-neutral-900 '>
                      <div className='flex justify-center'>
                        <FcMoneyTransfer className='h-12 w-12'/>
                        <FcPaid className='h-12 w-12'/>
                      </div>
                      <h3 className='text-3xl font-bold'>Monitoring</h3>
                      <p className='my-6 dark:text-gray-200'>Gain deep visibility into your API's usage patterns, track response times, monitor error rates, and optimize your system's performance.</p>
                    </div>
                  </div>
                  <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
                    <img src={apolloGif} alt='' className='h-[360px] w-[640] bg-gray-500 aspect-video' />
                    <div className='flex flex-col justify-center flex-1 p-6 text-neutral-900'>
                      <div className='flex justify-center'>
                        <FcBullish className='h-12 w-12'/>
                      </div>
                      <h3 className='text-3xl font-bold'>Apollo Compatability</h3>
                      <p className='my-6 dark:text-gray-200'>Our feature seamlessly integrates with Apollo Client and Server, offering you smooth integration with your existing Apollo-powered architecture</p>
                    </div>
                  </div>
                </div>
              </section>
            </Fade>
          </div>
          
        </div>
      </Element>
    </>
  )
}

export default FeaturesSection;