import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../Text';
import {styles} from './styles';

export default function Seprator({txt}: any) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.line} />
      <CustomText weight="bold" style={styles.txtStyle}>
        {txt}
      </CustomText>
      <View style={styles.line} />
    </View>
  );
}
