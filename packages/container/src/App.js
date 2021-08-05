import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './remotecomponents/MarketingApp';
import Header from './localcomponents/Header';

export default () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <MarketingApp />
      </Fragment>
    </BrowserRouter>
  );
};
