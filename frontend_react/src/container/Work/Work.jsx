import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = (props) => {
  const [works, setWorks] = useState([]);

  const [width, setWidth] = useState(0);
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
                      src={urlFor(width < 600 ? imgUrlsM[0] : imgUrls[0])}
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
                        <AiFillEye />
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
