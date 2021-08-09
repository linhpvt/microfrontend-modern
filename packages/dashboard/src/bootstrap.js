import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export const mount = (element, options = {}) => {
  if (!element) {
    return 'Not found html element to render to';
  }
  /*
  const { onRemoteNagivated, defaultHistory, initialPath, onSignIn } = options;
  // ensure navigation works in isolation normally
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      // set initial path = current path on URL.
      // by default initialEntries = ['/']. It doesn't contain one of paths ['/auth/signin', '/auth/signup] in Remote auth project
      initialEntries: [initialPath],
    });

  // notify Host to update URL once the navigation happened
  if (onRemoteNagivated) {
    // the listen function only gets called once the path changed
    memoryHistory.listen(onRemoteNagivated);
  }

  ReactDOM.render(<App history={memoryHistory} onSignIn={onSignIn} />, element);
  // host uses the inteface to inform remote the navigation has been completed.
  return useHostNavigation(memoryHistory);
  */
  const app = createApp(Dashboard);
  app.mount(element);
};

const devDashboardFeatures = document.getElementById('dev-dashboard-feature');
const env = process.env.NODE_ENV || 'development';
if (env === 'development' && devDashboardFeatures) {
  mount(devDashboardFeatures, {});
}
