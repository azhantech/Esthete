import {StyleSheet} from 'react-native';
import {font, heightPixel, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: widthPixel(228),
    height: heightPixel(242),
    justifyContent: 'space-between',
  },
  image: {
    height: heightPixel(154),
    width: widthPixel(228),
    backgroundColor: colors.black,
    borderRadius: widthPixel(15),
  },
  title: {
    fontSize: font(18),
  },
  description: {
    fontSize: font(12),
  },
  view_more: {
    color: colors.primary,
  },
});
