import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 5, // 5% padding horizontally
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh * 3,
  },
  title: {
    fontSize: vw * 6, // 6% of the screen width
    fontWeight: 'bold',
    color: colors.black,
  },
  emergencyButton: {
    backgroundColor: colors.questionnairColor, // Assuming 'alert' is the color for emergency button
    width: '40%',
  },
  groupsList: {
    marginTop: vh,
    paddingBottom: vh * 10,
  },
  separator: {
    height: 1,
    // Assuming 'divider' is a grey or light color
    marginVertical: vh * 0.2,
  },
});
