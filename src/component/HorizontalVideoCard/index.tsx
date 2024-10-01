import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';

export default function HorizontalVideoCard({item}: any) {
  return (
    <View style={styles.container}>
      <Image source={item?.image} style={styles.image} />
      <CustomText style={styles.title}>{item.title}</CustomText>
      <CustomText style={styles.description}>{item.description}</CustomText>
      <CustomText style={styles.view_more}>View More</CustomText>
    </View>
  );
}
