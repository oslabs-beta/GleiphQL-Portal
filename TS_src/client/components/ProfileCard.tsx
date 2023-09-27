
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ProfileCardProps } from '../../types';

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  memberName,
  githubLink,
  linkedinLink,
  memberBio,
}: ProfileCardProps) => {
  // declare variables to assign cypress selectors for testing
  

  return (
    <div className='profile-card'>
      <figure className='image'>
        <img 
          src={imageSrc} 
          alt='Profile' 
          className='w-full h-full rounded'
          data-cy='profile-image'
        />

        <figcaption data-cy='profile-bio' className='image-overlay'>
          {memberBio}
        </figcaption>
      </figure>

      <h3 data-cy='profile-name' className='text-center mt-1 mb-1 text-xl font-bold'>{memberName}</h3>

      <p className='flex justify-center mb-2'>
        <a href={githubLink} target='_blank' rel='noopener noreferrer' className='mr-4' data-cy='github-link'>
          <FaGithub size={48} className='github-icon'/>
        </a>
        <a href={linkedinLink} target='_blank' rel='noopener referrer' data-cy='linkedin-link'>
          <FaLinkedin size={48} className='linkedin-icon'/>
        </a>
      </p>
    </div>
  );
};

export default ProfileCard;