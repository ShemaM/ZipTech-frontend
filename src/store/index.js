import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userSigninReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
} from '../reducers/userReducers';

const reducer = combineReducers({
  userLogin: userSigninReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});

const userDataFromStorage = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

const initialState = { userLogin: { userData: userDataFromStorage } };

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
