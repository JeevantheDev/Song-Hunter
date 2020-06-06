import React, { Fragment } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Songs from './Components/Songs';

function App() {
  return (
    <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/search/:name" exact component={Songs} />
          </Switch>
          <Footer />
        </Fragment>
    </Router>
  );
}


export default App;
