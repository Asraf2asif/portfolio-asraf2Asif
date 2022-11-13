import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ({ children, reverseAnim = false }) => {
  return (
    <motion.div
      whileInView={{
        ...(reverseAnim === true
          ? { y: [-200, -100, 0], x: 0 }
          : { x: [-100, -50, 0], y: 0 }),
        opacity: [0, 0, 1],
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
