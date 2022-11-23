import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://github.com/Asraf2asif' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a href='https://github.com/Asraf2asif' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a
        href='mailto:client.asraf2asif@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialMedia;
