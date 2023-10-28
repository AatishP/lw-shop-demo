import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type BodyProps = {
  alignment?: TextStyle['textAlign'];
  color?: 'primary' | 'warning' | 'success';
  type?: 'standard' | 'subtitle' | 'title';
  weight?: TextStyle['fontWeight'];
  style?: TextStyle;
  children: string | ReactNode;
};

export const AppText = ({
  alignment = 'left',
  type = 'standard',
  weight = 'normal',
  color = 'primary',
  style,
  children,
}: BodyProps) => {
  return (
    <Text
      style={[
        styles[type],
        styles[color],
        {...style, fontWeight: weight, textAlign: alignment},
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  standard: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
  },
  primary: {
    color: 'black',
  },
  warning: {
    color: 'red',
  },
  success: {
    color: 'forestgreen',
  },
});
