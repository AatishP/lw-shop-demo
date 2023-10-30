import {AppText} from 'components/AppText';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {getCurrencyString} from 'utils/number';

type OrderHistoryRowProps = {
  title: string;
  subtitle: string;
};

export const OrderHistoryRow = ({title, subtitle}: OrderHistoryRowProps) => {
  return (
    <View style={styles.rowContainer}>
      <AppText weight="bold">{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 16,
    borderBottomWidth: 1,
    height: 72,
  },
});
