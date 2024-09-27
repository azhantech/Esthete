import React, {FC} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import colors from '../../Utils/colors';
import CustomText from '../Text';

interface IInputField {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  isRequired?: boolean;
}

const InputField: FC<IInputField> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  containerStyle,
  inputStyle,
  label,
  isRequired = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <CustomText weight="medium" style={styles.label}>
          {label} {isRequired && <Text style={styles.required}>*</Text>}
        </CustomText>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, inputStyle]}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  required: {
    color: colors.red,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});

export default InputField;
