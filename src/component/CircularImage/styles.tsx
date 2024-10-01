import {StyleSheet} from 'react-native';
import {font, heightPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: heightPixel(15),
  },
  imageContainer: {
    width: heightPixel(85),
    height: heightPixel(85),
    borderRadius: heightPixel(85) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: colors.auth_button,
  },
  selectedContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: font(12),
    marginTop: heightPixel(5),
  },
});
export default styles;
