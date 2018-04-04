import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';

const App = () => (
  <Router>
    <div>
      <Route path='/' component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;
