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
    width: vw * 80,
    marginTop: heightPixel(10),
  },
  image_container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: heightPixel(7),
    overflow: 'hidden',
    ...appShadow,
    marginBottom: heightPixel(10),
  },
  product_image: {
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: font(18),
  },
  description: {
    marginTop: heightPixel(2),
    fontSize: font(12),
    lineHeight: font(20),
  },
  play_icon: {
    position: 'absolute',
    left: widthPixel(10),
    top: heightPixel(10),
  },
  more_details: {
    color: colors.primary,
    marginTop: heightPixel(3),
  },
});
