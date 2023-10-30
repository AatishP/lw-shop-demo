import {AppScreen} from 'components/layouts/AppScreen';
import React from 'react';
import {ProductCard} from 'components/molecules/ProductCard';
import {Grid} from 'components/layouts/Grid';
import {AppText} from 'components/atoms/AppText';
import {Space} from 'components/atoms/Space';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {
  RootNavigatorParams,
  Routes,
  TabNavigatorParams,
} from 'navigators/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useGetProductsQuery} from 'store/api';
import {ActivityIndicator} from 'react-native';
import {selectNumberOfItemsInCart} from 'store/cart/selectors';
import {useSelector} from 'react-redux';
import {FloatingButton} from 'components/atoms/FloatingButton';

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParams, Routes.Home>,
  StackNavigationProp<RootNavigatorParams>
>;

export const Home = () => {
  const {navigate} = useNavigation<HomeNavigationProp>();

  const {data: products, isLoading} = useGetProductsQuery();

  const itemsInCart = useSelector(selectNumberOfItemsInCart);

  const handleProductPress = (id: string) => {
    const selectedProduct = products?.find(product => product.productId === id);

    if (selectedProduct) {
      navigate(Routes.Product, {id: id, name: selectedProduct.productName});
    }
  };

  const handleCartPress = () => {
    navigate(Routes.CheckoutNavigator, {
      screen: Routes.Cart,
    });
  };

  return (
    <>
      <AppScreen>
        <AppText type="title" weight="bold">
          Start shopping, simply.
        </AppText>
        <Space size={32} />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Grid>
              {products?.map(product => (
                <ProductCard
                  key={product.productId}
                  name={product.productName}
                  id={product.productId}
                  thumbnail={product.thumbnail}
                  onPress={handleProductPress}
                />
              ))}
            </Grid>
          </>
        )}
      </AppScreen>
      {itemsInCart > 0 && (
        <FloatingButton
          label={`Cart: ${itemsInCart}`}
          horizontalPosition="right"
          verticalPosition="bottom"
          onPress={handleCartPress}
        />
      )}
    </>
  );
};
