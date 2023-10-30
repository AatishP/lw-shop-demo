import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

type ImageCarouselProps = {
  images?: ImageSourcePropType[];
};

export const ImageCarousel = ({images}: ImageCarouselProps) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      contentContainerStyle={styles.carouselContainer}
      showsHorizontalScrollIndicator={false}>
      {images?.map((image, index) => (
        // Using index as a key isn't ideal, but in lieu of any actual image metadata to use it'll have to suffice
        <View style={styles.imageContainer} key={index}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
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
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'grey',
  },
  image: {
    height: 200,
    width: 200,
  },
});
