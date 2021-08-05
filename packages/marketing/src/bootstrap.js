import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (element) => {
  if (!element) {
    return 'Not found html element to render to';
  }
  ReactDOM.render(<App />, element);
};

const devMarketingFeatures = document.getElementById('dev-marketing-feature');
const env = process.env.NODE_ENV || 'development';
if (env === 'development' && devMarketingFeatures) {
  mount(devMarketingFeatures);
}

export { mount };
