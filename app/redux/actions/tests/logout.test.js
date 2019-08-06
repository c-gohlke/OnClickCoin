import logout from '../logout';
import { LOGOUT } from '../actionTypes';

describe('logout actions', () => {
  describe('logout', () => {
    it('should return the correct constant', () => {
      expect(logout()).toEqual({
        type: LOGOUT,
      });
    });
  });
});
