import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import LoginForm from './components/forms/LoginForm'
import reducers from './reducers';

import firebaseConfig from './config/firebase';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{marginTop: 50}}>
          <LoginForm></LoginForm>
        </View>
      </Provider>
    );
  }
}



export default App;