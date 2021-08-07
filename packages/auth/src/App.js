import React, { Fragment } from 'react';
// Router is Memory History, it will provide navigation history for us to use but not the Browser History at all.
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SigninPage from './components/Signin';
import SignupPage from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' component={SigninPage}></Route>
            <Route path='/auth/signup' component={SignupPage}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};
