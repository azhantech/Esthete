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
    alignItems: 'center',
    paddingHorizontal: widthPixel(20),
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
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
  image_container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: heightPixel(7),
    overflow: 'hidden',
    ...appShadow,
    marginBottom: heightPixel(10),
  },
  name: {
    fontSize: font(18),
    width: '100%',
  },
  description: {
    marginTop: heightPixel(2),
    fontSize: font(12),
    lineHeight: font(20),
  },
});
