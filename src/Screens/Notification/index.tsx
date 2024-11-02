import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import styles from './styles';
import {icons} from '../../Assets/Images';
import colors from '../../Utils/colors';

const Notification = () => {
  const NotificationsData = [
    {
      id: '1',
      content: 'Lorem Ipsum Dolor Sit Amet, Dolor Lorem,',
      date: '01/01/2010',
      time: '01:01 PM',
    },
    {
      id: '2',
      content: 'Lorem Ipsum Dolor Sit Amet, Dolor Lorem,',
      date: '01/01/2010',
      time: '01:01 PM',
    },
    {
      id: '3',
      content: 'Lorem Ipsum Dolor Sit Amet, Dolor Lorem,',
      date: '01/01/2010',
      time: '01:01 PM',
    },
    {
      id: '4',
      content: 'Lorem Ipsum Dolor Sit Amet, Dolor Lorem,',
      date: '01/01/2010',
      time: '01:01 PM',
    },
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.itemContainer,
        item?.id == 1 && {backgroundColor: colors.notificationHightlighted},
      ]}>
      <CustomText style={styles.content}>{item.content}</CustomText>
      <View style={styles.row}>
        <CustomText style={styles.dateTime}>
          Date: <CustomText style={styles.blackText}>{item.date}</CustomText>
        </CustomText>
        <CustomText style={styles.dateTime}>
          Time: <CustomText style={styles.blackText}>{item.time}</CustomText>
        </CustomText>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.markButton}>
        <CustomText style={styles.markText}>Mark As Read</CustomText>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <View style={styles.filterContainer}>
        <CustomText style={styles.showing}>Showing</CustomText>
        <TouchableOpacity style={styles.filterButton}>
          <CustomText style={styles.allText}>All</CustomText>
          <Image source={icons.downArrow} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={NotificationsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          <TouchableOpacity activeOpacity={0.7} style={styles.viewAllBtn}>
            <CustomText style={styles.markText}>Load more</CustomText>
          </TouchableOpacity>
        }
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </ScreenWrapper>
  );
};

export default Notification;
