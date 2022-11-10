import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';
import './Work.scss';
import { variables } from '../../constants';

const { workCatList } = variables;

const handleFilter = (item) => {};

const Work = () => {
  // eslint-disable-next-line
  const [activeFilter, setActiveFilter] = useState('All');
  // eslint-disable-next-line
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  // eslint-disable-next-line
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client
      .fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
      .catch((err) => {
        setWorks([]);
        setFilterWork([]);
      });
  }, []);

  return (
    <div>
      <h2 className='head-text'>
        My creative<span> Portfolio</span>
        <br />
        Section
      </h2>
      <div className='app__work-filter'>
        {workCatList.map((catName, idx) => (
          <div
            key={idx}
            onClick={handleFilter(catName)}
            className={`app__work-filter-item app__flex p-text${
              activeFilter === catName ? ' item-active' : ''
            }`}
          >
            {catName}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map(({ imgUrl = '#' }, idx) => (
          <div key={idx} className='app__work-item app__flex'>
            <div className='img-holder app__flex'>
              <div
                className='img'
                style={{ backgroundImage: `url(${urlFor(imgUrl)})` }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap({ comp: Work, idName: 'work' });
