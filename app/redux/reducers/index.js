import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import history from '../../utils/history';

export default combineReducers({ user, router: connectRouter(history) });
