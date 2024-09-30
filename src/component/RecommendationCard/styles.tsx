import {StyleSheet} from 'react-native';
import {appShadow, font, heightPixel, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: vw * 80,
    marginTop: heightPixel(10),
  },
  image_container: {
    height: heightPixel(147),
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
  type: {
    fontSize: font(18),
    color: colors.primary,
  },
  description: {
    marginTop: heightPixel(2),
    fontSize: font(12),
    lineHeight: font(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(5),
    width: '100%',
  },
  label: {
    fontSize: font(12),
    color: colors.primary,
    lineHeight: font(35),
  },
  value: {
    fontSize: font(12),
    color: colors.black,
    lineHeight: font(35),
  },
});
