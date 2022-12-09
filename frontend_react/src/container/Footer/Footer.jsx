import React, { useState, useRef, useCallback } from "react";
import { MotionWrap } from "../../wrapper";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Footer.scss";
import { variables } from "../../constants";

const { accountsList, bioData } = variables;

const {
  REACT_APP_EMAILJS_SERVICE_ID = "",
  REACT_APP_EMAILJS_TEMPLATE_ID = "",
  REACT_APP_EMAILJS_PUBLIC_KEY = "",
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
        "#form",
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.status, res.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    client
      .create({ _type: "contact", ...contactData })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div {...props}>
      <MotionWrap reverseAnim>
        <div className="topPart">
          <div className="bio">
            <div className="logo">
              <img src={bioData.logo} alt="logo" />
            </div>
            <p>{bioData.textPart1}</p>
            <p>{bioData.textPart2}</p>

            <div className="info">
              {bioData.info.map(
                (
                  {
                    name = "",
                    textPart1: { linkPart1: link1 = "", text: text1 = "" },
                    textPart2: { linkPart1: link2 = "", text: text2 = "" },
                    icon: { src, type },
                  },
                  idx
                ) => (
                  <div key={`${name}_${idx}_bio`} className="group">
                    {type === "font" ? (
                      <i className={src} />
                    ) : (
                      <img src={src} alt={name} />
                    )}
                    <div className="text">
                      {link1 === "" ? (
                        <>
                          <p>{text1},</p>
                          <p>{text2}</p>
                        </>
                      ) : (
                        <>
                          <a
                            key={name}
                            href={link1 + text1}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <p>{text1},</p>
                          </a>
                          <a
                            key={name}
                            href={link2 + text2}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <p>{text2}</p>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="contact">
              <h3>Let’s Work Together!</h3>
              <form ref={formRef} id="form" onSubmit={sendEmail}>
                <div className="form-group">
                  <div className="form-control">
                    <label htmlFor="name">Name</label>

                    <i className="fa-solid fa-user" />

                    <input
                      ref={nameRef}
                      className="p-text"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <i className="fa-solid fa-at" />

                    <input
                      ref={emailRef}
                      className="p-text"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-control" id="message">
                    <label htmlFor="message">Message</label>
                    <i className="fa-solid fa-message" />
                    <textarea
                      ref={messageRef}
                      className="p-text"
                      placeholder="Your Message"
                      name="message"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="p-text">
                  <p>{!loading ? "Connect US" : "Sending..."}</p>
                  <div className="icon">
                    <i className="fa-solid fa-paper-plane" />
                  </div>
                </button>
              </form>
            </div>
          ) : (
            <div className="contact confirmation">
              <h3 className="head-text">Thank you for getting in touch!</h3>
              <button type="submit" onClick={handleReMail}>
                <p>Show contact form</p>
              </button>
            </div>
          )}
        </div>
        <div className="accounts">
          {accountsList.map(
            (
              {
                name = "",
                linkPart1 = "",
                linkPart2 = "",
                icon: { src, type },
              },
              idx
            ) => (
              <a
                key={name + idx + "ac"}
                href={linkPart1 + linkPart2}
                target="_blank"
                rel="noreferrer"
              >
                {type === "font" ? (
                  <i className={src} />
                ) : (
                  <img src={src} alt={name} />
                )}
                <div className="text">
                  <p className="name">{name}</p>
                  <p className="urlPart">{linkPart2}</p>
                </div>
              </a>
            )
          )}
        </div>
      </MotionWrap>
    </div>
  );
};

export default Footer;
