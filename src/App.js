import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
