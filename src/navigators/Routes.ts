import {NavigatorScreenParams} from '@react-navigation/native';

export enum Routes {
  RootNavigator = 'RootNavigator',

  TabNavigator = 'TabNavigator',
  Home = 'Home',
  Product = 'Product',
  OrderHistory = 'OrderHistory',

  // Checkout flow
  Cart = 'Cart',
  CheckoutNavigator = 'CheckoutNavigator',
  CustomerDetails = 'CustomerDetails',
  OrderConfirmation = 'OrderConfirmation',
}

export type RootNavigatorParams = {
  [Routes.TabNavigator]: NavigatorScreenParams<TabNavigatorParams>;
  [Routes.CheckoutNavigator]: NavigatorScreenParams<CheckoutNavigatorParams>;
  [Routes.Product]: {
    id: string;
    name: string;
  };
};

export type TabNavigatorParams = {
  [Routes.Home]: undefined;
  [Routes.OrderHistory]: undefined;
};

export type BaseRouteParams = {
  [Routes.RootNavigator]: NavigatorScreenParams<RootNavigatorParams>;
};

export type CheckoutNavigatorParams = {
  [Routes.Cart]: undefined; // TODO: Update?
  [Routes.CustomerDetails]: undefined;
  [Routes.OrderConfirmation]: undefined;
};

export type RouteParams = {
  [Routes.RootNavigator]: undefined;
  [Routes.TabNavigator]: undefined;
  [Routes.Home]: undefined;
  [Routes.OrderHistory]: undefined;
  [Routes.Cart]: undefined;
};
