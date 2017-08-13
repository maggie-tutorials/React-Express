import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer // the auth piece of state is manifactured by the authReducer
});
