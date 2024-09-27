import {StyleSheet} from 'react-native';

// import { font, vh } from "src/Utils/helper";
import colors from '../../Utils/colors';

import {vw, vh} from '../../Utils/helpers';

const icon_size = 4;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 10,
    padding: vh * 3,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  button: {
    width: vw * 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 6,
  },
  invertedButton: {
    backgroundColor: colors.primary,
  },
  modalText: {
    textAlign: 'center',
    fontSize: vh * 1.6,
    color: colors.black,
  },
  modalText2: {
    textAlign: 'center',
    fontSize: vh * 1.6,
    color: colors.questionnairColor,
  },
  itemsWrapper: {
    width: '100%',
    marginVertical: vh * 2,
  },
  imageWrapper: {
    height: vh * 10,
    width: vh * 10,
    // borderRadius: (vh * 2) / 2,
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  buttonsWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: vh * 2.2,
    color: colors.questionnairColor,
  },
  cancel_button: {
    height: vh * 3,
    width: vh * 3,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: vh,
    top: vh,
  },
  cross_icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
});

export default styles;
