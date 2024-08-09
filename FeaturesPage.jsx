// import React from 'react'
// import './Footer.css'
// import Footer from './Footer'

// let details=[
//     {
//         para:<h1>Chrome Family</h1>,
//         para1:"Other Platforms",
//         para2:"Chromebooks",
//         para3:"Chromecast",
//     },
//     {
//         para:<h1>Enterprice</h1>,
//         para1:"Other Platforms",
//         para2:"Chromebooks",
//         para3:"Chromecast",
//         para4:"ChromeOS"
//     },
//     {
//         para:<h1>Education</h1>,
//         para1:"Other Platforms",
//         para2:"Chromebooks",
//         para3:"Chromecast",
//     },
//     {
//         para:<h1>Dev and Partners</h1>,
//         para1:"Other Platforms",
//         para2:"Chromebooks",
//         para3:"Chromecast",
//         para4:"ChromeOS"
//     }
// ]

// function Footer1() {
//   return (
//     <>
//     <div id='f'>
//     {details.map(({para,para1,para2,para3,para4})=>{
//         return <Menu para={para} para1={para1} para2={para2} para3={para3} para4={para4}/>
//     })}
//     </div>
//     </>
//   )
// }

// export default Footer1


import React, { useState } from 'react';
import FastFeature from './FastFeature';
import { motion } from 'framer-motion';
import './FeaturesPage.css';

function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState('FAST');

  return (
    <section className="features-section">
      <div className="features-buttons">
        <button
          onClick={() => setSelectedFeature('FAST')}
          className={selectedFeature === 'FAST' ? 'active' : ''}
        >
          FAST
        </button>
      </div>
      <motion.div
        className="feature-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {selectedFeature === 'FAST' && <FastFeature />}
      </motion.div>
    </section>
  );
}

export default FeaturesPage;

