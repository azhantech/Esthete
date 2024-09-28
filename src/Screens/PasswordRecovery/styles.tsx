import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {vh, vw} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: vh * 2,
  },
  logo: {
    width: vw * 60,
    height: vh * 20,
    resizeMode: 'contain',
    marginBottom: vh * 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },

  error: {
    color: colors.red,
    marginTop: vh * 1,
    marginBottom: vh * 1,
  },
  continueButton: {
    alignSelf: 'center',
    marginTop: vh * 3,
    width: vw * 80,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: vh * 4,
    marginBottom: vh * 4,
    alignSelf: 'center',
  },
  loginText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
export default styles;
