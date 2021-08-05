import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import LandingPage from './components/Landing';
import PricingPage from './components/Pricing';

export default () => {
  return (
    <Fragment>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pricing' component={PricingPage}></Route>
            <Route path='/' component={LandingPage}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </Fragment>
  );
};
