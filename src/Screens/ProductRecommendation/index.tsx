import React, {useLayoutEffect} from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import HomeHeader from '../../component/HomeHeader';
import {dummyImages, icons} from '../../Assets/Images';
import {
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import RecommendationCard from '../../component/RecommendationCard';
import {goBack, navigate} from '../../Utils/navigation';
import {heightPixel} from '../../Utils/helpers';
import {useGetProductsQuery} from '../../Redux/Services/User';

const ProductRecommendation = props => {
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
  const {data, isLoading, isError} = useGetProductsQuery({});

  const onPressProduct = (item: any) => {
    const _item = Object.assign({}, item);
    navigate('ProductDetail', {item: _item});
  };

  const renderItems = ({item}: any) => (
    <RecommendationCard item={item} onPress={onPressProduct.bind(null, item)} />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: heightPixel(150),
      }}>
      {/* Common Header */}
      <HomeHeader />

      {/* Recommendations List */}
      <FlatList
        refreshing={isLoading}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {}}
            tintColor={'#000'}
          />
        }
        data={data?.data ?? []}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
      />
    </ScreenWrapper>
  );
};

export default ProductRecommendation;
