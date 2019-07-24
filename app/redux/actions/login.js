import { LOGIN } from './actionTypes';

// /*
//  * action creators
//  */

export default function login(username) {
  console.log('login action called');
  console.log('username is ', username);
  return { type: LOGIN, payload: { username } };
}
