
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ProfileCardProps } from '../../types';

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  memberName,
  githubLink,
  linkedinLink,
  memberBio,
  profileNameSelector,
  profileBioSelector,
  githubLinkSelector,
  linkedinLinkSelector,
}: ProfileCardProps) => {


  return (
    <div className='profile-card'>
      <figure className='image'>
        <img 
          src={imageSrc} 
          alt='Profile' 
          className='w-full h-full rounded'
        />

        <figcaption className='image-overlay'>
          {memberBio}
        </figcaption>
      </figure>

      <h3 className='text-center mt-1 mb-1 text-xl font-bold'>{memberName}</h3>

      <p className='flex justify-center mb-2'>
        <a href={githubLink} target='_blank' rel='noopener noreferrer' className='mr-4'>
          <FaGithub size={48} className='github-icon'/>
        </a>
        <a href={linkedinLink} target='_blank' rel='noopener referrer'>
          <FaLinkedin size={48} className='linkedin-icon'/>
        </a>
      </p>
    </div>
  );
};

export default ProfileCard;