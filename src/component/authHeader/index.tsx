import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomText from '../Text';
import {generalImages} from '../../Assets/Images';
import {styles} from './styles';

export default function AuthHeader({
  title,
  subTitle,
  subTitleStyle,
  logo_white,
}: any) {
  const tinted_logo = logo_white ? styles.white_logo : {};

  return (
    <View style={styles.authHeader}>
      <Image
        source={generalImages.appIcon}
        style={[styles.imageStyle, tinted_logo]}
      />
      <View style={styles.headerTitle}>
        <CustomText weight="bold" style={styles.title}>
          {title}
        </CustomText>
        <CustomText weight="medium" style={[styles.subTitle, subTitleStyle]}>
          {subTitle}
        </CustomText>
      </View>
    </View>
  );
}
