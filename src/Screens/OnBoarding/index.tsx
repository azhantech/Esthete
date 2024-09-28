import styles from './style';
import CustomText from '../../component/Text';
import useOnBoardingController from '../../Controllers/useOnBoardingController';
import {ImageBackground, View} from 'react-native';
import {backgroundImages} from '../../Assets/Images';
import Button from '../../component/Button';
import AuthHeader from '../../component/authHeader';

const OnBoarding = () => {
  const {values, functions} = useOnBoardingController();

  const TABS = [
    {
      title: 'Create',
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: 'Get Started!',
      background: backgroundImages.on_boarding_1,
    },
    {
      title: 'Connect',
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: 'Get Started!',
      background: backgroundImages.on_boarding_2,
    },
    {
      title: 'Explore',
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      button: 'Get Started!',
      background: backgroundImages.on_boarding_3,
    },
  ];

  return (
    <ImageBackground
      source={TABS[values.index]?.background}
      style={styles.container}>
      <View style={styles.header_wrapper}>
        <AuthHeader logo_white />
      </View>
      <View style={styles.content_view}>
        <CustomText style={styles.title} weight="semiBold">
          {TABS[values.index]?.title}
        </CustomText>
        <CustomText style={styles.text}>
          {TABS[values.index]?.subtitle}
        </CustomText>
        <View style={styles.paging_wrapper}>
          {[0, 1, 2].map(item => (
            <View
              style={[styles.dot, values.index == item && styles.active_dot]}
            />
          ))}
        </View>
        <Button
          weight="semiBold"
          text={TABS[values.index]?.button}
          style={styles.button}
          onPress={functions.onPress}
          textStyle={styles.button_text}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
