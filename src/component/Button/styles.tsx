import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    height: vh * 6,
    borderRadius: vh * 1,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
