import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import fonts from '../../Assets/Fonts';
import CustomText from '../Text';

// @interfaces/index.ts
interface IButton {
  onPress: () => void;
  text: String;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  secondary?: boolean;
  weight?: 'regular' | 'bold' | 'semiBold' | 'light' | 'medium';
  fontFamily?: keyof typeof fonts;
  icon?: number;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  onPress,
  text,
  style,
  textStyle,
  weight = 'bold',
  fontFamily = 'OpenSans',
  icon,
  isLoading,
  disabled = false,
}) => {
  if (isLoading) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={true}
        style={[styles.buttonStyle, style]}>
        <ActivityIndicator color={'#fff'} size={'small'} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.buttonStyle, style]}>
      {icon && (
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.image} />
        </View>
      )}
      <CustomText
        fontFamily={fontFamily}
        weight={weight}
        style={[styles.buttonText, textStyle]}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
