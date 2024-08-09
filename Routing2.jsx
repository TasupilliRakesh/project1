// import React from 'react'
// import Home from './Home'
// import The_Browser_By_Google from './The_Browser_By_Google'
// import Features from './Features'
// import Support from './Support'
// import Nav from './Nav'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import Footer from './components/Footer';
import './Routing2.css';

function Routing2() {
  // return (
  //   <div>
  //       <h1>React Routing</h1>
      
  //     <BrowserRouter>
  //           <Nav/>
  //           <Routes>
  //               <Route path="/home" element={<Home/>}/>
  //               <Route path="/the browser by google" element={<The_Browser_By_Google/>}/>
  //               <Route path="/features" element={<Features/>}/>
  //               <Route path="/support" element={<Support/>}/>
  //           </Routes>
  //     </BrowserRouter>
      
  //   </div>
  // )
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing2



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import FeaturesPage from './components/FeaturesPage';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;