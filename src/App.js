import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import PeopleDetails from './PeopleDetails';
import Error404 from './Error404';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/people/:id'>
              <PeopleDetails />
            </Route>
            <Route path='*'>
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
