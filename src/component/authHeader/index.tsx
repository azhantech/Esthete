import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomText from '../Text';
import {generalImages} from '../../Assets/Images';
import {styles} from './styles';
export default function AuthHeader({title}) {
  return (
    <View style={styles.authHeader}>
      <Image source={generalImages.authHeaderImg} />
      <View style={styles.headerTitle}>
        <CustomText weight="bold" style={styles.title}>
          {title}
        </CustomText>
        <View style={styles.seprator} />
      </View>
    </View>
  );
}
