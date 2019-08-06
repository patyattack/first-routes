import React from 'react';
import { LandingPage } from './landing.page';
import {Route, Switch } from 'react-router-dom';
import {AppLayout} from './app.layout';
import {ProtectedRoute} from './protected.route';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>holanda protected</h1>
     <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"}/>
      </Switch>
    </div>
  );
}

export default App;
