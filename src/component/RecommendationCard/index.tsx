import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';

export default function RecommendationCard({item, onPress}: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.image_container}>
        <Image source={item?.image} style={styles.product_image} />
      </View>
      {item?.name && (
        <CustomText weight="semiBold" style={styles.name}>
          {item.name}
        </CustomText>
      )}
      <CustomText style={styles.type}>{item.type}</CustomText>
      <CustomText style={styles.description}>{item.description}</CustomText>
      <View style={styles.row}>
        <CustomText style={styles.label}>
          Brand: <CustomText style={styles.value}>{item.brand}</CustomText>
        </CustomText>
        <CustomText style={styles.label}>
          Purchase Link:{' '}
          <CustomText style={styles.value}>{item.purchase_link}</CustomText>
        </CustomText>
      </View>
      <View style={styles.row}>
        <CustomText style={styles.label}>Recommendation Based On:</CustomText>
        <CustomText style={styles.value}>{item.recommendation_on}</CustomText>
      </View>
    </TouchableOpacity>
  );
}
