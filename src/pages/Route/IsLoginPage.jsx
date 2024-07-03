import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLogin, isAdmin } from '../../lib/recoil/isLoginAtom';

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

export const AdminRoute = () => {
  const [isAdminCheck, setIsAdmin] = useRecoilState(isAdmin);
  sessionStorage.setItem('admin', 'admin'); //테스트용
  if (sessionStorage.getItem('admin')) {
    setIsAdmin(true);
  }
  if (!isAdminCheck) {
    alert('비정상적인 접근 : admin만 접근');
  }
  return isAdminCheck ? <Outlet /> : <Navigate to={'*'} />;
};
