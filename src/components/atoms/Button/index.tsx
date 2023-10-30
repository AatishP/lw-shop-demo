import {AppText} from 'components/atoms/AppText';
import React, {useRef} from 'react';
import {Pressable, StyleSheet, Animated} from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const Button = ({title, onPress, disabled}: ButtonProps) => {
  const backgroundAnimation = useRef(new Animated.Value(0)).current;

  const fadePressIn = () => {
    Animated.timing(backgroundAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadePressOut = () => {
    Animated.timing(backgroundAnimation, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    onPress?.();
  };

  return (
    <Pressable
      onPressIn={fadePressIn}
      onPressOut={fadePressOut}
      onPress={handlePress}
      disabled={disabled}>
      <Animated.View
        style={[
          styles.button,
          disabled
            ? styles.disabled
            : {
                backgroundColor: backgroundAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['white', 'lightgray'],
                }),
              },
        ]}>
        <AppText weight="bold">{title}</AppText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  disabled: {
    backgroundColor: 'gray',
  },
});
