import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import Input from '../../component/Input';
import Button from '../../component/Button';
import {navigate} from '../../Utils/navigation';
import {FlatList, TouchableOpacity, View} from 'react-native';
import CustomText from '../../component/Text';

const GOALS = [
  {
    id: '1',
    title: 'Goal A',
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Goal B',
    status: 'Completed',
  },
  {
    id: '3',
    title: 'Goal C',
    status: 'Completed',
  },
  {
    id: '4',
    title: 'Goal D',
    status: 'Completed',
  },
  {
    id: '5',
    title: 'Goal E',
    status: 'Completed',
  },
  {
    id: '6',
    title: 'Goal F',
    status: 'Completed',
  },
  {
    id: '7',
    title: 'Goal G',
    status: 'Completed',
  },
  {
    id: '8',
    title: 'Goal H',
    status: 'Completed',
  },
  {
    id: '9',
    title: 'Goal I',
    status: 'Completed',
  },
  {
    id: '10',
    title: 'Goal J',
    status: 'Completed',
  },
  {
    id: '11',
    title: 'Goal K',
    status: 'Completed',
  },
];

const MyGoals = () => {
  const renderItems = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.item}
      onPress={() => navigate('GoalDetails')}>
      <CustomText>{item?.title}</CustomText>
      <CustomText style={styles.status_text}>{item?.status}</CustomText>
    </TouchableOpacity>
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={GOALS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list_content}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
      />
    </ScreenWrapper>
  );
};

export default MyGoals;
