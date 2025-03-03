import {StyleSheet} from 'react-native';
import {
  appShadow,
  font,
  heightPixel,
  width,
  widthPixel,
} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_view: {
    width: width,
  },
  label: {
    fontSize: font(18),
    marginTop: heightPixel(10),
  },
  value: {
    fontSize: font(12),
    marginTop: heightPixel(4),
    lineHeight: font(20),
  },
  button_view: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPixel(20),
  },
  radio_card: {
    width: width,
    borderRadius: heightPixel(7),
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    ...appShadow,
    marginTop: heightPixel(15),
  },
  dot: {
    height: heightPixel(8),
    width: heightPixel(8),
    borderRadius: heightPixel(4),
    backgroundColor: colors.dot_gray,
  },
  radio_item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    marginVertical: heightPixel(5),
  },
  rating_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: heightPixel(5),
  },
  rating_container: {
    marginTop: heightPixel(10),
  },
  option: {
    fontSize: font(12),
    color: colors.light_text,
    marginLeft: widthPixel(5),
  },
  image: {
    marginLeft: widthPixel(5),
  },
  prevButton: {
    width: '45%',
  },
  nextButton: {
    backgroundColor: colors.auth_button,
    borderColor: colors.primary,
    width: '45%',
  },
  nextButtonText: {
    color: colors.black,
  },
  loading_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
