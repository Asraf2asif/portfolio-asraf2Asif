import React from 'react';
import './Header.scss';
import { MdWavingHand } from 'react-icons/md';
import { motion } from 'framer-motion';
import { images, variables } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const { headCircleList } = variables;
const { circle: circleImg } = images;

const Header = () => {
  return (
    <header id='home' className='app__header app__flex-center'>
      <motion.div
        whileInView={{
          x: [-100, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='badge'>
          <div className='badge-cmp app__flex-center'>
            <span>
              <MdWavingHand />
            </span>
            <div>
              {' '}
              {/*  margin left 20 */}
              <p className='p-text'>Hello, I am</p>
              <p className='head-text'>Asif</p>
            </div>
          </div>

          <div className='tag-cmp app__flex-center'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <div className="img"/>
        <motion.img
          whileInView={{
            scale: [0, 1],
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={circleImg}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {headCircleList.map((headCircleImg, idx) => (
          <div className='circle-cmp app__flex-center' key={`circle-${idx}`}>
            <img src={headCircleImg} alt={`circle-${headCircleImg}`} />
          </div>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
