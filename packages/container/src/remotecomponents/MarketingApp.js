import React, { useRef, useEffect } from 'react';
import { mount as mountMarketing } from 'marketing/MarketingApp';
import { useChildNavigation } from '../hooks';
export default () => {
  const ref = useRef(null);
  const onChildNagivated = useChildNavigation();
  useEffect(() => {
    mountMarketing(ref.current, { onChildNagivated });
  }, []);
  return <div ref={ref} />;
};
