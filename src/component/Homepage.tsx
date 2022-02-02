import React, { useEffect } from 'react';
import '../App.css';
import ValueProposition from './ValueProposition';
import WorkSection from './WorkSection';
import { content } from '../content';

function Homepage() {
  useEffect(() => {
    console.log('This is the content of the portfolio ', content[0])
  })
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
