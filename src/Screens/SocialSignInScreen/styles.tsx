import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: vh * 20,
  },
  textStyle: {color: 'black', fontSize: vh * 1.5},
  image: {
    width: vw * 100,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: vh * 3,
    marginVertical: 20,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#4285F4',
    borderWidth: 1,
    marginBottom: 10,
  },
  appleButton: {
    backgroundColor: '#000',
    marginBottom: 10,
  },
  passwordButton: {
    backgroundColor: '#4CAF50',
    marginVertical: 20,
  },
  orText: {
    marginVertical: 10,
    fontSize: vh * 2.2,
  },
  signUpWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  signUpText: {
    color: 'red',
    marginLeft: 5,
  },
});
