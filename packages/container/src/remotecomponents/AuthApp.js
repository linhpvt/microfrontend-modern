import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount as mountAuth } from 'auth/AuthApp';
import { useRemoteNavigation } from '../hooks';
export default () => {
  const ref = useRef(null);
  const browserHistory = useHistory();
  const { onRemoteNagivated } = useRemoteNavigation();
  // console.log('onRemoteNagivated', onRemoteNagivated);
  useEffect(() => {
    const { onHostNavigated } = mountAuth(ref.current, {
      onRemoteNagivated,
    });
    browserHistory.listen(onHostNavigated);
  }, []);
  return <div ref={ref} />;
};
