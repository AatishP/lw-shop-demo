import {AppScreen} from 'components/AppScreen';
import {AppText} from 'components/AppText';
import {Button} from 'components/Button';
import {ProductRow} from 'components/ProductRow';
import {Space} from 'components/Space';
import {PRODUCT_IMAGES} from 'mockApi/products';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useGetProductDetailsByIdsQuery} from 'store/api';
import {removeFromCart} from 'store/cart';
import {
  selectCartItems,
  selectUniqueProductIdsInCart,
} from 'store/cart/selectors';

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const productIdsInCart = useSelector(selectUniqueProductIdsInCart);

  const {data} = useGetProductDetailsByIdsQuery(productIdsInCart);

  const getProductRows = () => {
    return cart.map(cartItem => {
      const product = data?.find(
        productDetails => productDetails.productId === cartItem.productId,
      );
      const variant = product?.variants.find(
        variantDetails => variantDetails.variantId === cartItem.variantId,
      );

      if (product && variant?.images) {
        return (
          <>
            <ProductRow
              key={product.productId + variant.variantId}
              title={product.productName}
              subtitle={variant.variantName}
              price={variant.price}
              image={PRODUCT_IMAGES.fullImages[variant.images[0]]}
              onRemovePress={() => {
                dispatch(
                  removeFromCart({
                    productId: product.productId,
                    variantId: variant.variantId,
                  }),
                );
              }}
            />
            <Space size={8} />
          </>
        );
      }
    });
  };

  const productRows = getProductRows();

  return (
    <AppScreen>
      <AppText type="title" weight="bold">
        Your cart
      </AppText>
      <Space size={32} />
      {productRows.length > 0 ? (
        productRows
      ) : (
        <AppText>Your cart is empty</AppText>
      )}
      <Space expandToFill={true} />
      <Button title="Continue to checkout" disabled={productRows.length <= 0} />
    </AppScreen>
  );
};
