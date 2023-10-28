import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from 'navigators/RootNavigator';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
