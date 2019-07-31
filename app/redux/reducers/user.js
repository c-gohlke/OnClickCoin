import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  username: 'anonymous',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      console.log('reducing LOGIN action');
      const { username } = action.payload;
      return { ...state, username };
    }
    case LOGOUT: {
      console.log('reducing LOGOUT action');
      return {
        ...state,
        username: initialState,
      };
    }
    default:
      return { ...state };
  }
}
