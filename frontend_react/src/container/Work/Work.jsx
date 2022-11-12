import React, { useEffect, useState, useCallback } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';
import './Work.scss';
import { variables } from '../../constants';

const { workCatList } = variables;
const activeFilterAll = 'All';
const animateCardState = [
  { y: 0, opacity: 1 },
  { y: 100, opacity: 0 },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState(activeFilterAll);
  const [animateCard, setAnimateCard] = useState([animateCardState[0]]);
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
        console.log(err);
      });
  }, []);

  const handleFilter = useCallback(
    (item) => {
      setActiveFilter(item);
      setAnimateCard([animateCardState[1]]);
      setTimeout(() => {
        setAnimateCard([animateCardState[0]]);
        if (item === activeFilterAll) {
          setFilterWork(works);
        } else {
          setFilterWork(works.filter((work) => work.tags.indexOf(item) !== -1));
        }
      }, 500);
    },
    [works]
  );

  return (
    <div className='app__work'>
      <h2 className='head-text'>
        My creative<span> Portfolio</span>
        <br />
        Section
      </h2>
      <div className='app__work-filter'>
        {workCatList.map((catName, idx) => (
          <div
            key={idx}
            onClick={() => handleFilter(catName)}
            className={`item app__flex-center p-text${
              activeFilter === catName ? ' active' : ''
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
        {filterWork.map(
          (
            {
              title = '',
              description = '',
              tags = '',
              imgUrl = '#',
              projectLink = '#',
              codeLink = '#',
            },
            idx
          ) => (
            <div key={idx} className='item app__flex-center '>
              <div className='item-thumb app__flex-center '>
                <div
                  className='img'
                  style={{ backgroundImage: `url(${urlFor(imgUrl)})` }}
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='item-thumb-hover app__flex-center '
                >
                  <a href={projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='explore app__flex-center '
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='code app__flex-center'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='item-content app__flex-center '>
                <h4 className='bold-text'>{title}</h4>
                <p className='p-text'>{description}</p>

                <div className='tag app__flex-center '>
                  <p className='p-text'>{tags[0]}</p>
                </div>
              </div>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap({ comp: Work, idName: 'work' });
