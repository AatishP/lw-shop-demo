import {AppText} from 'components/AppText';
import React, {ComponentProps} from 'react';
import {StyleSheet, TextInput} from 'react-native';

type TextFieldProps = ComponentProps<typeof TextInput> & {
  label?: string;
  width?: 'full' | 'half';
};

export const TextField = (props: TextFieldProps) => {
  return (
    <>
      {props.label && <AppText type="subtitle">{props.label}</AppText>}
      <TextInput
        {...props}
        style={[styles.textField, styles[props.width ?? 'full'], props.style]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textField: {
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  full: {
    width: '100%',
  },
  half: {
    width: '50%',
  },
});
