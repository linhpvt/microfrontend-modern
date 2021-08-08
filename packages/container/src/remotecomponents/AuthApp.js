import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount as mountAuth } from 'auth/AuthApp';
import { useRemoteNavigation } from '../hooks';

import { remoteInformAuthentication } from '../communication';

export default () => {
  const ref = useRef(null);
  const browserHistory = useHistory();
  const { onRemoteNagivated } = useRemoteNavigation();
  useEffect(() => {
    const { onHostNavigated } = mountAuth(ref.current, {
      onRemoteNagivated,
      initialPath: browserHistory.location.pathname,
      onSignIn: remoteInformAuthentication,
    });
    browserHistory.listen(onHostNavigated);
  }, []);
  return <div ref={ref} />;
};
