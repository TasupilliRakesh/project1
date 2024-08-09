import React from 'react';
import { motion } from 'framer-motion';
import './FastFeature.css';

function FastFeature() {
  return (
    <motion.div
      className="fast-feature"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Fast Browsing</h2>
      <p>Chrome is designed to be fast in every possible way.</p>
      <img src="/assets/fast.png" alt="Fast" />
    </motion.div>
  );
}

export default FastFeature;
