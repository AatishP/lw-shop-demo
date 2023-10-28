import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store/store';

export const selectCartItems = createSelector(
  (state: RootState) => state.cart,
  cart => cart.items,
);

export const selectNumberOfItemsInCart = createSelector(
  selectCartItems,
  cartItems => cartItems.length,
);

export const selectUniqueProductIdsInCart = createSelector(
  selectCartItems,
  cartItems => {
    return Array.from(new Set(cartItems.map(item => item.productId)));
  },
);

export const selectCartItemsByProductId = createSelector(
  selectCartItems,
  selectUniqueProductIdsInCart,
  (cart, productIds) => {
    const itemsByProductId: {
      [productId: string]: string[];
    } = {};

    productIds.forEach(id => {
      itemsByProductId[id] = cart
        .filter(cartItem => cartItem.productId === id)
        .map(itemForProduct => itemForProduct.variantId);
    });

    return itemsByProductId;
  },
);
