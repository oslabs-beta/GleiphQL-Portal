import { Element } from 'react-scroll';
import gleiphQLLogo from '../../images/GleiphQL-Logo.png';


const IntroSection = () => {

  return (
    <>
      <Element name='intro'>
        <section id='intro' className='introsection min-h-screen pb-20 pr-8 flex flex-col lg:flex-row justify-around items-center'>
          <div className='flex-col py-4 pr-4 text-center lg:w-1/2 ml-20'>
            <h2 data-cy='intro-title' className='text-5xl font-extrabold py-2 text-left mb-10'>Protect and monitor your GraphQL Endpoints</h2>
            <p data-cy='intro-body' className='text-xl text-left pb-8'>
              GleiphQL is an Express middleware library which enhances performance
              and security by calculating query complexity, optimizing resource
              allocation, and preventing bottlenecks.
            </p>
            <a
              className='rounded-md border text-white bg-blue-950 hover:bg-blue-900 font-semibold p-4 w-32'
              href='#features'
            >
              Start Exploring
            </a>
          </div>
          <div className='w-full lg:w-1/2 mt-8'>
            <img className='object-center m-auto max-h-[420px] max-w-[420px]' src={gleiphQLLogo} alt='main-logo'/>
          </div>
        </section>
      </Element>
    </>
  );
}

export default IntroSection; 