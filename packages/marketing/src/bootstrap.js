import React from 'react';
import ReactDOM from 'react-dom';
// we create a memory history and pass it down to App where the Router resides in. this will stop the BROWSER HISTORY and create a MEMORY HISTORY instead. we will sync the navigation over the entire application
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (element) => {
  if (!element) {
    return 'Not found html element to render to';
  }
  const history = createMemoryHistory();
  ReactDOM.render(<App history={history} />, element);
};

const devMarketingFeatures = document.getElementById('dev-marketing-feature');
const env = process.env.NODE_ENV || 'development';
if (env === 'development' && devMarketingFeatures) {
  mount(devMarketingFeatures);
}

export { mount };
