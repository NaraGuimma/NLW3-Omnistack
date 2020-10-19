import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RetirementHome from './pages/RetirementHomes';
import House from './pages/House';
import CreateHouse from './pages/CreateHouse';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" exact component={RetirementHome} />
        <Route path="/houses/:id" component={House} />
        <Route path="/create" exact component={CreateHouse} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
