import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';
import {icons} from '../../Assets/Images';

export default function RecommendationCard({item, onPress}: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={{
            uri: `http://projectstagingzone.com:18001/${item?.image}`,
          }}
          style={styles.product_image}
        />
      </View>
      {item?.title && (
        <View style={styles.title_row}>
          <CustomText weight="semiBold" style={styles.name}>
            {item.title}
          </CustomText>
          {item?.isSaved && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.cross_container}>
              <Image source={icons.cross} style={styles.product_image} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <CustomText style={styles.type}>{item.type}</CustomText>
      <CustomText style={styles.description}>{item.description}</CustomText>
      {item.purchaseLink || item.brand ? (
        <View style={styles.row}>
          <CustomText style={styles.label}>
            Brand: <CustomText style={styles.value}>{item.brand}</CustomText>
          </CustomText>
          <CustomText style={styles.label}>
            Purchase Link:{' '}
            <CustomText style={styles.value}>{item.purchaseLink}</CustomText>
          </CustomText>
        </View>
      ) : null}
      {item.recommendationBasedOn ? (
        <View style={styles.row}>
          <CustomText style={styles.label}>Recommendation Based On:</CustomText>
          <CustomText style={styles.value}>
            {item.recommendationBasedOn}
          </CustomText>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
