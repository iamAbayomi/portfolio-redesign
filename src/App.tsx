import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Links from './component/Links';
import ValueProposition from './component/ValueProposition';
import WorkSection from './component/WorkSection';
import PortfolioPage from './component/portfolio/PortoflioPage';
import Homepage from './component/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
        <Links/>
      <div className='container'>
          <Header />
          <div className='content'>
              <Switch>
                <Route  exact path="/" component={Homepage} />
                <Route path="/work/:workid" component={PortfolioPage}  />
              </Switch>
              <Footer/>
          </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
