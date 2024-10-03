import {StyleSheet} from 'react-native';
import {font, heightPixel, width} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content_view: {
    width: width,
  },
  value: {
    fontSize: font(12),
    marginTop: heightPixel(7),
    lineHeight: font(20),
  },
});
