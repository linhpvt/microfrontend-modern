import { useState } from 'react';
const USER_INFO_KEY = '____userInfo';

export default () => {
  const sessionUser = JSON.parse(localStorage.getItem(USER_INFO_KEY));
  const [userInfo, setUserInfo] = useState(sessionUser);
  return {
    userInfo,
    notifyAuthentication: (authInfo) => {
      const { status, user } = authInfo || {};
      const currentUser = status === 0 ? user : null;
      if (currentUser) {
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(USER_INFO_KEY);
      }
      setUserInfo(currentUser);
    },
  };
};
