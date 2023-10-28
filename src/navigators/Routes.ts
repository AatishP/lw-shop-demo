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
  PaymentDetails = 'PaymentDetails',
  Confirmation = 'Confirmation',
}

export type RootNavigatorParams = {
  [Routes.TabNavigator]: NavigatorScreenParams<TabNavigatorParams>;
  [Routes.CheckoutNavigator]: undefined; // TODO: Update
  [Routes.Cart]: undefined; // TODO: Update?
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
  [Routes.PaymentDetails]: undefined;
  [Routes.Confirmation]: undefined;
};

export type RouteParams = {
  [Routes.RootNavigator]: undefined;
  [Routes.TabNavigator]: undefined;
  [Routes.Home]: undefined;
  [Routes.OrderHistory]: undefined;
  [Routes.Cart]: undefined;
};
