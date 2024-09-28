import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {vh, vw} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  resendCode: {
    color: colors.primary,
    textDecorationLine: 'underline',
    marginVertical: vh * 2,
    marginLeft: vh,
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
  subtitle: {
    fontSize: vh * 1.8,
    color: colors.gray,
    width: vw * 90,
    marginTop: -vh,
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
    alignSelf: 'center',
    marginBottom: vh * 4,
  },
  loginText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
