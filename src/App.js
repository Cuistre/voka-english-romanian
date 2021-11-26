// Libraries
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import { NavLink } from 'react-router-dom';

// Components
import Fill from './Components/Fill';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md sticky-top" id="menu">
        <div className="container">
          <div className="navbar-brand">
            VOKA
          </div>

          <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#monMenuDeroulant">
            <span className="navbar-toggler-icon"></span>
          </div>

          <div className="collapse navbar-collapse" id="monMenuDeroulant">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a href="#accueil" className="nav-link">Renseigner</a> */}
                <NavLink exact to={routes.FILL} className="nav-link">Renseigner</NavLink>
              </li>
              <li className="nav-item">
                {/* <a href="#contact" className="nav-link">Réviser</a> */}
                <NavLink exact to={routes.WORK} className="nav-link">Réviser</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path={routes.FILL} component={Fill} />
        <Route path={routes.WORK} component={Work} />
      </Switch>

    </div>
  );
}

export default App;
