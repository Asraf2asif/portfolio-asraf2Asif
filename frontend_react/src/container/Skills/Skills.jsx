import React, { useState, useEffect, memo } from "react";
import { urlFor, client } from "../../client";
import { MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = memo((props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"] | order(serial asc)';

    client
      .fetch(skillsQuery)
      .then((data) => {
        if (data && data.length > 0) setSkills(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div {...props}>
      <MotionWrap>
        <div className="head-text">
          <h2>
            Notable <span>Skills & Abilities</span>
          </h2>
        </div>

        <div className="app__skills-container">
          <div className="list">
            {skills.map(({ skillsArr = [] }, idx) => (
              <React.Fragment key={idx}>
                {/* <p className='p-text category'>{category}</p> */}
                {skillsArr.map(({ name = "", icon = "" }, idx) => (
                  <div
                    className="list-item app__flex-center"
                    key={`${name}_${idx}`}
                  >
                    {icon !== "" && (
                      <div
                        className="app__flex-center"
                        style={{
                          backgroundImage:
                            typeof icon === "object"
                              ? `url(${urlFor(icon)})`
                              : `url(${icon})`,
                        }}
                      />
                    )}
                    <p className={`p-text ${icon === "" ? " no-icon" : ""}`}>
                      {name}
                    </p>
                  </div>
                ))}
                <div className="list-item-end"></div>
              </React.Fragment>
            ))}
          </div>
          <div className="abilities">
            <div>
              <h3>Soft Skills</h3>
              <ol>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>
                    Creativity, Critical Thinking, and problem-solving skills,
                  </p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>Passion and hunger for excellence,</p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>Always curious, humble, and courageous,</p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>Self-organized and able to work independently,</p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>Open and adaptable to changes and unexpected obstacles,</p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" />{" "}
                  <p>Empathy for customers, co-workers, vendors,</p>
                </li>
                <li>
                  <i className="fa-regular fa-thumbs-up" /> <p>and more...</p>
                </li>
              </ol>
            </div>

            <div>
              <h3>Abilities</h3>
              <ol>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Excellent code reading and writing abilities,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Maintain and improve website and web apps,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Troubleshooting and debugging code,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Write Unit, Integration, and E2E tests,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Diligence and attention to detail,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Strong sense of design theory and typography,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Sketching, creating wireframes, prototyping,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>Ability to learn new language and technology,</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check" />{" "}
                  <p>and more...</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </MotionWrap>
    </div>
  );
});

export default Skills;
