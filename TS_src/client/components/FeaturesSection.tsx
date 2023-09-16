import { ReactElement, FC, useState } from 'react';
import monitoringGif from '../../images/dashboard-gif.gif';
import apolloGif from '../../images/apollo-server-gif.gif';
import { FcBullish, FcFinePrint, FcLineChart, FcStatistics, FcClearFilters, FcExpired } from 'react-icons/fc';
import { SiApollographql } from 'react-icons/si';
import { Element } from 'react-scroll';
import { Slide, Fade } from 'react-awesome-reveal';


const FeaturesSection = () => {
  
  return (
    <>
      <Element name='features'>
        <div id='features' className='featuresSection-bg flex flex-col justify-center items-center px-5 py-10'>
          <Slide>
            <h2 data-cy='features-title' className='text-5xl font-extrabold mb-10'>Features</h2>
          </Slide>
          <div>
            <Fade delay={1e3} cascade damping={1e-1}>
              <section className='p-4 lg:p-8  text-gray-100 rounded-md'>
                <div className='container mx-auto space-y-12'>
                  <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse items-center text-neutral-900'>
                    <img data-cy='gif-monitoring' src={monitoringGif} alt='' className='h-[360px] w-[640] bg-gray-500 aspect-video border-solid border-2 border-neutral-900 mb-6' />
                    <div className='flex flex-col '>
                      {/* First feature */}
                      <h3 data-cy='monitoring-section' className='text-3xl font-bold'>Monitoring</h3>
                      <div className='flex flex-row justify-center flex-1 p-6'>
                        <FcFinePrint className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature1' className='my-1 dark:text-gray-200'>User friendly dashboard to add additional endpoints and to navigate insightful metrics.</p>
                      </div>
                      
                      {/* second feature */}
                      <div className='flex flex-row justify-center flex-1 p-6'>
                        <FcLineChart className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature2' className='my-1 dark:text-gray-200'>An analysis of the most frequently called API endpoints and a display of request trends over different time frames.</p>
                      </div>

                      {/* third feature */}
                      <div className='flex flex-row justify-center flex-1 p-6  text-neutral-900 '>
                        <FcStatistics className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature3' className='my-1 dark:text-gray-200'>A table to represent query metrics, including query text, depth, and complexity score.</p>
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row items-center text-neutral-900'>
                    <img data-cy='gif-complexity-scores' src={apolloGif} alt='' className='h-[360px] w-[640] bg-gray-500 aspect-video mb-6' />
                    <div className='flex flex-col'>
                      {/* Fourth feature */}
                      <h3 data-cy='rate-limiting-section' className='text-3xl font-bold'>Rate Limiting</h3>
                      <div className='flex flex-row justify-center flex-1 p-6'>
                        <FcClearFilters className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature4' className='my-1 dark:text-gray-200'>Swiftly computes complexity scores pre-execution based on user-defined costs and list-sizes exposed in the schema definition directives.</p>
                      </div>
                      
                      {/* Fifth feature */}
                      <div className='flex flex-row justify-center flex-1 p-6 text-neutral-900'>
                        <FcExpired className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature5' className='my-1 dark:text-gray-200'>Effortless customization that allows the user to configure rate limiting rules, ensuring optimal control and flexibility over API usage limits.</p>
                      </div>
                      
                      {/* Sixth feature */}
                      <div className='flex flex-row justify-center flex-1 p-6 text-neutral-900'>
                        <SiApollographql className='h-12 w-12 mr-3 flex-shrink-0'/>
                        <p data-cy='feature6' className='my-1 dark:text-gray-200'>Seamlessly integrates with Apollo Client and Server, offering smooth integration with existing Apollo-powered architecture.</p>
                      </div>
                      
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