import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

import Thankyou from './components/Thankyou';
import './css/style.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Login} />

          <Route exact path = "/Thankyou/:username/:comment" component = {Thankyou} />
        </Switch>
      </Router>
    </div>
  );
}