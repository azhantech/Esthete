import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import styles from './styles';
import {dummyImages, icons} from '../../Assets/Images';

import GroupCard from '../../component/GroupCard';
import {vh, vw} from '../../Utils/helpers';
import {navigationRef} from '../../Utils/navigation';
import colors from '../../Utils/colors';
import {useNavigation} from '@react-navigation/native';
import Modal from '../../component/Modal';
import useOtherProfileController from '../../Controllers/useOtherProfileController';
export default function OtherUserProfile() {
  const navigation = useNavigation();
  const {values, functions} = useOtherProfileController();

  const groupsData = [
    {
      id: '1',
      title: 'My Mental (Healthy Mind)',
      description: '22k members',
      image: dummyImages.dummyUser1,
      joined: false,
      common: true,
      gropType: '(Personal finance / money matters)',
    },
    {
      id: '2',
      title: 'Gal Pal (Making Friends)',
      description: '22k Members',
      image: dummyImages.dummyUser2,
      joined: true,
      common: true,
      gropType: '(money Tips)',
    },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            functions.toggle();
          }}
          style={{
            marginRight: vw * 5,
          }}>
          <CustomText
            weight="bold"
            style={{
              fontSize: vh * 1.5,
              color: colors.questionnairColor,
              textTransform: 'capitalize',
              textDecorationLine: 'underline',
            }}>
            Report Alexa
          </CustomText>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const renderItem = (item, index) => (
    <GroupCard
      cardContainer={{height: vh * 15}}
      key={index}
      image={item.image}
      title={item.title}
      description={item.description}
      imageContainer={{width: '25%'}}
      onJoin={() => console.log('Join clicked for', item.title)}
      rating={item?.rating}
      common={item?.common}
      groupType={item?.gropType}
    />
  );
  return (
    <ScreenWrapper
      scroll
      contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
      <View style={styles.profileImageContainer}>
        <Image source={dummyImages.dummyProfile} style={styles.profileImage} />
        <CustomText weight="bold" style={styles.title}>
          Alex
        </CustomText>
      </View>
      <View style={styles.seprator} />
      <CustomText style={styles.grpTxt} weight="semiBold">
        2 groups in common
      </CustomText>
      <View style={{width: '80%'}}>
        {groupsData.map((item, index) => renderItem(item, index))}
      </View>
      <Modal
        open={values.open}
        setOpen={functions.setOpen}
        title="Report Reason"
        buttons={[
          {
            text: 'Report',
            onPress: () => functions.onSubmit(),
          },
        ]}
        placeholder="Type reason here"
        multiline
        setValue={val => console.log('Value', val)}
        btnIcon={icons.chat}
        headingStyle={{color: colors.black}}
        input_wrapper={{backgroundColor: '#F2F2F2', marginBottom: 0}}
      />
    </ScreenWrapper>
  );
}
