import React from 'react';
import { motion } from 'framer-motion';

const Cake = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 1 }}
      className="text-[10rem]"
    >
      🎂
    </motion.div>
  );
};

export default Cake;
