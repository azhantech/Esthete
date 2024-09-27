import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import CustomText from '../../component/Text';
import GroupCard from '../../component/GroupCard'; // Assuming you create GroupCard separately
import {vh, vw, width} from '../../Utils/helpers';
import {styles} from './styles';
import Button from '../../component/Button';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages, icons} from '../../Assets/Images';
import Modal from '../../component/Modal';
import {navigationRef} from '../../Utils/navigation';
import colors from '../../Utils/colors';
import useHomeController from '../../Controllers/useHomeController';
import SuggestedGroupModal from '../../component/SuggestedGroupModal';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;

const Home = () => {
  const [visible, setVisibility] = useState(true);
  const {values, functions} = useHomeController();

  const groupsData = [
    {
      id: '1',
      image: dummyImages.dummyUser1,
      title: 'My Mental (Healthy Mind)',
      description: '22k Members 10+ Posts A Day',
    },
    {
      id: '2',
      image: dummyImages.dummyUser2,
      title: 'Body Bliss (Healthy Body)',
      description: '22k Members 10+ Posts A Day',
    },
    // Add more groups here if necessary
  ];
  const renderGroupItem = ({item}) => (
    <GroupCard
      image={item.image}
      title={item.title}
      description={item.description}
      onJoin={() => navigationRef.navigate('ChatScreen', {name: item?.title})}
    />
  );
  return (
    <ScreenWrapper scroll contentContainerStyle={styles.container}>
      {/* Greeting Section */}
      <View style={styles.greetingSection}>
        <CustomText style={styles.greeting} weight="bold">
          Hi ! anjali
        </CustomText>
        <Button
          onPress={() =>
            navigationRef.navigate('ChatScreen', {name: 'Emergency'})
          }
          text="Emergency"
          style={styles.emergencyButton}
        />
      </View>

      {/* Warning Section */}
      <View style={styles.warningSection}>
        <Image source={icons.warningIcon} style={styles.warningIcon} />
        <CustomText style={styles.warningText} weight="bold">
          Users Are Responsible For Their Own Actions And Interactions Within
          This App. Always Exercise Caution And Discretion When Sharing Personal
          Information.
        </CustomText>
      </View>
      {/* Groups Section */}
      <View style={styles.groupsSection}>
        <CustomText style={styles.groupsTitle}>Groups</CustomText>
        <View style={styles.line} />
        <FlatList
          data={groupsData}
          renderItem={renderGroupItem}
          style={{flex: 1}}
          keyExtractor={item => item.id}
          ListFooterComponent={() => (
            <CustomText
              style={styles.viewAll}
              onPress={() => console.log('View All')}>
              View All
            </CustomText>
          )}
        />
      </View>
      <Modal
        open={visible}
        setOpen={setVisibility}
        title="Agree to Terms and Conditions"
        text="Please read and agree to our Terms and Conditions and End User License Agreement (EULA) to access the application."
        text1="Terms of Service and End-User License Agreement (EULA)"
        buttons={[
          {
            text: 'I Agree',
            onPress: () => {
              setVisibility(false);
              functions.toggle();
            },
          },
        ]}
        close
        headingStyle={{color: colors.black}}
      />
      <Modal
        open={values.open}
        setOpen={functions.setOpen}
        text="Are you sure you want to agree terms of service and EULA."
        buttons={[
          {text: 'Yes', onPress: functions.verificationToggle},
          {text: 'No', onPress: functions.toggle},
        ]}
        row
        headingStyle={{color: colors.black}}
        icon={icons.pop_up_success}
      />
      <Modal
        open={values.verificationPopup}
        setOpen={functions.setverificationPopup}
        icon={icons.warning}
        text="Please take a selfie to complete your registration. This helps us ensure a safe and secure community. You can proceed once your selfie is approved."
        buttons={[
          {
            text: 'Take Selfie',
            onPress: () => navigationRef.navigate('TakeSelfieScreen'),
          },
        ]}
        btnIcon={icons.chat}
        headingStyle={{color: colors.black}}
      />
      {/* <SuggestedGroupModal title={"Suggested Groups"} /> */}
    </ScreenWrapper>
  );
};

export default Home;
