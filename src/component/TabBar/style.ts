import {Platform, StyleSheet} from 'react-native';
import {BOTTOMBAR_HEIGHT, vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
  item: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
  },
  bar: {
    width: '100%',
    height: Platform.OS == 'ios' ? BOTTOMBAR_HEIGHT - 20 : BOTTOMBAR_HEIGHT,
    borderTopRightRadius: vh,
    borderTopLeftRadius: vh,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingTop: vh * 2,
    flexDirection:'row'
  },
  txtStyle: {
    fontSize: vh * 2,
    textTransform: 'capitalize',
  },
});

export default styles;
