import {StyleSheet} from 'react-native';
import {font, heightPixel, vw, width, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: font(22),
    marginTop: heightPixel(10),
    color: colors.primary,
    width: width,
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width,
    marginBottom: heightPixel(10),
    marginTop: heightPixel(20),
  },
  items_wrapper: {
    flexDirection: 'row',
    width: width,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  content_container: {
    paddingHorizontal: vw * 10,
  },
  horizontal_list_Container: {
    height: heightPixel(242),
    marginTop: heightPixel(5),
  },
  seperator: {
    width: widthPixel(20),
  },
});

export default styles;
