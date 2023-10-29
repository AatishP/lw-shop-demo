import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from 'navigators/RootNavigator';
import BootSplash from 'react-native-bootsplash';

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from 'store/store';

function App(): JSX.Element {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
