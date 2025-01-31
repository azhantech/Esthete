import {StyleSheet} from 'react-native';
import {font, heightPixel, vh, width} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: font(22),
    marginTop: heightPixel(30),
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    marginVertical: vh * 3,
    alignSelf: 'center',
  },
  prevButton: {
    width: '45%',
  },
  nextButton: {
    backgroundColor: colors.auth_button,
    borderColor: colors.primary,
    width: '90%',
  },
  nextButtonText: {
    color: colors.black,
  },
  items_wrapper: {
    flexDirection: 'row',
    width: width,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default styles;
