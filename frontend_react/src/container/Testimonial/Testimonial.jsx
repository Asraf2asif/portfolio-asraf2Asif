import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { images } from '../../constants';

const { javascript, css, react, python, sass, git } = images;

const testimonialsDefault = [
  {
    name: 'Javascript',
    company: 'company1',
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit?',
    imgurl: javascript,
  },
  {
    name: 'React',
    company: 'ABC company limited',
    feedback: 'Great work, keep it up',
    imgurl: react,
  },
  { name: 'CSS', company: 'company3', feedback: 'feedback3', imgurl: css },
  {
    name: 'Python',
    company: 'company4',
    feedback: 'feedback4',
    imgurl: python,
  },
  { name: 'SASS', company: 'company5', feedback: 'feedback5', imgurl: sass },
  { name: 'Git', company: 'company6', feedback: 'feedback6', imgurl: git },
];

const brandsDefault = [
  { _id: 1, name: 'Javascript', imgUrl: javascript },
  { _id: 2, name: 'React', imgUrl: react },
  { _id: 3, name: 'CSS', imgUrl: css },
  { _id: 4, name: 'Python', imgUrl: python },
  { _id: 5, name: 'SASS', imgUrl: sass },
  { _id: 6, name: 'Git', imgUrl: git },
];

const Testimonial = (props) => {
  const [curIndex, setCurIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([...testimonialsDefault]);
  const [brands, setBrands] = useState([...brandsDefault]);

  const handleClick = (index) => {
    setCurIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type == "brand"]';

    client
      .fetch(query)
      .then((data) => {
        if (data && data.length > 0) setTestimonials(data);
      })
      .catch((err) => {
        console.log(err);
      });

    client
      .fetch(brandsQuery)
      .then((data) => {
        if (data && data.length > 0) setBrands(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    name: curName = '',
    company: curCompany = '',
    imgurl: curImgurl = '',
    feedback: curFeedback = '',
  } = testimonials[curIndex];

  return (
    <div {...props}>
      <MotionWrap reverseAnim>
        <h2 className='head-text'>Testimonial Section</h2>
        {testimonials.length && (
          <div className='app__flex-center-col'>
            <div className='app__testimonial-item app__flex-center'>
              <div
                className='img'
                style={{
                  backgroundImage:
                    typeof curImgurl === 'object'
                      ? `url(${urlFor(curImgurl)})`
                      : `url(${curImgurl})`,
                }}
              />
              <div className='content'>
                <p className='p-text'>{curFeedback}</p>
                <div>
                  <h4 className='bold-text'>{curName}</h4>
                  <h5 className='p-text'>{curCompany}</h5>
                </div>
              </div>
            </div>

            <div className='app__testimonial-btns app__flex-center'>
              <div
                className='app__flex-center'
                onClick={(e) =>
                  handleClick(
                    curIndex === 0 ? testimonials.length - 1 : curIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className='app__flex-center'
                onClick={() =>
                  handleClick(
                    curIndex === testimonials.length - 1 ? 0 : curIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </div>
        )}

        <div className='app__testimonial-brands app__flex-center'>
          {brands.map(({ _id = 0, name = '', imgUrl = '' }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={_id}
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
            </motion.div>
          ))}
        </div>
      </MotionWrap>
    </div>
  );
};

export default Testimonial;
