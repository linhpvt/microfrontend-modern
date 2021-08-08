import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount as mountAuth } from 'auth/AuthApp';
import { useRemoteNavigation } from '../hooks';

export default ({ userInfo, notifyAuthentication }) => {
  const ref = useRef(null);
  const browserHistory = useHistory();
  const { onRemoteNagivated } = useRemoteNavigation();
  useEffect(() => {
    const { onHostNavigated } = mountAuth(ref.current, {
      onRemoteNagivated,
      initialPath: browserHistory.location.pathname,
      onSignIn: notifyAuthentication,
    });
    browserHistory.listen(onHostNavigated);
  }, []);
  return <div ref={ref} />;
};
