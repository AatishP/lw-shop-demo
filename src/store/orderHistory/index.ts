import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartItem, Order, OrderConfirmation} from 'mockApi/orders';
import {simpleShopApi} from 'store/api';

type OrderHistoryState = {
  orders: OrderConfirmation[];
};

const initialState: OrderHistoryState = {orders: []};

export const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      simpleShopApi.endpoints.postOrder.matchFulfilled,
      (state, {payload}) => {
        state.orders.push(payload);
      },
    );
  },
});
