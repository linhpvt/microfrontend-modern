/*
  This function is used to update memory history for remotes once the host has been navigated successfully.
*/
export const useHostNavigation = (memoryHistory) => {
  const onHostNavigated = (evtNavigation) => {
    const { pathname: nextPathname } = evtNavigation;
    const { location: { pathname: currentPathname } = {} } = memoryHistory;

    // update memory history
    if (nextPathname !== currentPathname) {
      memoryHistory.push(nextPathname);
    }
  };

  return {
    onHostNavigated,
  };
};
