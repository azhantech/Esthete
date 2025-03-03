import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import styles from './styles';
import {icons} from '../../Assets/Images';
import colors from '../../Utils/colors';
import {useEffect, useState} from 'react';
import {font, heightPixel} from '../../Utils/helpers';

const Notification = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  if (loader) {
    return (
      <View style={styles.loading_view}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
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
        data={[]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListEmptyComponent={
          <View
            style={{
              alignSelf: 'center',
              height: heightPixel(500),
              justifyContent: 'center',
            }}>
            <CustomText
              weight="bold"
              style={{
                fontSize: font(18),
                color: colors.black,
              }}>
              No Notifications Found
            </CustomText>
          </View>
        }
      />
    </ScreenWrapper>
  );
};

export default Notification;
