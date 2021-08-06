/*
  This hook is used to update browser pathname once the remotes has been navigated successfully.
 */
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
export const useRemoteNavigation = () => {
  const browserHistory = useHistory();
  const onRemoteNagivated = useCallback(
    (evtNavigation) => {
      const { pathname: nextPathname } = evtNavigation;
      const { location: { pathname: currentPathname } = {} } = browserHistory;

      // update browser history
      if (nextPathname !== currentPathname) {
        browserHistory.push(nextPathname);
      }
    },
    [browserHistory],
  );
  return { onRemoteNagivated };
};
