import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = (props) => {
  const [works, setWorks] = useState([]);

  const [width, setWidth] = useState(1280);
  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const query = '*[_type == "works"] | order(serial asc)';
    client
      .fetch(query)
      .then((data) => {
        setWorks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div {...props}>
      <MotionWrap reverseAnim>
        <div className='head-text'>
          <h2>
            Evidence of my<span> Skills</span>
          </h2>
        </div>
        <div className='app__work-portfolio'>
          {works.map(
            (
              {
                title = '',
                description = '',
                tags = '',
                imgUrls = [],
                imgUrlsM = [],
                projectLink = '#',
                codeLink = '#',
              },
              idx
            ) => (
              <div key={idx} className='item app__flex-center '>
                <div className='item-thumb'>
                  {typeof imgUrlsM === 'object' &&
                  typeof imgUrls === 'object' ? (
                    <img
                      src={urlFor(width > 600 ? imgUrls[0] : imgUrlsM[0])}
                      alt='work thumbnail'
                    />
                  ) : (
                    <p></p>
                  )}
                </div>

                <div className='item-content'>
                  <div className='info'>
                    <h5>Featured Project</h5>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>

                  <div className='tech'>
                    <h4 className='bold-text'>Technology Used</h4>
                    <div className='tags app__flex-center '>
                      {tags.map((tag, idx) => (
                        <p className='tag' key={idx}>
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className='links'>
                    <a href={projectLink} target='_blank' rel='noreferrer'>
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.25 }}
                        className='explore app__flex-center '
                      >
                        <i className="fa-solid fa-up-right-from-square"/>
                        {/* <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path d='M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                        </svg> */}
                      </motion.div>
                    </a>

                    <a href={codeLink} target='_blank' rel='noreferrer'>
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.25 }}
                        className='code app__flex-center'
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </MotionWrap>
    </div>
  );
};

export default Work;
