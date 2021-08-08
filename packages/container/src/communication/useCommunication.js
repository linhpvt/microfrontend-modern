import React, { useState } from 'react';

export default () => {
  const [userInfo, setUserInfo] = useState(null);
  return {
    userInfo,
    notifyAuthentication: (authInfo) => {
      const { status, user } = authInfo || {};
      const currentUser = status === 0 ? user : null;
      setUserInfo(currentUser);
    },
  };
};
