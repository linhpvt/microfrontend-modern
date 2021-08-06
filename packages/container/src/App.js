import React, { Fragment } from 'react';

// Browser History for Navigation
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './remotecomponents/MarketingApp';
import Header from './localcomponents/Header';
const generateClassName = createGenerateClassName({
  productionPrefix: '_',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header />
          <MarketingApp />
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
