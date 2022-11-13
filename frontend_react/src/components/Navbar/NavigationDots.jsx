import React from 'react';
import './NavigationDots.scss';
import { variables } from '../../constants';

const { menuList } = variables;

const NavigationDots = () => {
  return (
    <div className='app__navigation'>
      {menuList.map((item, idx) => (
        <a href={`#${item}`} key={item + idx} className='app__navigation-dot'>
          <p>{item}</p>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
