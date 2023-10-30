import React from 'react';
import {StyleSheet, View} from 'react-native';

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({children}: GridProps) => {
  return <View style={styles.grid}>{children}</View>;
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
