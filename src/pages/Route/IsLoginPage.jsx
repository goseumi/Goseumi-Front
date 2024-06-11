import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLogin } from '../../lib/recoil/isLoginAtom';

export const IsLoginOn = () => {
  const checkLogin = useRecoilValue(isLogin);
  console.log('로그인했다');
  return checkLogin ? <Outlet /> : <Navigate to={'/home'} />;
};

export const IsLoginOff = () => {
  const checkLogin = useRecoilValue(isLogin);
  console.log('로그인안했다');
  return checkLogin ? <Navigate to={'/dm'} /> : <Outlet />;
};
