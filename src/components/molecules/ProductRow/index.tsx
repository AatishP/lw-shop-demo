import {AppText} from 'components/atoms/AppText';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {getCurrencyString} from 'utils/number';

type ProductRowProps = {
  title: string;
  subtitle: string;
  price: number;
  image?: ImageSourcePropType;
  onRemovePress?: () => void;
};

export const ProductRow = ({
  title,
  subtitle,
  price,
  image,
  onRemovePress,
}: ProductRowProps) => {
  const handleRemovePress = () => {
    onRemovePress?.();
  };
  return (
    <View style={styles.rowContainer}>
      <View style={styles.productInformationContainer}>
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.rowInformation}>
          <AppText weight="bold">{title}</AppText>
          <AppText>{subtitle}</AppText>
          <AppText type="subtitle">{getCurrencyString(price)}</AppText>
        </View>
      </View>
      <Pressable style={styles.removeButton} onPress={handleRemovePress}>
        <AppText>Remove</AppText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 72,
  },
  productInformationContainer: {
    flexDirection: 'row',
  },
  rowInformation: {
    flexDirection: 'column',
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  removeButton: {
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
