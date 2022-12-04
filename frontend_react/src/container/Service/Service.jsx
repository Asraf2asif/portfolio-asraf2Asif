import React, { useEffect, useState } from 'react';
import './Service.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { MotionWrap } from '../../wrapper';

const Service = (props) => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "services"] | order(serial asc)';
    client
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) setServiceData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div {...props}>
      <MotionWrap>
        <div className='head-text'>
          <h2>
            <span> Outstanding </span>Service
            <br />
            for your<span> Dream project</span>
          </h2>
        </div>
        <div className='app__profiles'>
          {serviceData.map(
            (
              { title = '', description = [], imgUrl = '#', color = '' },
              idx
            ) => (
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
                style={{
                  ...(color !== '' && {
                    borderColor: 'rgba(' + color + ',.5)',
                  }),
                }}
              >
                <div
                  className='img-holder'
                  style={{
                    ...(color !== '' && {
                      borderColor: 'rgba(' + color + ',.5)',
                    }),
                  }}
                >
                  <div
                    className='img'
                    style={{
                      backgroundImage:
                        typeof imgUrl === 'object'
                          ? `url(${urlFor(imgUrl)})`
                          : `url(${imgUrl})`,
                      ...(color !== '' && {
                        backgroundColor: 'rgb(' + color + ')',
                      }),
                    }}
                  />
                </div>
                <h2
                  style={{
                    ...(color !== '' && {
                      color: 'rgb(' + color + ')',
                      borderBottomColor: 'rgba(' + color + ',.5)',
                    }),
                  }}
                >
                  {title}
                </h2>
                {description.map((info, idx) => (
                  <p key={idx}>
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

export default Service;
