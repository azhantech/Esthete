import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {
  vh,
  vw,
  heightPixel,
  font,
  widthPixel,
  appShadow,
} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    width: vw * 80,
    paddingBottom: vh * 10,
    alignSelf: 'center',
  },
  profileImageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh * 1.5,
  },
  profileImage: {
    height: heightPixel(137),
    width: heightPixel(137),
    borderRadius: heightPixel(137 * 2) / 2,
    resizeMode: 'cover',
    marginBottom: vh,
  },
  editButton: {
    alignSelf: 'center',
    marginTop: vh * 2,
  },
  user_name: {
    fontSize: font(20),
    color: colors.dark_text,
  },
  user_email: {
    fontSize: font(16),
    color: colors.primary,
  },
  option: {
    flexDirection: 'row',
    height: heightPixel(46),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...appShadow,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    borderRadius: heightPixel(7),
    marginTop: heightPixel(15),
  },
  option_name: {
    width: '77%',
    color: colors.dark_text,
  },
  icon_container: {
    height: heightPixel(25),
    width: heightPixel(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  options_container: {
    marginTop: heightPixel(20),
  },
});

export default styles;
