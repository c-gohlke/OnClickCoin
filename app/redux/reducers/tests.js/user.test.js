import userReducer from '../user';
import login from '../../actions/login';
import logout from '../../actions/logout';

describe('userReducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the login action', () => {
    expect(userReducer({}, login('admin'))).toMatchSnapshot();
  });

  it('handles the logout action', () => {
    expect(userReducer({}, logout())).toMatchSnapshot();
  });
});
