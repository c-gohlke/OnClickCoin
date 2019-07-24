import { LOGOUT } from './actionTypes';

export default function logout() {
  console.log('logout action called');
  return { type: LOGOUT };
}
