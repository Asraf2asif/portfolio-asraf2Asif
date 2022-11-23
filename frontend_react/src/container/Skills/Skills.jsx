import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = memo((props) => {
  const [skills, setSkills] = useState([]);
  // const [experiences, setExperiences] = useState([...expDefault]);

  useEffect(() => {
    // const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client
      .fetch(skillsQuery)
      .then((data) => {
        if (data && data.length > 0) setSkills(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // client
    //   .fetch(expQuery)
    //   .then((data) => {
    //     if (data && data.length > 0) setExperiences(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div {...props}>
      <MotionWrap>
        <h2 className='head-text'>Skills & Abilities</h2>

        <div className='app__skills-container'>
          <div className='list'>
            {skills.map(({ skillsArr = [] }, idx) => (
              <>
                {/* <p className='p-text category'>{category}</p> */}
                {skillsArr.map(({ name = '', icon = '#' }, idx) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='list-item app__flex-center'
                    key={`${name}_${idx}`}
                  >
                    <div
                      className='app__flex-center'
                      style={{
                        backgroundImage:
                          typeof icon === 'object'
                            ? `url(${urlFor(icon)})`
                            : `url(${icon})`,
                      }}
                    ></div>
                    <p className='p-text'>{name}</p>
                  </motion.div>
                ))}
                <div className='list-item-end'></div>
              </>
            ))}
          </div>
          {/* <div className='exp'>
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
          </div> */}
        </div>
      </MotionWrap>
    </div>
  );
});

export default Skills;
