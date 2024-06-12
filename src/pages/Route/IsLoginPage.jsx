import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLogin } from '../../lib/recoil/isLoginAtom';

export const PrivateRoute = () => {
  const checkLogin = useRecoilValue(isLogin);

  if (!checkLogin) {
    alert('로그인 후 접근 가능합니다.');
  }
  return checkLogin ? <Outlet /> : <Navigate to={'/login'} />;
};

export const PublicRoute = () => {
  const checkLogin = useRecoilValue(isLogin);
  if (checkLogin) {
    alert('비정상적인 접근 : 로그인유저가 public 접근');
  }
  return checkLogin ? <Navigate to={'*'} /> : <Outlet />;
};
