import {AppText} from 'components/atoms/AppText';
import {ProductVariant} from 'mockApi/products';
import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';

type ProductVariantCarouselProps = {
  variants: ProductVariant[];
  selectedVariantId?: ProductVariant['variantId'];
  onVariantSelect: (id: ProductVariant['variantId']) => void;
};

export const ProductVariantCarousel = ({
  variants,
  selectedVariantId,
  onVariantSelect,
}: ProductVariantCarouselProps) => {
  const handleVariantSelect = (id: ProductVariant['variantId']) => {
    onVariantSelect?.(id);
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      contentContainerStyle={styles.carouselContainer}>
      {variants.map(variant => (
        <ProductVariantCarouselItem
          key={variant.variantId}
          variant={variant}
          selected={variant.variantId === selectedVariantId}
          onPress={handleVariantSelect}
        />
      ))}
    </ScrollView>
  );
};

type ProductVariantCarouselItemProps = {
  variant: ProductVariant;
  selected: boolean;
  onPress?: (id: ProductVariant['variantId']) => void;
};

const ProductVariantCarouselItem = ({
  variant,
  selected,
  onPress,
}: ProductVariantCarouselItemProps) => {
  const handlePress = () => {
    onPress?.(variant.variantId);
  };

  return (
    <Pressable
      style={[styles.item, selected && styles.itemSelected]}
      onPress={handlePress}>
      <AppText>{variant.variantName}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  carouselContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'gray',
    height: 48,
    padding: 4,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 12,
  },
  itemSelected: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    color: 'white',
  },
});
