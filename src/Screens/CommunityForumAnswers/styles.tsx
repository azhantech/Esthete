import {StyleSheet} from 'react-native';
import {
  appShadow,
  font,
  heightPixel,
  vh,
  width,
  widthPixel,
} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    paddingBottom: vh * 5,
    paddingTop: vh * 1.5,
  },
  renderItem: {
    width: width,
    backgroundColor: colors.white,
    borderRadius: vh,
    ...appShadow,
    borderWidth: 1,
    borderColor: colors.dot_gray,
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(15),
  },
  header_container: {
    width: width,
    marginBottom: heightPixel(25),
  },
  user_name: {
    color: colors.primary,
    marginBottom: heightPixel(3),
  },
  seperator: {
    height: heightPixel(15),
  },
  image: {
    height: heightPixel(123),
    width: widthPixel(312),
    borderRadius: heightPixel(7),
  },
  question_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(15),
  },
  total_answers_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  question: {
    color: colors.black,
  },
  total_answers_text: {
    fontSize: font(12),
    color: colors.primary,
    marginRight: widthPixel(5),
  },
  posted_by_text: {
    fontSize: font(12),
    color: colors.primary,
    marginVertical: heightPixel(8),
  },
  input_container: {
    width: width,
    marginTop: heightPixel(20),
  },
  input_style: {
    borderColor: colors.auth_button,
    backgroundColor: colors.primary,
    borderRadius: heightPixel(54),
  },
  input_text_style: {
    color: colors.white,
    paddingLeft: widthPixel(30),
  },
});
