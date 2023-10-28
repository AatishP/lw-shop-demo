import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product, ProductVariant} from 'mockApi/products';

type CartState = {
  items: {
    [product: Product['productId']]: ProductVariant['variantId'][];
  };
};

const initialState: CartState = {items: {}};

type CartItem = {
  productId: Product['productId'];
  variantId: ProductVariant['variantId'];
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const {productId, variantId} = action.payload;
      if (state.items[productId]) {
        state.items[productId].push(variantId);
      } else {
        state.items[productId] = [variantId];
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const {productId, variantId} = action.payload;

      if (state.items[productId]) {
        state.items[productId] = state.items[productId].filter(
          variant => variant !== variantId,
        );
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
