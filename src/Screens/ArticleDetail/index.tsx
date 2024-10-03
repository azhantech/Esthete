import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import {View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';

const ArticleDetail = () => {
  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <CommonCard
        image_height={heightPixel(123)}
        item={{
          id: '1',
          image: dummyImages.video_1,
          name: 'Can I Erase My Under Eye Bags?',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        }}
      />

      <View style={styles.content_view}>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, 
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>
      </View>
    </ScreenWrapper>
  );
};

export default ArticleDetail;
