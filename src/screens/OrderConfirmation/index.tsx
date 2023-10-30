import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppScreen} from 'components/AppScreen';
import {AppText} from 'components/AppText';
import {Button} from 'components/Button';
import {Space} from 'components/Space';
import {
  CheckoutNavigatorParams,
  Routes,
  RootNavigatorParams,
} from 'navigators/Routes';
import React from 'react';

type OrderConfirmationNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CheckoutNavigatorParams, Routes.OrderConfirmation>,
  StackNavigationProp<RootNavigatorParams>
>;

type OrderConfirmationRouteProp = RouteProp<
  CheckoutNavigatorParams,
  Routes.OrderConfirmation
>;

export const OrderConfirmation = () => {
  const {navigate} = useNavigation<OrderConfirmationNavigationProp>();
  const {params} = useRoute<OrderConfirmationRouteProp>();

  const handleHomePress = () => {
    navigate(Routes.TabNavigator, {screen: Routes.Home});
  };

  const orderNumberString = params.orderId ? `#${params.orderId} ` : '';

  return (
    <AppScreen>
      <AppText type="title" weight="bold" alignment="center">
        Your order {orderNumberString}has been placed
      </AppText>
      <Space size={16} />
      <AppText alignment="center">Thanks for simply shopping!</AppText>
      <Space expandToFill={true} />
      <Button title="Return to Home" onPress={handleHomePress} />
    </AppScreen>
  );
};
