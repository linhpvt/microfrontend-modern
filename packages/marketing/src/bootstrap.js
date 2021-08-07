import React from 'react';
import ReactDOM from 'react-dom';
// we create a memory history and pass it down to App where the Router resides in. this will stop the BROWSER HISTORY and create a MEMORY HISTORY instead. we will sync the navigation over the entire application
import { createMemoryHistory, createBrowserHistory } from 'history';
import { useHostNavigation } from './hooks';
import App from './App';

const mount = (element, options = {}) => {
  if (!element) {
    return 'Not found html element to render to';
  }
  const { onRemoteNagivated, defaultHistory, initialPath } = options;

  // ensure navigation works in isolation normally
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // notify Host to update URL once the navigation happened
  if (onRemoteNagivated) {
    memoryHistory.listen(onRemoteNagivated);
  }

  ReactDOM.render(<App history={memoryHistory} />, element);
  // host uses the inteface to inform remote the navigation has been completed.
  return useHostNavigation(memoryHistory);
};

const devMarketingFeatures = document.getElementById('dev-marketing-feature');
const env = process.env.NODE_ENV || 'development';
if (env === 'development' && devMarketingFeatures) {
  mount(devMarketingFeatures, { defaultHistory: createBrowserHistory() });
}

export { mount };
