import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppScreen} from 'components/layouts/AppScreen';
import {AppText} from 'components/atoms/AppText';
import {Button} from 'components/atoms/Button';
import {ProductRow} from 'components/molecules/ProductRow';
import {Space} from 'components/atoms/Space';
import {PRODUCT_IMAGES} from 'mockApi/products';
import {
  Routes,
  RootNavigatorParams,
  CheckoutNavigatorParams,
} from 'navigators/Routes';
import React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetProductDetailsByIdsQuery} from 'store/api';
import {removeFromCart} from 'store/cart';
import {
  selectCartItems,
  selectUniqueProductIdsInCart,
} from 'store/cart/selectors';
import {getCurrencyString} from 'utils/number';

type MappedCartItem = {
  productId: string;
  variantId: string;
  productName: string;
  variantName: string;
  price: number;
  image?: ImageSourcePropType;
};

type CartNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CheckoutNavigatorParams, Routes.Cart>,
  StackNavigationProp<RootNavigatorParams>
>;

export const Cart = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<CartNavigationProp>();
  const cart = useSelector(selectCartItems);
  const productIdsInCart = useSelector(selectUniqueProductIdsInCart);

  const {data} = useGetProductDetailsByIdsQuery(productIdsInCart);

  const getMappedCartInfo = (): MappedCartItem[] => {
    const mappedCart = cart.map<MappedCartItem | undefined>(cartItem => {
      const product = data?.find(
        productDetails => productDetails.productId === cartItem.productId,
      );
      const variant = product?.variants.find(
        variantDetails => variantDetails.variantId === cartItem.variantId,
      );

      if (product && variant) {
        return {
          productId: product.productId,
          variantId: variant.variantId,
          productName: product.productName,
          variantName: variant.variantName,
          price: variant.price,
          image: variant.images
            ? PRODUCT_IMAGES.fullImages[variant.images[0]]
            : undefined,
        };
      }
    });

    return mappedCart.filter(item => item !== undefined) as MappedCartItem[];
  };

  const getProductRows = (cartItems: MappedCartItem[]) => {
    return cartItems.map(cartItem => {
      return (
        <View key={cartItem.productId + cartItem.variantId}>
          <ProductRow
            title={cartItem.productName}
            subtitle={cartItem.variantName}
            price={cartItem.price}
            image={cartItem.image}
            onRemovePress={() => {
              dispatch(
                removeFromCart({
                  productId: cartItem.productId,
                  variantId: cartItem.variantId,
                }),
              );
            }}
          />
          <Space size={8} />
        </View>
      );
    });
  };

  const getTotalPrice = (cartItems: MappedCartItem[]) => {
    return cartItems.reduce<number>((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
  };

  const handleContinuePress = () => {
    navigate(Routes.CustomerDetails);
  };

  const cartItems = getMappedCartInfo();
  const productRows = getProductRows(cartItems);

  return (
    <AppScreen>
      <AppText type="title" weight="bold">
        Your cart
      </AppText>
      <Space size={32} />
      {productRows.length > 0 ? (
        <>
          {productRows}
          <AppText alignment="right" weight="bold">
            Total: {getCurrencyString(getTotalPrice(cartItems))}
          </AppText>
        </>
      ) : (
        <AppText>Your cart is empty</AppText>
      )}
      <Space expandToFill={true} />
      <Button
        title="Continue to checkout"
        disabled={productRows.length <= 0}
        onPress={handleContinuePress}
      />
      <Space size={8} />
    </AppScreen>
  );
};
