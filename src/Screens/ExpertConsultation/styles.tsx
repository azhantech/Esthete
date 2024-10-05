import {StyleSheet} from 'react-native';
import {font, heightPixel, vh, vw, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: heightPixel(30),
    paddingHorizontal: vw * 10,
    paddingTop: vh * 1.5,
  },
  renderItem: {
    width: widthPixel(149),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  image: {
    height: heightPixel(154),
    width: widthPixel(149),
    borderRadius: vh,
  },
  title: {
    fontSize: font(18),
    marginTop: heightPixel(5),
  },
  detailsTxt: {
    fontSize: font(10),
  },
  book_now: {
    fontSize: font(12),
    color: colors.primary,
    marginTop: heightPixel(3),
  },
  seperator: {
    height: heightPixel(10),
  },
  note: {
    fontSize: font(16),
    textAlign: 'center',
    width: widthPixel(308),
  },
  note_container: {
    width: widthPixel(363),
    backgroundColor: colors.light_green,
    alignItems: 'center',
    paddingVertical: heightPixel(30),
  },
  touchable_container: {
    height: vh * 100,
    width: vw * 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
});
