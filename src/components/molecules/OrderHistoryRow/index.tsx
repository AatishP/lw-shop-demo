import {AppText} from 'components/atoms/AppText';
import React from 'react';
import {StyleSheet, View} from 'react-native';

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
