import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: vw * 5,
    marginVertical: vh * 2,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: vh * 2,
    alignSelf: 'center',
  },
  prevButton: {
    backgroundColor: colors.black,
    width: '45%',
  },
  nextButton: {
    backgroundColor: colors.borderColor,
    width: '45%',
  },
});

export default styles;
