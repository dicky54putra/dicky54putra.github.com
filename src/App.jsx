import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/scss/style.scss";

import Home from "pages/Home";
import AboutMe from "pages/AboutMe";
import Article from "pages/Article";
import Portfolio from "pages/Portfolio";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/about-me" component={AboutMe}></Route>
          <Route path="/article" component={Article}></Route>
          <Route component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
