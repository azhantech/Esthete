import {Image, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';
import Video from 'react-native-video';
import {navigate} from '../../Utils/navigation';

export default function HorizontalVideoCard({item}: any) {
  console.log('item', item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('VideoDetail', {id: item?._id})}>
      <Video
        source={{uri: `http://projectstagingzone.com:18001/${item.videoUrl}`}}
        style={styles.image}
        paused={true}
        resizeMode="cover"
      />
      <CustomText style={styles.title}>{item.name}</CustomText>
      <CustomText style={styles.description}>{item.description}</CustomText>
      <CustomText style={styles.view_more}>View More</CustomText>
    </TouchableOpacity>
  );
}
