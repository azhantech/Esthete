import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import {ActivityIndicator, View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';
import {useGetEducationContentByIdQuery} from '../../Redux/Services/User';
import {navigate} from '../../Utils/navigation';
import Video from 'react-native-video';
import colors from '../../Utils/colors';

const VideoDetail = (props: any) => {
  const {data, isLoading, isError} = useGetEducationContentByIdQuery({
    type: 'video',
    id: props?.route?.params?.id,
  });

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <View style={[styles.image_container, {height: heightPixel(154)}]}>
        <Video
          source={{uri: `http://projectstagingzone.com:18001/${data?.videoUrl}`}}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: colors.black,
          }}
          resizeMode="cover"
          controls={true}
        />
        {/* {<Image source={icons.play} style={styles.play_icon} />} */}
      </View>

      <CustomText weight="semiBold" style={styles.name}>
        {data?.name}
      </CustomText>
      <CustomText style={styles.description}>{data?.description}</CustomText>
    </ScreenWrapper>
  );
};

export default VideoDetail;
