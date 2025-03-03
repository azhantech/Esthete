import {StyleSheet} from 'react-native';
import {heightPixel} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  seperator: {
    height: heightPixel(5),
  },
  loading_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
