import {StyleSheet} from 'react-native';
import {
  appShadow,
  font,
  heightPixel,
  vh,
  vw,
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
    paddingBottom: vh * 10,
    paddingTop: vh * 1.5,
  },
  renderItem: {
    width: width,
    backgroundColor: colors.white,
    height: heightPixel(109),
    marginVertical: 6,
    borderRadius: vh,
    ...appShadow,
    borderWidth: 1,
    borderColor: colors.dot_gray,
    padding: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: heightPixel(95),
    width: widthPixel(93),
    borderRadius: vh,
  },
  detailsContainer: {
    height: '100%',
    width: widthPixel(187),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: font(14),
    color: colors.black,
  },
  detailsTxt: {
    fontSize: font(12),
    color: colors.dark_text,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerTxt: {
    fontSize: font(12),
    color: colors.primary,
  },
  iconStyle: {
    height: heightPixel(13),
    width: widthPixel(15),
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: vw,
  },
  btn: {
    marginVertical: vh * 3,
  },
});
