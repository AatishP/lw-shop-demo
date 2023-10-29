import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product, ProductVariant} from 'mockApi/products';

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {items: []};

type CartItem = {
  productId: Product['productId'];
  variantId: ProductVariant['variantId'];
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const {productId, variantId} = action.payload;

      state.items = state.items.filter(
        item => item.productId !== productId || item.variantId !== variantId,
      );
    },
    clearCart: () => initialState,
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
