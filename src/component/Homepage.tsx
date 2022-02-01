import React from 'react';
import '../App.css';

import Header from './Header';
import ValueProposition from './ValueProposition';
import Footer from './Footer';
import WorkSection from './WorkSection';

function Homepage() {
  return (
    <div className="App">
      <body className='container'>
          <div className='content'>
            <ValueProposition />
            <WorkSection />
          </div>
      </body>
    </div>
  );
}

export default Homepage;
