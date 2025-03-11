import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import useHomeController from '../../Controllers/useHomeController';
import HomeHeader from '../../component/HomeHeader';
import Carousel from 'react-native-reanimated-carousel';
import {heightPixel, vw, widthPixel} from '../../Utils/helpers';
import {Image, TouchableOpacity, View} from 'react-native';
import {banners, dummyImages, icons} from '../../Assets/Images';
import CustomText from '../../component/Text';
import {navigate} from '../../Utils/navigation';
import colors from '../../Utils/colors';
import Button from '../../component/Button';
import {selectUser} from '../../Redux/Slices/user';
import {useSelector} from 'react-redux';

const SERVICES = [
  {
    id: '1',
    icon: icons.forum_service,
    name: 'Expert’s Consultation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit orci, morbi sociis feugiat eros quam.',
    onPress: () => navigate('ExpertConsultation', {back: true}),
  },
  {
    id: '2',
    icon: icons.recommendation_service,
    name: 'Product Recommendation',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit orci, morbi sociis feugiat eros quam.',
    onPress: () => navigate('ProductRecommendation', {back: true}),
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
const skinConcerns = [
  {id: 2, text: 'Hair Loss', image: dummyImages.hair.straight},
  {id: 1, text: 'Split Ends', image: dummyImages.hair.colly},
  {id: 3, text: 'Dandruff', image: dummyImages.hair.curly},
  {id: 4, text: 'Frizz', image: dummyImages.hair.straight},
  {id: 6, text: 'Dullness', image: dummyImages.hair.colly},
  {id: 5, text: 'Dryness', image: dummyImages.hair.colly},
];
const Home = () => {
  const {values, functions} = useHomeController();
  const user = useSelector(selectUser);
  const matchingConcerns = skinConcerns.filter(concern =>
    user?.hairConcerns?.includes(concern.text),
  );
  const renderBanners = ({index}: any) => (
    <View
      style={{
        height: heightPixel(186),
        width: widthPixel(312),
        borderRadius: heightPixel(10),
        backgroundColor: colors.primary,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: widthPixel(20),
      }}>
      <View
        style={{
          width: '48%',
          height: '67%',
          justifyContent: 'space-between',
        }}>
        <View>
          <CustomText weight="semiBold" style={styles.bannerHeading}>
            We Beauty
          </CustomText>
          <CustomText style={styles.bannerTxt}>
            Beauty never been so easy
          </CustomText>
        </View>

        <CustomText style={[styles.bannerTxt]}>
          Lorem Ipsum dummy text of the printing and typesetting industry Lorem
          Ipsum
        </CustomText>
        <Button
          text="Learn more about us"
          onPress={() => navigate('AboutUs')}
          style={styles.bannerBtn}
          textStyle={styles.bannerBtnTxt}
        />
        {/* <CustomText style={styles.question}></CustomText> */}
      </View>
      <View
        style={{
          width: '50%',
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          height: '100%',
        }}>
        <Image
          source={dummyImages.banner}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
    </View>
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

  const renderHairConcern = ({id, image, text}: any) => {
    console.log('id', id);
    return (
      <TouchableOpacity key={id} activeOpacity={1} style={styles.concern_card}>
        <Image source={image} />
        <CustomText style={styles.concern_name}>{text}</CustomText>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      contentContainerStyle={{
        paddingBottom: heightPixel(100),
      }}>
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
      <View style={styles.services_wrapper}>{SERVICES?.map(renderService)}</View>

      {/* Hair Concern Question */}
      <View style={styles.question_container}>
        <CustomText weight="semiBold" style={styles.question}>
          What’s Your Hair Concern?
        </CustomText>
        {/* <View style={styles.line} /> */}
      </View>

      {/* Hair Concern Options */}
      {matchingConcerns?.length && (
        <View style={styles.concern_wrapper}>
          {matchingConcerns?.map(renderHairConcern)}
        </View>
      )}
    </ScreenWrapper>
  );
};

export default Home;
