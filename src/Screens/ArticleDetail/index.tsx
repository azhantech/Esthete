import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import {ActivityIndicator, View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';
import {useGetEducationContentByIdQuery} from '../../Redux/Services/User';
import colors from '../../Utils/colors';

const ArticleDetail = props => {
  const {data, isLoading, isError} = useGetEducationContentByIdQuery({
    type: 'article',
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
      <CommonCard image_height={heightPixel(123)} item={data} />

      {/* <View style={styles.content_view}>
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
      </View> */}
    </ScreenWrapper>
  );
};

export default ArticleDetail;
