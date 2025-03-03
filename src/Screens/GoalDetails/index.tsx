import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import Input from '../../component/Input';
import Button from '../../component/Button';
import CustomText from '../../component/Text';
import {ActivityIndicator, Image, View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import {useState} from 'react';
import {
  useGetGoalByIdQuery,
  useUpdateGoalMutation,
  useUpdateImageMutation,
} from '../../Redux/Services/User';
import {
  hairColor,
  hairConcern,
  hairTypes,
  skinConcerns,
  skinTone,
  skinType,
  widthPixel,
} from '../../Utils/helpers';

import {launchCamera} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {request, PERMISSIONS} from 'react-native-permissions';
import {goBack} from '../../Utils/navigation';
import colors from '../../Utils/colors';

const GoalDetails = ({route}: any) => {
  const id = route?.params?.id;
  const [showImages, setShowImages] = useState(false);
  const [finishGoal, setFinishGoal] = useState(false);
  const {data, isLoading, isError, refetch} = useGetGoalByIdQuery({
    id: id,
  });
  const [updateImage, {isLoading: updateImageLoader}] =
    useUpdateImageMutation();

  const [updateGoal, {isLoading: updateGoalLoader}] = useUpdateGoalMutation();
  const [image, setImage] = useState(null);

  const goalsArr = [
    {id: 1, question: 'What’s your Skin Type?', key: 'skinType', answer: 'Dry'},
    {
      id: 2,
      question: 'What’s your Skin Tone?',
      key: 'skinTone',
      answer: 'Medium',
    },
    {
      id: 3,
      question: 'What’s your Skin Concern?',
      key: 'skinConcerns',
      answer: 'Acne Scars, Hyper-Pigmentation, Sensitivity',
    },
    {
      id: 4,
      question: 'What’s your Hair Type?',
      key: 'hairType',
      answer: 'Straight',
    },
    {
      id: 5,
      question: 'What’s your Hair Colour?',
      key: 'hairColor',
      answer: 'Black',
    },
    {
      id: 6,
      question: 'What’s your Hair Concern?',
      key: 'hairConcerns',
      answer: 'Dullness, Frizz, Hair Loss',
    },
  ];
  const handleUploadImage = async () => {
    try {
      let options = {
        mediaType: 'photo',
        quality: 0.3,
        includeBase64: false,
        saveToPhotos: false,
      };

      const result = await launchCamera(options);
      if (result.assets && result.assets[0]) {
        let _res = result.assets[0];
        let _img = {
          uri: _res.uri,
          type: _res.type,
          name: _res.fileName,
        };
        setImage(_img);
      }
    } catch (e) {
      console.log('Error capturing image:', e);
    }
  };

  const handleonSubmit = (body: any) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      if (image) {
        updateImage(formData).then(res => {
          console.log('response from update Image', res);
          updateGoal({imageUrl: res?.data?.data?.path, id: id})
            .unwrap()
            .then(res => {
              console.log('response from update Image', res);
              // profile_image
              Toast.show({
                type: 'success',
                text1: 'Goal Updated',
                text2: res?.message,
              });
              console.log('response from update Profile', res);
              goBack();
            })
            .catch(err => {
              console.log('Error from update Profile', err);
            });
        });
      } else {
        updateGoal({...body, id: id})
          .unwrap()
          .then(res => {
            console.log('response from update Image', res);
            // profile_image
            Toast.show({
              type: 'success',
              text1: 'Goal Updated',
              text2: 'Goal has been marked as completed',
            });
            console.log('response from update Profile', res);
            goBack();
          })
          .catch(err => {
            console.log('Error from update Profile', err);
          });
      }
    } catch (err) {}
  };
  const updatedGoalsArr = goalsArr.map(goal => ({
    ...goal,
    answer: Array.isArray(data?.data[goal.key])
      ? data?.data[goal.key].join(', ')
      : data?.data[goal.key] || 'Not Provided',
  }));
  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      showsVerticalScrollIndicator={false}>
      <CustomText weight="bold" style={styles.status_text}>
        {data?.data?.status}
      </CustomText>
      {updatedGoalsArr?.map(item => {
        return (
          <>
            {item?.answer?.length ? (
              <View style={styles.question_container}>
                <CustomText style={styles.question_text} weight="semiBold">
                  {item?.question}
                </CustomText>
                <View style={styles.input_container}>
                  <CustomText style={styles.answer_txt}>
                    {item?.answer}
                  </CustomText>
                </View>
              </View>
            ) : null}
          </>
        );
      })}

      {showImages && (
        <View style={styles.images_container}>
          <Image source={dummyImages.goal_1} style={styles.image} />
          <Image source={dummyImages.goal_2} style={styles.image} />
        </View>
      )}
      {(data?.data?.progressImages?.length || image) && (
        <View style={styles.images_container}>
          {data?.data?.progressImages?.map((item, index) => (
            <Image
              key={index}
              source={{uri: `http://192.168.100.17:3000/${item?.url}`}}
              style={[
                styles.image,
                index === 0 && {
                  marginRight: widthPixel(20),
                },
              ]}
            />
          ))}
          <Image source={{uri: image?.uri}} style={styles.image} />
        </View>
      )}
      {!showImages && !image && data?.data?.progressImages?.length < 2 && (
        <Button
          text="Upload Image"
          style={styles.button}
          onPress={() => handleUploadImage()}
          isLoading={updateGoalLoader}
          disabled={updateGoalLoader}
        />
      )}
      {image && (
        <Button
          text="Save Changes"
          style={styles.button}
          onPress={handleonSubmit}
          isLoading={updateGoalLoader}
          disabled={updateGoalLoader}
        />
      )}
      {data?.data?.progressImages?.length >= 2 &&
        data?.data?.status != 'Completed' && (
          <Button
            text="Finish Goal"
            style={styles.button}
            onPress={() => handleonSubmit({status: 'Completed'})}
            isLoading={updateGoalLoader}
            disabled={updateGoalLoader}
          />
        )}
    </ScreenWrapper>
  );
};

export default GoalDetails;
