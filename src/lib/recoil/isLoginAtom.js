import { atom, selector } from 'recoil';

export const isLoginAtom = atom({
  key: 'isLoginAtom',
  default: undefined,
});

export const isLogin = selector({
  key: 'islogin',
  get: ({ get }) => !!get(isLoginAtom),
});
