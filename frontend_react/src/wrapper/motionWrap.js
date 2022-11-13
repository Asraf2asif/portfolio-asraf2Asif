import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ({ comp: Comp, classes, reverseAnim = false }) =>
  function HOCMotion() {
    return (
      <motion.div
        whileInView={{
          ...(reverseAnim === true
            ? { y: [-200, -100, 0] }
            : { x: [-100, -50, 0] }),
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
        className={`${classes} app__flex`}
        style={{ marginTop: '30px', minHeight: '1vh' }}
      >
        <Comp />
      </motion.div>
    );
  };

export default MotionWrap;
