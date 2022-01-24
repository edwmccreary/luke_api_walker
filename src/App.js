import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom";
import Search from './components/Search';
import Results from './views/Results';
import NotFound from './views/NotFound';
import People from './views/People';
import Planet from './views/Planet';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Search/>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/people/:identifier">
            <People/>
          </Route>
          <Route path="/planets/:identifier">
            <Planet/>
          </Route>
          <Route path="/not_found">
            <NotFound/>
          </Route>
          <Route path="/:category/:identifier">
            <Results />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
