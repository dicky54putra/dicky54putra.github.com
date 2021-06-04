import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/style.scss';

import Home from 'pages/Home'
import About from 'pages/About';
import Portofolio from 'pages/Portofolio';
import Resume from 'pages/Resume';
function App() {

  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home} ></Route>
            <Route path='/about' component={About} ></Route>
            <Route path='/portofolio' component={Portofolio} ></Route>
            <Route path='/resume' component={Resume} ></Route>
            <Route component={Home} ></Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
