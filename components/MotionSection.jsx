"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionSection({ children, delay = 0, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionVariants}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
