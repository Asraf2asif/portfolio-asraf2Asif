import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { AppWrap } from './wrapper';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <AppWrap>
        <Header className='app__header app__container' id='home' />
        <About className='app__about app__container app__whitebg' id='about' />
        <Work className='app__work app__container app__primarybg' id='work' />
        <Skills
          className='app__skills app__container app__whitebg'
          id='skills'
        />
        <Testimonial
          className='app__testimonial app__container app__primarybg'
          id='testimonial'
        />
        <Footer className='app__footer app__container' id='footer' />
      </AppWrap>
    </div>
  );
}
export default App;
