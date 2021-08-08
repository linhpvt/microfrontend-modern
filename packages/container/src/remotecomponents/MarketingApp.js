import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount as mountMarketing } from 'marketing/MarketingApp';
import { useRemoteNavigation } from '../hooks';
export default ({ userInfo }) => {
  const ref = useRef(null);
  const browserHistory = useHistory();
  const { onRemoteNagivated } = useRemoteNavigation();
  // console.log('onRemoteNagivated', onRemoteNagivated);
  useEffect(() => {
    const { onHostNavigated } = mountMarketing(ref.current, {
      onRemoteNagivated,
      initialPath: browserHistory.location.pathname,
    });
    browserHistory.listen(onHostNavigated);
  }, []);
  return <div ref={ref} />;
};
