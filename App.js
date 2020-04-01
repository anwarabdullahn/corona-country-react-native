import React from 'react';
import Main from './src/screens/main';
import {Provider} from 'react-redux';
import {Provider as Layer} from '@ant-design/react-native';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Layer>
        <Main />
      </Layer>
    </Provider>
  );
};

export default App;
