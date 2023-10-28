import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/store';

export const selectCartItems = createSelector(
  (state: RootState) => state.cart,
  cart => cart.items,
);
