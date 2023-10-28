import {CheckoutNavigatorParams, Routes} from 'navigators/Routes';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart} from 'screens/Cart';

const Stack = createStackNavigator<CheckoutNavigatorParams>();

export const CheckoutNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        presentation: 'card',
        headerTransparent: true,
        headerBackTitle: 'Back',
        title: '',
      }}>
      <Stack.Screen name={Routes.Cart} component={Cart} />
      {/* <Stack.Screen
        name={Routes.Product}
        component={Product}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          title: '',
          headerTransparent: true,
        }}
      /> */}
    </Stack.Navigator>
  );
};
