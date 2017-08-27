import * as types from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMPLOYEES_FETCH_SUCCESS:
      const employees = Object.keys(action.payload).reduce((acc, uid) => {
        const employee = action.payload[uid];
        acc.push({
          ...employee,
          uid
        });
        return acc;
      }, []);
      return {
        data: employees
      };

    default:
      return state;
  }
};