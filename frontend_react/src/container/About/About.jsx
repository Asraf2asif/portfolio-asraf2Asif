import React, { useEffect, useState } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { MotionWrap } from '../../wrapper';

const About = (props) => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"] | order(serial asc)';
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
            ({ title = '', description = [], imgUrl = '#' }, idx) => (
              <motion.div
                whileInView={{ x: [idx * -50, 0], opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 1,
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
                {description.map((info, idx) => (
                  <p className='p-text' key={idx}>
                    {info}
                  </p>
                ))}
              </motion.div>
            )
          )}
        </div>
      </MotionWrap>
    </div>
  );
};

export default About;
