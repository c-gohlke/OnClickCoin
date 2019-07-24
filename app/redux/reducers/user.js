import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  username: 'anonymous',
};

export default function(state = initialState, action) {
  console.log('user reducer called, action is ', action);
  switch (action.type) {
    case LOGIN: {
      console.log('reducing LOGIN action');
      const { username } = action.payload;
      const returningState = { ...state, username };
      console.log('returning state is ', returningState);
      return returningState;
    }
    case LOGOUT: {
      console.log('reducing LOGOUT action');
      return {
        ...state,
        username: initialState,
      };
    }
    default:
      console.log('in user reducer, returning default');
      return state;
  }
}
