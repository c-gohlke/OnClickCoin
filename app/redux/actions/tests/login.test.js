import login from '../login';
import { LOGIN } from '../actionTypes';

describe('login actions', () => {
  describe('login', () => {
    it('should return the correct constant', () => {
      const username = 'aaa';
      expect(login(username)).toEqual({
        payload: {
          username,
        },
        type: LOGIN,
      });
    });
  });
});
