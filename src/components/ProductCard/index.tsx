import {AppText} from 'components/AppText';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {PRODUCT_IMAGES, ThumbnailName} from 'mockApi/products';

type ProductCardProps = {
  id: string;
  name: string;
  // price: number;
  thumbnail?: ThumbnailName;
  onPress?: (id: string) => void;
};

export const ProductCard = ({
  name,
  thumbnail,
  id,
  onPress,
}: ProductCardProps) => {
  const handlePress = () => {
    onPress?.(id);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {!!thumbnail && (
        <View style={styles.imageContainer}>
          <Image
            source={PRODUCT_IMAGES.thumbnails[thumbnail]}
            style={styles.image}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <AppText>{name}</AppText>
      </View>
      {/* <Space /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    height: 160,
    width: '45%', // TODO: Size these properly
    margin: 8,
    overflow: 'hidden',
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // borderWidth: 1,
    height: '100%',
    width: '100%',
  },
});
