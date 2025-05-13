// components/BlessingMessages.jsx
import React from 'react';
import { motion } from 'framer-motion';

const blessings = [
  "希望小钱超有钱！🤑",
  "希望小钱超幸运! 🍀",
  "希望小钱超快乐! 🎉",
  "生日礼遇：截图领取📸",
  "《🎂请你吃好吃的！》🎁"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // 控制动画持续时间
    },
  },
};

const BlessingMessages = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-8 space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blessings.map((message, index) => (
        <motion.p
            key={index}
            className="text-xl text-orange-400"
            variants={itemVariants}
            >
            {message}
        </motion.p>

      ))}
    </motion.div>
  );
};

export default BlessingMessages;
