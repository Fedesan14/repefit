import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

interface Props extends TextInputProps {
  label?: string;
  containerStyle?: ViewStyle;
  errorMessage?: string;
}

const InputText = ({ label, containerStyle, errorMessage, ...rest }: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray}
        {...rest}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.xs,
    color: colors.text,
    fontSize: fonts.sm,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.sm,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.inputBackground,
  },
  errorMessage: {
    color: 'red'
  }
});

export default InputText;
