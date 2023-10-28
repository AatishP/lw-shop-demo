import React from 'react';
import {StyleSheet, View} from 'react-native';

type SpaceProps = {
  expandToFill?: boolean;
  size?: number;
};

export const Space = ({size = 8, expandToFill}: SpaceProps) => {
  return (
    <View
      style={[
        styles.space,
        expandToFill
          ? styles.expandingSpace
          : {
              height: size,
            },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  space: {
    width: '100%',
  },
  expandingSpace: {
    flexGrow: 1,
  },
});
