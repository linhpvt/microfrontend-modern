import React, { Fragment } from 'react';

// Browser History for Navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './localcomponents/Header';
import MarketingApp from './remotecomponents/MarketingApp';
import AuthApp from './remotecomponents/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: '_',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header />
          {/* <MarketingApp /> */}
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
