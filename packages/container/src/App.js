import React, { Fragment, lazy, Suspense } from 'react';

// Browser History for Navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './localcomponents/Header';
// import MarketingApp from './remotecomponents/MarketingApp';
// import AuthApp from './remotecomponents/AuthApp';
const MarketingLazy = lazy(() => import('./remotecomponents/MarketingApp'));
const AuthLazy = lazy(() => import('./remotecomponents/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: '_',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header />
          {/* <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
