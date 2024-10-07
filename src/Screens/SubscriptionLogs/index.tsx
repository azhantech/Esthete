import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import {FlatList, View} from 'react-native';
import CustomText from '../../component/Text';
import Button from '../../component/Button';

const LOGS = [
  {
    id: '1',
    title: 'Premium',
    status: 'Active',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '2',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '3',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '4',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '5',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '6',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '7',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '8',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '9',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '10',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
  {
    id: '11',
    title: 'Premium',
    status: 'Inactive',
    subscription_date: '12/12/12',
    recurring_date: '12/12/12',
  },
];

const SubscriptionLogs = () => {
  const renderItems = ({item}: any) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <CustomText weight="semiBold" style={styles.title}>
          {item?.title}
        </CustomText>
        <CustomText weight="semiBold" style={styles.status_label}>
          Status:{'   '}
          <CustomText weight="semiBold" style={styles.status_text}>
            {item?.status}
          </CustomText>
        </CustomText>
      </View>
      <View style={[styles.row, styles.date_container]}>
        <View>
          <View
            style={[
              styles.date_row,
              item?.status == 'Active' && {width: 'auto'},
            ]}>
            <CustomText>Subscription Date:</CustomText>
            <CustomText>{item?.subscription_date}</CustomText>
          </View>
          <View
            style={[
              styles.date_row,
              item?.status == 'Active' && {width: 'auto'},
            ]}>
            <CustomText>Recurring Date:</CustomText>
            <CustomText>{item?.recurring_date}</CustomText>
          </View>
        </View>
        {item?.status == 'Active' && (
          <Button
            text={'Cancel'}
            onPress={() => {}}
            style={styles.cancel_button}
          />
        )}
      </View>
    </View>
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={LOGS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list_content}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
      />
      <Button
        text={'Renew Subscription'}
        onPress={() => {}}
        style={styles.renew_button}
      />
    </ScreenWrapper>
  );
};

export default SubscriptionLogs;
