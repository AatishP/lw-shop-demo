import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteParams, Routes, TabNavigatorParams} from 'navigators/Routes';
import {Home} from 'screens/Home';
import {OrderHistory} from 'screens/OrderHistory';
import React from 'react';

const Tab = createBottomTabNavigator<TabNavigatorParams>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => undefined,
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name={Routes.OrderHistory}
        component={OrderHistory}
        options={{
          tabBarLabel: 'Order History',
          tabBarIcon: () => undefined,
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
    </Tab.Navigator>
  );
};
