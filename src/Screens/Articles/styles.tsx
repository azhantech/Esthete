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
  content_container: {
    paddingBottom: heightPixel(30),
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
