import React from 'react';
import './NavigationDots.scss';
import { variables } from '../../constants';

const { menuList } = variables;

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {menuList.map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className={`app__navigation-dot${active === item ? ' active' : ''}`}
        >
          <p>{item}</p>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
