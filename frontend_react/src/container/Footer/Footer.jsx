import React, { useState, useRef, useCallback } from 'react';
import { MotionWrap } from '../../wrapper';
import { client } from '../../client';
import emailjs from '@emailjs/browser';
import './Footer.scss';

const {
  REACT_APP_EMAILJS_SERVICE_ID = '',
  REACT_APP_EMAILJS_TEMPLATE_ID = '',
  REACT_APP_EMAILJS_PUBLIC_KEY = '',
} = process.env;

const Footer = (props) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleReMail = (e) => {
    e.preventDefault();
    setIsFormSubmitted(false);
  };

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    setLoading(true);

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        '#form',
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log('SUCCESS!', res.status, res.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );

    client
      .create({ _type: 'contact', ...contactData })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div {...props}>
      <MotionWrap>
        {!isFormSubmitted ? (
          <>
            <div className='head-text'>
              <h2>Contact with us!</h2>
            </div>
            <form
              ref={formRef}
              id='form'
              onSubmit={sendEmail}
              className='app__footer-form app__flex-center'
            >
              <div className='app__flex-center'>
                <label htmlFor='name'>Name</label>
                <input
                  ref={nameRef}
                  className='p-text'
                  type='text'
                  placeholder='Your Name'
                  name='name'
                  id='name'
                />
              </div>
              <div className='app__flex-center'>
                <label htmlFor='email'>Email</label>
                <input
                  ref={emailRef}
                  className='p-text'
                  type='email'
                  placeholder='Your Email'
                  name='email'
                  id='email'
                  required
                />
              </div>
              <div className='app__flex-center'>
                <label htmlFor='message'>Message</label>
                <textarea
                  ref={messageRef}
                  className='p-text'
                  placeholder='Your Message'
                  name='message'
                  id='message'
                  required
                />
              </div>
              <button type='submit' className='p-text'>
                {!loading ? 'Send Mail' : 'Sending...'}
              </button>
            </form>
          </>
        ) : (
          <div className='app__flex-center-col'>
            <h3 className='head-text'>Thank you for getting in touch!</h3>
            <button type='submit' className='p-text' onClick={handleReMail}>
              send another mail
            </button>
          </div>
        )}
      </MotionWrap>
    </div>
  );
};

export default Footer;
