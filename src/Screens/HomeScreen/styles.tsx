import {StyleSheet} from 'react-native';
import {
  appShadow,
  font,
  heightPixel,
  vw,
  widthPixel,
} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliding_banner: {
    height: heightPixel(186),
    width: widthPixel(312),
    borderRadius: heightPixel(10),
    borderBottomRightRadius: 0,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  slider_container: {
    height: heightPixel(186),
    marginTop: heightPixel(25),
  },
  service_card: {
    width: vw * 80,
    flexDirection: 'row',
    // alignSelf: 'center',
    marginTop: heightPixel(30),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  service_icon_container: {
    height: heightPixel(71),
    width: widthPixel(69),
    borderRadius: heightPixel(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    ...appShadow,
  },
  service_text_container: {
    width: widthPixel(234),
  },
  service_name: {
    color: colors.dark_text,
  },
  service_detail: {
    color: colors.dark_text,
    fontSize: font(12),
  },
  services_wrapper: {
    alignItems: 'center',
    marginVertical: heightPixel(10),
  },
  question: {
    fontSize: font(22),
    color: colors.dark_text,
  },
  question_container: {
    width: vw * 80,
    alignSelf: 'center',
    marginTop: heightPixel(30),
    marginBottom: heightPixel(15),
  },
  line: {
    marginTop: heightPixel(7),
    borderWidth: 1,
    width: widthPixel(68),
    borderColor: colors.primary,
  },
  concern_card: {
    alignItems: 'center',
  },
  concern_wrapper: {
    flexDirection: 'row',
    width: vw * 80,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  concern_name: {
    marginTop: heightPixel(10),
  },
});
