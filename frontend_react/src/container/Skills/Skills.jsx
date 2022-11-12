import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { images } from '../../constants';

const { javascript, css, react, python, sass, git } = images;

const skillsDefault = [
  { name: 'Javascript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'CSS', icon: css },
  { name: 'Python', icon: python },
  { name: 'SASS', icon: sass },
  { name: 'Git', icon: git },
];

const expDefault = [
  {
    year: '2022',
    works: [
      {
        name: 'elit. Ullam reprehenderit',
        company: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        desc: 'delectus repellendus sapiente nostrum dolorem!',
      },
      {
        name: 'elit. Ullam reprehenderit',
        company: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        desc: 'delectus repellendus sapiente nostrum dolorem!',
      },
      {
        name: 'elit. Ullam reprehenderit',
        company: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        desc: 'delectus repellendus sapiente nostrum dolorem!',
      },
    ],
  },
  {
    year: '2021',
    works: [
      {
        name: 'elit. Ullam reprehenderit',
        company: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        desc: 'delectus repellendus sapiente nostrum dolorem!',
      },
      {
        name: 'elit. Ullam reprehenderit',
        company: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        desc: 'delectus repellendus sapiente nostrum dolorem!',
      },
    ],
  },
  { year: '2019', works: [{ name: 'ijk', company: '56', desc: 'V VI' }] },
];

const Skills = memo(() => {
  const [skills, setSkills] = useState([...skillsDefault]);
  const [experiences, setExperiences] = useState([...expDefault]);

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client
    //   .fetch(skillsQuery)
    //   .then((data) => {
    //     setSkills(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // client
    //   .fetch(expQuery)
    //   .then((data) => {
    //     setExperiences(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className='app__skills'>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='list'>
          {skills.map(({ name = '', bgColor = '#fff', icon = '#' }, idx) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='list-item app__flex-center'
              key={`${name}_${idx}`}
            >
              <div
                className='app__flex-center'
                style={{ backgroundColor: bgColor }}
              >
                <img src={icon} alt={name} />
                {/* <img src={urlFor(icon)} alt={name} /> */}
              </div>
              <p className='p-text'>{name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='exp'>
          {experiences.map(({ year = 2022, works = [] }, idx) => (
            <motion.div className='exp-item' key={`${year}_${idx}`}>
              <div className='exp-item-year'>
                <p className='bold-text'>{year}</p>
              </div>
              <motion.div className='exp-item-works'>
                {works.map(({ name = '', company = '', desc = '' }) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='work'
                      data-tip
                      data-for={name}
                      key={`${name}_${idx}`}
                    >
                      <h4 className='bold-text'>{name}</h4>
                      <p className='p-text'>{company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AppWrap({ comp: Skills, idName: 'skills' });
