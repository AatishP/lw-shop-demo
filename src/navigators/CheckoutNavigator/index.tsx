import {CheckoutNavigatorParams, Routes} from 'navigators/Routes';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart} from 'screens/Cart';
import {CustomerDetails} from 'screens/CustomerDetails';
import {OrderConfirmation} from 'screens/OrderConfirmation';

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
      <Stack.Screen name={Routes.CustomerDetails} component={CustomerDetails} />
      <Stack.Screen
        name={Routes.OrderConfirmation}
        component={OrderConfirmation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
