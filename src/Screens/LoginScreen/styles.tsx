import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {heightPixel, vh, vw} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    width: vw * 80,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 0.5,
    justifyContent: 'flex-end',
  },
  rememberMe: {
    height: vh * 4,
    width: vw * 4,
    resizeMode: 'contain',
  },
  error: {
    color: colors.red,
    marginTop: 5,
    marginBottom: 10,
    width: vw * 80,
  },
  forgotText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  socialIcons: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    width: vw * 80,
    // height: vh * 7,
    marginVertical: vh * 2.5,
  },
  socialImg: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  socialIconContainer: {
    width: '28%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  signUpText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  btn: {
    alignSelf: 'center',
    marginVertical: vh * 2.5,
  },
  signupbtn: {
    marginVertical: vh * 2,
  },
  socialLoginBtn: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginTop: vh,
    alignItems: 'center',
    borderRadius: heightPixel(4),
  },
  socialBtnTxt: {
    color: colors.primary,
    minWidth: '50%',
  },
});
export default styles;
