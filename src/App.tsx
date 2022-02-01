import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Links from './component/Links';
import ValueProposition from './component/ValueProposition';
import WorkSection from './component/WorkSection';

function App() {
  return (
    <div className="App">
      <head>
        <Links/>
      </head>
      <body className='container'>
          <Header />
          <div className='content'>
              <ValueProposition />
              <WorkSection />
              <Footer/>
          </div>
      </body>
    </div>
  );
}

export default App;
