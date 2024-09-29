import { Platform, StyleSheet } from 'react-native';
import { appShadow, BOTTOMBAR_HEIGHT, heightPixel, vh, vw } from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
  item: {
    width: '24%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
  },
  bar: {
    width: '100%',
    height: Platform.OS == 'ios' ? BOTTOMBAR_HEIGHT - 20 : BOTTOMBAR_HEIGHT,
    borderTopRightRadius: heightPixel(20),
    borderTopLeftRadius: heightPixel(20),
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingTop: vh * 2,
    flexDirection: 'row',
    // ...appShadow
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 24,
    shadowColor: "#000",
  },
  txtStyle: {
    fontSize: vh * 2,
    textTransform: 'capitalize',
  },
  selected_view: {
    height: heightPixel(41),
    width: heightPixel(41),
    borderRadius: heightPixel(41) / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
