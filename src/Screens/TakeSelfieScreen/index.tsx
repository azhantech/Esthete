import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import colors from '../../Utils/colors';
import {vw, vh} from '../../Utils/helpers';
import AuthHeader from '../../component/authHeader';
import {dummyImages, icons} from '../../Assets/Images'; // Assuming the camera icon image is included here
import useTakePictureController from '../../Controllers/useTakePictureController';
import Modal from '../../component/Modal';

const TakeSelfieScreen = () => {
  const {values, functions} = useTakePictureController();

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <View style={styles.selfieContainer}>
        <CustomText style={styles.title} weight="bold">
          Take A Picture On Your Face
        </CustomText>
        {/* Replace with the appropriate image or camera preview component */}
        <Image
          source={dummyImages.GurrlSelfie} // Replace with your selfie placeholder image
          style={styles.selfieImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => console.log('Here')}>
          <Image
            source={icons.camera} // Replace with your camera icon
            style={styles.cameraIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {values?.open && (
        <Button
          text="ReTake"
          onPress={functions.onReTakeSubmit}
          style={styles.reTakeButton}
        />
      )}
      <Button
        text="Submit"
        onPress={functions.onSubmit}
        style={[styles.submitButton, !values?.open && {marginTop: vh * 5}]}
      />
      <Modal
        open={values.SucessPopup}
        setOpen={functions.setSucessPopup}
        icon={icons.pop_up_success}
        title="Thanks for Creating Profile"
        text="We'll review your profile and if we can approve it. You'll be able to access the platform."
        buttons={[
          {
            text: 'ok',
            onPress: functions.goBack,
          },
        ]}
        headingStyle={{color: colors.black}}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  selfieContainer: {
    marginTop: vh * 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingVertical: vh * 2,
    borderRadius: vh,
    elevation: 2,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: vh * 2,
    color: colors.black,
    marginBottom: vh * 2,
  },
  selfieImage: {
    width: vw * 75,
    height: vh * 43,
    borderRadius: 20,
  },
  cameraButton: {
    marginTop: vh * 2,
    width: vw * 16,
    height: vw * 16,
    borderRadius: (vw * 16) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  cameraIcon: {
    width: '65%',
    height: '65%',
  },
  submitButton: {
    marginTop: vh * 2,
    backgroundColor: colors.primary,
    width: vw * 76,
  },
  reTakeButton: {
    marginTop: vh * 5,
    backgroundColor: colors.questionnairColor,
    width: vw * 76,
  },
});

export default TakeSelfieScreen;
