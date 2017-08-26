import * as types from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      }

    case types.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      }

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        user: action.payload
      }

    case types.USER_LOGIN_FAIL:
      console.log(action.payload);
      return {
        ...state,
        error: 'Authentication failed.',
        password: ''
      }

    default:
      return state;
  }
};