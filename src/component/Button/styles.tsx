import {StyleSheet} from 'react-native';
import {heightPixel, vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: heightPixel(46),
    borderRadius: heightPixel(40),
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.auth_button,
  },
  buttonText: {
    color: colors.white,
    textTransform: 'capitalize',
  },
  image: {
    height: vh * 2,
    resizeMode: 'contain',
    // marginRight: vw
  },
  iconContainer: {
    marginRight: vw,
  },
});
