import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeCreateScreen from './screens/EmployeeCreateScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" modal hideNavBar>
        <Scene key="auth" initial title="Please Login">
          <Scene key="login" component={LoginScreen} />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeListScreen}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreateScreen}/>
        </Scene>
      </Stack>
    </Router>
  );
};



export default RouterComponent;
