import React, {useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages, icons} from '../../Assets/Images';
import CustomText from '../../component/Text';
import {goBack} from '../../Utils/navigation';
import {useNavigation} from '@react-navigation/native';
import {
  useGetExpertsQuery,
  useGetProductsQuery,
} from '../../Redux/Services/User';
import colors from '../../Utils/colors';

const ExpertConsultation = props => {
  const {data, isLoading, isError} = useGetExpertsQuery({});
  console.log(data, 'data');

  const [accept, setAccept] = useState<boolean>(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => {
        if (props?.route?.params?.back) {
          return (
            <TouchableOpacity
              style={[styles.icon, styles.left_margin]}
              onPress={goBack}>
              <Image style={styles.left_icon} source={icons.back} />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              style={[styles.icon, styles.left_margin]}
              onPress={props.navigation.toggleDrawer}>
              <Image style={styles.left_icon} source={icons.drawer} />
            </TouchableOpacity>
          );
        }
      },
    });
  }, [props?.navigation, props?.route?.params?.back]);

  if (isLoading) {
    return (
      <View style={styles.loading_view}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }

  const renderItem = ({item}) => {
    console.log(`http://projectstagingzone.com:18001/${item?.image}`, 'item');
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.renderItem}>
        <Image
          source={
            item?.image
              ? {
                  uri: `http://projectstagingzone.com:18001/${item?.image}`,
                }
              : dummyImages.consultation
          }
          style={styles.image}
        />
        <CustomText weight="semiBold" style={styles.title}>
          {item?.title}
        </CustomText>
        <CustomText style={styles.detailsTxt}>{item?.description}</CustomText>
        <CustomText weight="semiBold" style={styles.book_now}>
          Book Now
        </CustomText>
      </TouchableOpacity>
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;
  console.log(accept);

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={data?.data ?? []}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeperator}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
};

export default ExpertConsultation;
