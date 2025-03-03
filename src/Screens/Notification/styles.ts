import {StyleSheet} from 'react-native';
import {font, heightPixel, vh, vw, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    width: vw * 85,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: vh * 2,
  },
  showing: {
    color: colors.black,
    fontSize: font(14),
  },
  allText: {
    color: colors.white,
    fontSize: font(14),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: heightPixel(26),
    paddingHorizontal: widthPixel(7),
    width: widthPixel(55),
    marginLeft: vw * 3,
  },
  icon: {
    height: vh * 1,
    width: vw * 3,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 0.5,
  },
  dateTime: {
    width: vw * 40,
    color: colors.primary,
    fontSize: vh * 1.6,
  },
  blackText: {
    color: colors.black,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    paddingHorizontal: vw * 10,
    paddingVertical: vh * 1.5,
  },
  loading_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: vh * 2,
  },
  markText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  markButton: {
    alignSelf: 'flex-end',
  },
  viewAllBtn: {
    marginTop: vh * 2,
    marginRight: vw * 10,
    alignSelf: 'flex-end',
  },
  content: {
    fontSize: vh * 1.6,
    color: colors.black,
  },
});

export default styles;
