import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppScreen} from 'components/AppScreen';
import {AppText} from 'components/AppText';
import {Button} from 'components/Button';
import {Space} from 'components/Space';
import {TextField} from 'components/TextField';
import {
  CheckoutNavigatorParams,
  Routes,
  RootNavigatorParams,
} from 'navigators/Routes';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearCart} from 'store/cart';

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

  const onOrderPlaced = (data: DetailsForm) => {
    console.log(data); // TODO: Send order to 'API'
    navigate(Routes.OrderConfirmation);
    dispatch(clearCart());
  };

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
      <Button title="Place order" onPress={handleSubmit(onOrderPlaced)} />
    </AppScreen>
  );
};
