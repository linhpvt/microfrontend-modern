import React, { Fragment, lazy, Suspense } from 'react';

// Browser History for Navigation
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './localcomponents/Header';
import ProgressBar from './localcomponents/ProgressBar';
// import MarketingApp from './remotecomponents/MarketingApp';
// import AuthApp from './remotecomponents/AuthApp';
import useCommunication from './communication/useCommunication';
const MarketingLazy = lazy(() => import('./remotecomponents/MarketingApp'));
const AuthLazy = lazy(() => import('./remotecomponents/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: '_',
});

export default () => {
  const { userInfo, notifyAuthentication } = useCommunication();
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header {...{ userInfo, notifyAuthentication }} />
          {/* <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch> */}
          <Suspense fallback={ProgressBar}>
            <Switch>
              {/* <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} /> */}
              <Route path='/auth'>
                <AuthLazy
                  userInfo={userInfo}
                  notifyAuthentication={notifyAuthentication}
                />
              </Route>
              <Route path='/'>
                <MarketingLazy
                  userInfo={userInfo}
                  notifyAuthentication={notifyAuthentication}
                />
              </Route>
            </Switch>
          </Suspense>
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
