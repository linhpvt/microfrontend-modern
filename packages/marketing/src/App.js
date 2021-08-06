import React, { Fragment } from 'react';
// Router is Memory History, it will provide navigation history for us to use but not the Browser History at all.
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import LandingPage from './components/Landing';
import PricingPage from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={PricingPage}></Route>
            <Route path='/' component={LandingPage}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};
