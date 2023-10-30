import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppScreen} from 'components/layouts/AppScreen';
import {AppText} from 'components/atoms/AppText';
import {Button} from 'components/atoms/Button';
import {Space} from 'components/atoms/Space';
import {TextField} from 'components/molecules/TextField';
import {
  CheckoutNavigatorParams,
  Routes,
  RootNavigatorParams,
} from 'navigators/Routes';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {usePostOrderMutation} from 'store/api';
import {clearCart} from 'store/cart';
import {selectCartItems} from 'store/cart/selectors';

type DetailsForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  streetAddress: string;
  postCode: string;
  country: string;
};

type CustomerDetailsNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CheckoutNavigatorParams, Routes.CustomerDetails>,
  StackNavigationProp<RootNavigatorParams>
>;

export const CustomerDetails = () => {
  const {navigate} = useNavigation<CustomerDetailsNavigationProp>();
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const [postOrder, {isSuccess, isLoading, data}] = usePostOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(Routes.OrderConfirmation, {
        orderId: data?.orderId,
      });
      dispatch(clearCart());
    }
  });

  const {control, handleSubmit} = useForm<DetailsForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      streetAddress: '',
      postCode: '',
      country: '',
    },
  });

  const onOrderPlaced = (formData: DetailsForm) => {
    postOrder({items: cart, customerInfo: formData});
  };

  return (
    <AppScreen>
      <AppText type="title" weight="bold">
        Your details
      </AppText>
      <View>
        <Space size={24} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="John"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="First name"
            />
          )}
          name="firstName"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="Smith"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Last name"
            />
          )}
          name="lastName"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="0412345678"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Phone number"
              width="half"
            />
          )}
          name="phoneNumber"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="MasterCard or Visa"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Credit Card number"
            />
          )}
          name="cardNumber"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="MM/YY"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Credit Card expiry"
              width="half"
            />
          )}
          name="cardExpiry"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="000"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Credit Card CVV"
              width="half"
            />
          )}
          name="cardCvv"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="1 Wellington Street, Perth, WA"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Street Address"
            />
          )}
          name="streetAddress"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="6000"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Postcode"
              width="half"
            />
          )}
          name="postCode"
        />
        <Space size={16} />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              placeholder="Australia"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Country"
            />
          )}
          name="country"
        />
      </View>
      <Space size={32} />
      {isLoading && <ActivityIndicator size="large" />}
      <Button title="Place order" onPress={handleSubmit(onOrderPlaced)} />
    </AppScreen>
  );
};
