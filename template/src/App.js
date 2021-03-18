require('dotenv').config();
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
const Home = lazy(() => import('./pages/Home/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch/NoMatch'));

import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home />
          </Route>

          {/* 404 page not found route ( any routes not matching go here ) */}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
