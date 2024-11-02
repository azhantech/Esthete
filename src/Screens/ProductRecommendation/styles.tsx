import {StyleSheet} from 'react-native';
import {heightPixel, vw} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  seperator: {
    height: heightPixel(5),
  },
  icon: {
    width: heightPixel(28),
    height: heightPixel(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_margin: {
    marginLeft: vw * 10,
  },
  left_icon: {
    width: heightPixel(28),
    height: heightPixel(28),
    resizeMode: 'contain',
  },
});
