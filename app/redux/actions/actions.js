import { LOGIN, LOGOUT } from './actionTypes';

// /*
//  * action creators
//  */

export function login(username) {
  console.log('login action called');
  return { type: LOGIN, payload: { username } };
}

export function logout() {
  console.log('logout action called');
  return { type: LOGOUT };
}
