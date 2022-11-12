import React, { useEffect, useState } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => setAboutData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I Know that<span> Good Apps</span>
        <br />
        means<span> Good Business</span>
      </h2>
      <div className='app__profiles'>
        {aboutData.map(
          ({ title = '', description = '', imgUrl = '#' }, idx) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profiles-item'
              key={title + idx}
            >
              <div
                className='img'
                style={{ backgroundImage: `url(${urlFor(imgUrl)})` }}
              />
              <h2 className='bold-text'>{title}</h2>
              <p className='p-text'>{description}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

const MotionWraped = MotionWrap({ comp: About, classes: 'app__about' });
const AppWraped = AppWrap({
  comp: MotionWraped,
  idName: 'about',
  classes: 'app__whitebg',
});
export default AppWraped;
