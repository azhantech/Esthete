import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import useHomeController from '../../Controllers/useHomeController';
import HomeHeader from '../../component/HomeHeader';
import Carousel from 'react-native-reanimated-carousel';
import {heightPixel, vw} from '../../Utils/helpers';
import {Image, TouchableOpacity, View} from 'react-native';
import {banners, dummyImages, icons} from '../../Assets/Images';
import CustomText from '../../component/Text';
import {navigate} from '../../Utils/navigation';

const SERVICES = [
  {
    id: '1',
    icon: icons.forum_service,
    name: 'Expert’s Consultation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit orci, morbi sociis feugiat eros quam.',
    onPress: () => navigate('ExpertConsultation'),
  },
  {
    id: '2',
    icon: icons.recommendation_service,
    name: 'Product Recommendation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit orci, morbi sociis feugiat eros quam.',
    onPress: () => {},
  },
];

const HIAR_CONCERN = [
  {
    id: '1',
    icon: dummyImages.blonde,
    name: 'Blonde',
  },
  {
    id: '2',
    icon: dummyImages.black,
    name: 'Black',
  },
  {
    id: '3',
    icon: dummyImages.red,
    name: 'Red',
  },
];

const Home = () => {
  const {values, functions} = useHomeController();

  const renderBanners = ({index}: any) => (
    <Image
      key={index}
      source={banners.home_banner}
      style={styles.sliding_banner}
    />
  );

  const renderService = ({id, icon, name, detail, onPress}: any) => (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      style={styles.service_card}
      onPress={onPress}>
      <View style={styles.service_icon_container}>
        <Image source={icon} />
      </View>
      <View style={styles.service_text_container}>
        <CustomText weight="semiBold" style={styles.service_name}>
          {name}
        </CustomText>
        <CustomText style={styles.service_detail}>{detail}</CustomText>
      </View>
    </TouchableOpacity>
  );

  const renderHairConcern = ({id, icon, name}: any) => (
    <TouchableOpacity key={id} activeOpacity={0.7} style={styles.concern_card}>
      <Image source={icon} />
      <CustomText style={styles.concern_name}>{name}</CustomText>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      {/* Common Header */}
      <HomeHeader />

      {/* Sliding Banners */}
      <View style={styles.slider_container}>
        <Carousel
          loop
          width={vw * 100}
          height={heightPixel(186)}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          renderItem={renderBanners}
        />
      </View>

      {/* Services Cards */}
      <View style={styles.services_wrapper}>{SERVICES.map(renderService)}</View>

      {/* Hair Concern Question */}
      <View style={styles.question_container}>
        <CustomText weight="semiBold" style={styles.question}>
          What’s Your Hair Concern?
        </CustomText>
        <View style={styles.line} />
      </View>

      {/* Hair Concern Options */}
      <View style={styles.concern_wrapper}>
        {HIAR_CONCERN.map(renderHairConcern)}
      </View>
    </ScreenWrapper>
  );
};

export default Home;
