import firebase from 'firebase';

import * as types from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    return new Promise((resolve) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({
          name,
          phone,
          shift
        }).then(() => {
          dispatch({
            type: types.EMPLOYEE_CREATE
          })
          resolve();
        });
    })
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: types.EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
