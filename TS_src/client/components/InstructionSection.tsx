import notify from '../helper-functions/notify';
import { Element } from 'react-scroll';
import { Slide, Fade } from 'react-awesome-reveal';


const InstructionSection = () => {

  // to copy npm install scripts upon user's click
  const copyText = async (elementId : string) : Promise<void> => {
    let text: string | undefined = document.getElementById(elementId)?.innerText;
    try {
      if(text) await navigator.clipboard.writeText(text);
      notify('Copied!');
    } catch (err: unknown) {
      if(err instanceof Error) console.log(err.message);
      else console.log('unknown error');
    }
  }
  return (
    <>
      <Element name='get-started'>
        <section id='get-started' className='min-h-screen p-12 text-center flex flex-col justify-evenly items-center lg:flex-row'>
          <div className='md:w-1/2'>
            <Slide>
              <h2
                data-cy='instruction-title'
                className='text-5xl font-extrabold p-2 mb-10'>
                  Get Started Easily
              </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p data-cy='instruction-body' className='pb-14 text-2xl'>
                Ready to revolutionize your GraphQL endpoint?
                Take the first step towards a faster, smarter,
                and more secure API infrastructure.
              </p>
              <a
                data-cy='moreInfo-btn'
                href='https://github.com/oslabs-beta/GleiphQL' 
                target='_blank' 
                className='rounded-md border text-white bg-blue-950 hover:bg-blue-900 font-semibold p-4 m-4 w-32 '
              >
                More Info
              </a>
            </Fade>
          </div>
          <Fade delay={2e3} cascade damping={1e-1}>
            <div>
              <dl className='grid place-items-center md:w-1/2'>
                <dt className='p-2'>npm: </dt>
                <dd className='w-60 border rounded-lg border-solid border-blue-950 flex flex-row justify-between'>
                  <p className='p-4' id='npm'>
                    npm install gleiphql
                  </p>
                  <button 
                    id='npmCopy-btn'
                    className='border-none w-fit pr-2' 
                    onClick={() : Promise<void> => copyText('npm')}>
                    <span className='material-symbols-outlined'>content_copy</span>
                  </button>
                </dd>
                <dt className='p-2'>Or yarn: </dt>
                <dd className='w-60 border rounded-lg border-solid border-blue-950 flex flex-row justify-between'>
                  <p className='p-4' id='yarn'>
                    yarn add gleiphql
                  </p>
                  <button
                    id='yarnCopy-btn'
                    className='border-none w-fit pr-2' 
                    onClick={() : Promise<void> => copyText('yarn')}>
                    <span className='material-symbols-outlined'>content_copy</span>
                  </button>
                </dd>
              </dl>
            </div>
          </Fade>
        </section>
      </Element>
    </>
    
  );
}

export default InstructionSection; 