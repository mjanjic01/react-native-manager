import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScreen} title="Please Login" />
      </Scene>
    </Router>
  );
};



export default RouterComponent;
