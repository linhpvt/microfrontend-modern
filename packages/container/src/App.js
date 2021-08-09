import React, { Fragment, lazy, Suspense, useEffect } from 'react';

// Browser History for Navigation
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './localcomponents/Header';
import ProgressBar from './localcomponents/ProgressBar';
import useCommunication from './communication/useCommunication';

// lazy loading components
const MarketingLazy = lazy(() => import('./remotecomponents/MarketingApp'));
const AuthLazy = lazy(() => import('./remotecomponents/AuthApp'));
const DashboardLazy = lazy(() => import('./remotecomponents/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: '_',
});

// Important: Browser History created out of the component
const history = createBrowserHistory();

export default () => {
  const { userInfo, notifyAuthentication } = useCommunication();
  useEffect(() => {
    if (userInfo) {
      // client navigation
      history.push('/dashboard');
    }
  }, [userInfo]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header {...{ userInfo, notifyAuthentication }} />
          <Suspense fallback={ProgressBar}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy
                  userInfo={userInfo}
                  notifyAuthentication={notifyAuthentication}
                />
              </Route>
              {/* pemission */}
              <Route path='/dashboard'>
                {userInfo ? <DashboardLazy /> : <Redirect to='/' />}
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
    </Router>
  );
};
