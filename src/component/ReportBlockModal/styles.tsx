import { StyleSheet } from 'react-native';
import { vh, vw } from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  dots: {
    padding: 10,
  },
  modalBackground: {
    alignItems: 'center',
    width: vw * 30,
    position: 'absolute',
    right: vh * 2,
    top: -10,
    zIndex: 100,
  },
  image: {
    height: vh * 3,
    width: vw * 3,
    resizeMode: 'contain',
    marginRight: vw * 1.2,
  },
  modalContainer: {
    borderRadius: 5,
    // marginBottom: 20,
    width: '100%',
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,

  },
  modalOption: {
    // paddingVertical: vh * 1,
    paddingVertical: vh * 1,
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
