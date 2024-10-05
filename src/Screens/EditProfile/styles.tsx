import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {vh, heightPixel, font, widthPixel, width} from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    width: width,
    paddingBottom: vh * 10,
    alignSelf: 'center',
  },
  profileImageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh * 1.5,
  },
  image_container: {
    height: heightPixel(137),
    width: heightPixel(137),
    marginBottom: vh,
  },
  profileImage: {
    height: heightPixel(137),
    width: heightPixel(137),
  },
  editButton: {
    alignSelf: 'center',
    marginTop: vh * 5,
  },
  user_name: {
    fontSize: font(20),
    color: colors.dark_text,
  },
  user_email: {
    fontSize: font(16),
    color: colors.primary,
  },
  error: {
    color: colors.red,
    marginTop: 5,
    marginBottom: 10,
    width: width,
  },
  title: {
    fontSize: font(18),
    lineHeight: font(35),
    color: colors.primary,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colors.primary,
    width: widthPixel(84),
  },
  title_container: {
    width: width,
    marginTop: heightPixel(30),
    marginBottom: heightPixel(7),
  },
  icon_button: {
    backgroundColor: colors.primary,
    height: heightPixel(30),
    width: heightPixel(30),
    borderRadius: heightPixel(15),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: widthPixel(5),
  },
});

export default styles;
