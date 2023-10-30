import {fakeDelay} from 'utils/miscHelpers';
import {Product, ProductVariant} from './products';

export type CartItem = {
  productId: Product['productId'];
  variantId: ProductVariant['variantId'];
};

export type CustomerInfo = {
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

export type Order = {
  items: CartItem[];
  customerInfo: CustomerInfo;
};

export type OrderConfirmation = {
  order: Order;
  orderId: string;
};

// Responds with a randomly generated order ID to simulate a successful order
// It also returns the order information in lieu of a proper order history API, in order
// to simulate the order history functioanlity
export const postOrder = async (order: Order): Promise<OrderConfirmation> => {
  await fakeDelay();

  const randomNumber = Math.random() * 100000;

  return {
    order: order,
    orderId: Math.round(randomNumber).toString(10),
  };
};
