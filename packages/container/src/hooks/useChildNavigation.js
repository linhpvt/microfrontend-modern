// this hook is used to update browser pathname once the remotes has been navigated successfully.

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
const useChildNavigation = () => {
  const browserHistory = useHistory();
  const onChildNagivated = useCallback(
    (evtNavigation) => {
      const { pathname: nextPathname } = evtNavigation;
      if (nextPathname !== browserHistory.location.pathname) {
        browserHistory.push(nextPathname);
      }
    },
    [browserHistory],
  );
  return onChildNagivated;
};
export { useChildNavigation };
