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
      console.log(action.payload);
      return {
        ...state,
        email: '',
        password: '',
        user: action.payload
      }

    case types.USER_LOGIN_FAIL:
      return {
        ...state,
        error: JSON.stringify(action.payload)
      }

    default:
      return state;
  }
};