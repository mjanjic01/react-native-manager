import firebase from 'firebase';

import * as types from './types';

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password}) => {
  return (dispatch) => {
      dispatch({
        type: types.USER_LOGIN_REQUEST
      });

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: user
          });
        }).catch(error => {
          dispatch({
            type: types.USER_LOGIN_FAIL,
            payload: error
          });
        });
  };
};
