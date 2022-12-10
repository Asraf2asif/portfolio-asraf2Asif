import React, { useState } from "react";
import "./Navbar.scss";
import { images, variables } from "../../constants";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const { menuList } = variables;
const { logo: logoImg } = images;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="/" className="app__navbar-logo">
        <img src={logoImg} alt="logo" />
      </a>

      <ul className="app__navbar-links">
        {menuList.map((item) => (
          <li className="app__flex-center p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-small">
        <FaBars onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{
              x: [150, 0],
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuList.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
