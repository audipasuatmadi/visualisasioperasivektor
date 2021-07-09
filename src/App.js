import React from 'react';
import './app.css';
import MainMenu from './components/MainMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Aplikasi from './components/Aplikasi';

function App() {
  return (
    <Router basename="/visualisasioperasivektor">
      <div className="overflow-x-hidden">
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>

          <Route path ="/aplikasi">
            <Aplikasi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
