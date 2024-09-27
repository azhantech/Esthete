import {StyleSheet} from 'react-native';
import {appShadow, vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: vh * 1.9,
  },
  happy: {
    fontSize: vh * 1.4,
    color: colors.selectionColor,
  },
  profileImageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: vh * 1.5,
  },
  profileImage: {
    height: vh * 18,
    width: vh * 18,
    marginBottom: vh,
  },
  seprator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderColor,
    marginVertical: vh * 5,
  },
  grpTxt: {
    color: colors.black,
    fontSize: vh * 2.5,
    textTransform: 'capitalize',
    width: '80%',
    marginBottom: vh * 5,

  },
  groupsList: {
    marginTop: vh,
  },
  separator: {
    height: 1,
    // Assuming 'divider' is a grey or light color
    marginVertical: vh * 0.2,
  },
});

export default styles;
