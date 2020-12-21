import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom'

import Vod from './views/Vod'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Vod></Vod>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
