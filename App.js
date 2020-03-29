import React from 'react';
import {Provider as Layer} from '@ant-design/react-native';
import Main from './src/screens/main';

const App = () => {
  return (
    <Layer>
      <Main />
    </Layer>
  );
};

export default App;
