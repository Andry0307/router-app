import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Groups from "./components/groups/Groups";
import Students from "./components/students/Students";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route path={`/groups`}>
                  <Groups/>
              </Route>
              <Route path={`/students`}>
                  <Students/>
              </Route>
              <Route path={`/`}>
                  <Home/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
