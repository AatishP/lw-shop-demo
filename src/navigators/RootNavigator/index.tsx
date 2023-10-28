import {RootNavigatorParams, Routes} from 'navigators/Routes';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from 'navigators/TabNavigator';
import {Product} from 'screens/Product';

const Stack = createStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'modal'}}>
      <Stack.Screen name={Routes.TabNavigator} component={TabNavigator} />
      {/* <Stack.Screen name={Routes.CheckoutNavigator} /> */}
      <Stack.Screen
        name={Routes.Product}
        component={Product}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
