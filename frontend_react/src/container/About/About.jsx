import React, { useEffect, useState } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { MotionWrap } from '../../wrapper';
import { images } from '../../constants';

const { about01, about02, about03, about04, node } = images;

const aboutsDefault = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: about01,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: about02,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: about03,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: about04,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: node,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea voluptatibus quibusdam optio blanditiis maxime nihil odit voluptas at in.',
    imgUrl: about02,
  },
];

const About = (props) => {
  const [aboutData, setAboutData] = useState([...aboutsDefault]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) setAboutData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div {...props}>
      <MotionWrap>
        <h2 className='head-text'>
          I Know that<span> Good Apps</span>
          <br />
          means<span> Good Business</span>
        </h2>
        <div className='app__profiles'>
          {aboutData.map(
            ({ title = '', description = '', imgUrl = '#' }, idx) => (
              <motion.div
                whileInView={{ x: [idx * -100, 0], opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.8,
                  type: 'tween',
                  delay: 0 + idx / 8,
                }}
                className='app__profiles-item'
                key={title + idx}
              >
                <div
                  className='img'
                  style={{
                    backgroundImage:
                      typeof imgUrl === 'object'
                        ? `url(${urlFor(imgUrl)})`
                        : `url(${imgUrl})`,
                  }}
                />
                <h2 className='bold-text'>{title}</h2>
                <p className='p-text'>{description}</p>
              </motion.div>
            )
          )}
        </div>
      </MotionWrap>
    </div>
  );
};

export default About;
