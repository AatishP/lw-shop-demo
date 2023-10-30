import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AppScreen} from 'components/layouts/AppScreen';
import {AppText} from 'components/atoms/AppText';
import {Button} from 'components/atoms/Button';
import {ImageCarousel} from 'components/molecules/ImageCarousel';
import {ProductVariantCarousel} from 'components/molecules/ProductVariantCarousel';
import {Space} from 'components/atoms/Space';
import {PRODUCT_IMAGES} from 'mockApi/products';
import {RootNavigatorParams, Routes} from 'navigators/Routes';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetProductDetailsByIdQuery} from 'store/api';
import {addToCart} from 'store/cart';
import {selectCartItemsByProductId} from 'store/cart/selectors';
import {getCurrencyString} from 'utils/number';

type ProductRouteProp = RouteProp<RootNavigatorParams, Routes.Product>;

export const Product = () => {
  const {params} = useRoute<ProductRouteProp>();
  const {goBack} = useNavigation();
  const [selectedVariantId, setSelectedVariantId] = useState<string>();
  const dispatch = useDispatch();

  const {id: productId, name: productName} = params;

  const cartItemsByProductId = useSelector(selectCartItemsByProductId);
  const cartItemsForProduct = cartItemsByProductId[productId];

  const {
    data: productDetails,
    error,
    isLoading,
  } = useGetProductDetailsByIdQuery(productId);

  useEffect(() => {
    if (productDetails) {
      setSelectedVariantId(productDetails.variants[0].variantId);
    }
  }, [productDetails]);

  const handleVariantSelect = (id: string) => {
    setSelectedVariantId(id);
  };

  const selectedVariant = productDetails?.variants.find(
    variant => variant.variantId === selectedVariantId,
  );
  const isSelectedVariantInCart = cartItemsForProduct?.some(
    item => item === selectedVariantId,
  );

  const handleAddToCardPress = () => {
    if (selectedVariantId) {
      dispatch(addToCart({productId: productId, variantId: selectedVariantId}));
      goBack();
    }
  };

  return (
    <AppScreen>
      <AppText type="title" weight="bold">
        {productName}
      </AppText>
      <AppText type="subtitle">{productDetails?.description}</AppText>
      <Space size={32} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error || !productDetails ? (
        <AppText>
          There was an error loading your selected product details! Please try
          again later.
        </AppText>
      ) : (
        <>
          <ImageCarousel
            images={selectedVariant?.images?.map(
              imageName => PRODUCT_IMAGES.fullImages[imageName],
            )}
          />
          <Space size={16} />
          <ProductVariantCarousel
            variants={productDetails.variants}
            selectedVariantId={selectedVariantId}
            onVariantSelect={handleVariantSelect}
          />
          <Space size={16} />
          <AppText weight="bold">
            {getCurrencyString(selectedVariant?.price)}
          </AppText>
          <Space size={16} />
          <AppText>{selectedVariant?.variantDescription}</AppText>
          <Space expandToFill={true} />
          <Button
            title={isSelectedVariantInCart ? 'Already in cart' : 'Add to cart'}
            onPress={handleAddToCardPress}
            disabled={isSelectedVariantInCart}
          />
          <Space size={8} />
        </>
      )}
    </AppScreen>
  );
};
