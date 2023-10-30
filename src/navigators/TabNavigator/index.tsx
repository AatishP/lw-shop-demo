import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteParams, Routes, TabNavigatorParams} from 'navigators/Routes';
import {Home} from 'screens/Home';
import {OrderHistory} from 'screens/OrderHistory';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator<TabNavigatorParams>();

const getTabIconForRoute = (route: Routes) => {
  console.log('getting...');
  switch (route) {
    case Routes.Home:
      return <Icon name="home" size={24} color="blue" />;
    case Routes.OrderHistory:
      return <Icon name="shopping-bag" size={24} color="blue" />;
    default:
      return <></>;
  }
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => getTabIconForRoute(Routes.Home),
        }}
      />
      <Tab.Screen
        name={Routes.OrderHistory}
        component={OrderHistory}
        options={{
          tabBarLabel: 'Order History',
          tabBarIcon: () => getTabIconForRoute(Routes.OrderHistory),
        }}
      />
    </Tab.Navigator>
  );
};
