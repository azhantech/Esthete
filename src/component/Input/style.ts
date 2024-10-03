import {StyleSheet} from 'react-native';
import fonts from '../../Assets/Fonts';
import colors from '../../Utils/colors';
import {vh} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: vh * 1.5,
  },
  label_wrapper: {
    height: '40%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    color: colors.black,
    fontSize: 14,
  },
  input_wrapper: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 15,
    elevation: 2,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  textinput_wrapper: {
    justifyContent: 'center',
  },
  textinput: {
    flex: 1,
    color: colors.black,
    fontFamily: fonts.OpenSans.regular,
    fontSize: 14,
  },
  icon_wrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
});

export default styles;
