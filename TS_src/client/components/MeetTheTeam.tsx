import ProfileCard from './ProfileCard';
import { Element } from 'react-scroll';
import { ProfileCardProps } from '../../types';
import { Slide, Fade } from 'react-awesome-reveal';
import JDong from '../../images/JDong.png'
import ALarkin from '../../images/ALarkin.jpg';
import KPhan from '../../images/KPhan.jpg';
import YYoon from '../../images/YYoon.jpg';


const profileCards: ProfileCardProps[] = [
  {
    imageSrc: JDong,
    memberName: 'Jiecheng Dong',
    githubLink: 'https://github.com/jiedong111',
    linkedinLink: 'https://www.linkedin.com/in/jiecheng-dong-1522b8248/',
    memberBio: 'Enjoys learning new things, the more esoteric and inapplicable the better. Likes drawing in his spare time.'
  },
  {
    imageSrc: ALarkin,
    memberName: 'Andrew Larkin',
    githubLink: 'https://github.com/larkinaj',
    linkedinLink: 'https://www.linkedin.com/in/andrew-larkin-71395940/',
    memberBio: 'Passionate about creating solutions with code. A dedicated problem solver with unwavering attention to detail.'
  },
  {
    imageSrc: KPhan,
    memberName: 'Kevin Phan',
    githubLink: 'https://github.com/KP824',
    linkedinLink: 'https://www.linkedin.com/in/kp824/',
    memberBio: 'Always striving for personal growth in learning and communication. I enjoy casually indulging in chess and hiking outside of coding.'
  }, 
  {
    imageSrc: YYoon,
    memberName: 'Yeong Sil Yoon',
    githubLink: 'https://github.com/wendyys96',
    linkedinLink: 'https://www.linkedin.com/in/yeong-sil-yoon/',
    memberBio: 'I like reading novels in my free time. Currently interested in Japanese mystery novels.'
  }
];

const MeetTheTeam = () => {

  return (
    <>
      <Element name='meet-team'>
        <section id='meet-team' className='meetTheTeam-bg min-h-screen flex flex-col justify-center items-center p-10'>
          <Slide>
            <h2 className='text-5xl font-extrabold mb-10'>Meet the Team</h2>
          </Slide>
          <Fade delay={1e3} cascade damping={1e-1}>
            <div className='flex flex-wrap justify-center'>
              {
                profileCards.map((profile : ProfileCardProps) => {
                  const { imageSrc, memberName, githubLink, linkedinLink, memberBio } = profile;
                  return <ProfileCard
                  key = {memberName}
                  imageSrc = {imageSrc}
                  memberName = {memberName}
                  githubLink = {githubLink}
                  linkedinLink = {linkedinLink}
                  memberBio = {memberBio}
                  />
                })
              }
            </div>
          </Fade>
        </section>
      </Element>
    </>
  );
};

export default MeetTheTeam;