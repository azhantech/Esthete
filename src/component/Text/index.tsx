// CustomText.tsx
import React from 'react';
import {Text, TextStyle, StyleSheet, StyleProp, TextProps} from 'react-native';
import fonts from '../../Assets/Fonts';
import colors from '../../Utils/colors';
import {font} from '../../Utils/helpers';

type FontWeight = 'regular' | 'bold' | 'semiBold' | 'light' | 'medium';

interface CustomTextProps extends TextProps {
  fontFamily?: keyof typeof fonts; // Restricts to the keys of the fonts object
  weight?: FontWeight;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  rest?: TextProps;
}

const CustomText: React.FC<CustomTextProps> = props => {
  const {fontFamily, weight, style, children} = props;
  const fontFamilyStyle = fonts.OpenSans[weight as keyof typeof fonts.OpenSans];

  return (
    <Text
      {...props}
      style={[styles.text, {fontFamily: fontFamilyStyle}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    // Default text styling
    color: colors.dark_text,
    fontSize: font(14),
  },
});

export default CustomText;
