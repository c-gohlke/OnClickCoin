import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  username: 'anonymous',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { username } = action.payload;
      return {
        ...state,
        username,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        username: initialState,
      };
    }
    default:
      return state;
  }
}
