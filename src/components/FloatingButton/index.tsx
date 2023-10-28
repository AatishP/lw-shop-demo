import {AppText} from 'components/AppText';
import React, {useRef} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type FloatingButtonProps = {
  horizontalPosition?: 'left' | 'right';
  horizontalOffset?: number;
  verticalPosition?: 'top' | 'bottom';
  verticalOffset?: number;
  label: string;
  onPress?: () => void;
};

export const FloatingButton = ({
  label,
  horizontalOffset = 16,
  horizontalPosition = 'left',
  verticalOffset = 16,
  verticalPosition = 'top',
  onPress,
}: FloatingButtonProps) => {
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

  const getPositionStyleProps = () => {
    const props: StyleProp<ViewStyle> = {};

    if (horizontalPosition === 'left') {
      props.left = horizontalOffset;
    }

    if (horizontalPosition === 'right') {
      props.right = horizontalOffset;
    }

    if (verticalPosition === 'top') {
      props.top = verticalOffset;
    }

    if (verticalPosition === 'bottom') {
      props.bottom = verticalOffset;
    }

    return props;
  };

  const handlePress = () => {
    onPress?.();
  };

  return (
    <Pressable
      onPressIn={fadePressIn}
      onPressOut={fadePressOut}
      onPress={handlePress}>
      <Animated.View
        style={[
          styles.floatingButton,
          getPositionStyleProps(),
          {
            backgroundColor: backgroundAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', 'lightgray'],
            }),
          },
        ]}>
        <AppText alignment="center" type="subtitle">
          {label}
        </AppText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    padding: 10,
    height: 72,
    width: 72,
    borderRadius: 36,
    zIndex: 1,
  },
});
