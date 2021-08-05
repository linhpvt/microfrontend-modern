import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import LandingPage from './components/Landing';
import PricingPage from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default () => {
  return (
    <Fragment>
      <StylesProvider generateClassName={generateClassName}>
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
