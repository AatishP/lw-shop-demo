import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/store';

export const selectOrderHistory = createSelector(
  (state: RootState) => state.orderHistory,
  orderHistory => orderHistory.orders,
);
